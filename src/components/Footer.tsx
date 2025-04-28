'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [storageEstimate, setStorageEstimate] = useState<StorageEstimate | null>(null);
  const [indexedDBSize, setIndexedDBSize] = useState<number | null>(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Get total storage estimate
    navigator.storage
      .estimate()
      .then((estimate) => {
        setStorageEstimate(estimate);
      })
      .catch((error) => {
        console.error(error);
      });

    // Get IndexedDB size
    const request = indexedDB.open('z3quest');
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction('completedTasks', 'readonly');
      const store = transaction.objectStore('completedTasks');
      const sizeRequest = store.getAll();

      sizeRequest.onsuccess = () => {
        // Calculate approximate size of stored data
        const data = sizeRequest.result;
        const size = new Blob([JSON.stringify(data)]).size;
        setIndexedDBSize(size);
      };
    };

    setShowStats(new URLSearchParams(window.location.search).get('stats-for-nerds') !== null);
  }, []);

  const usagePercentage = ((storageEstimate?.usage ?? 0) / (storageEstimate?.quota ?? 1)) * 100;

  return (
    <footer className="flex flex-col gap-1 bg-zinc-700 p-4 text-center text-white">
      <p>
        Zenless Zone Zero dailies tracker was created by{' '}
        <a href="https://whois.cooling.coffee" target="_blank" rel="noopener noreferrer" className="underline">
          Paweł J. Wal
        </a>{' '}
        and is{' '}
        <a
          href="https://github.com/paweljw/z3-dailies-tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          free and open-source software
        </a>
        .
      </p>
      <p className="text-sm">
        This site is a fan-made project and is not affiliated with, endorsed by, or sponsored by COGNOSPHERE PTE. LTD.
        (HoYoverse) or Zenless Zone Zero. All trademarks and copyrights are the property of their respective owners.
      </p>
      {showStats && (
        <p className="text-xs text-zinc-400">
          Used {usagePercentage.toFixed(2)}% of local storage quota ({storageEstimate?.usage} bytes total).
          {indexedDBSize !== null && ` IndexedDB usage: ${indexedDBSize} bytes.`}
        </p>
      )}
    </footer>
  );
}
