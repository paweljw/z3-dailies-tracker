'use client';

import { useEffect } from 'react';
import { useState } from 'react';

export default function Notice() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const localNotice = localStorage.getItem('localNotice');
    setIsOpen(localNotice !== 'true');
  }, []);

  const handleClose = () => {
    localStorage.setItem('localNotice', 'true');
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-zinc-70 flex flex-col items-center justify-between gap-2 rounded-lg border-1 border-orange-300 p-4 text-orange-300 md:flex-row md:gap-4">
      <p className="text-justify">
        This website stores its data locally in your browser. There is currently no way to export this data to use it on
        another device. Browsers may delete this data when your disk fills up.
      </p>
      <button onClick={handleClose} className="inline-block rounded-md bg-orange-300 px-2 py-1 text-zinc-800">
        okay
      </button>
    </div>
  );
}
