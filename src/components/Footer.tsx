"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const [storageEstimate, setStorageEstimate] = useState<StorageEstimate | null>(null);

    useEffect(() => {
        navigator.storage.estimate().then((estimate) => {
            setStorageEstimate(estimate)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const usagePercentage = (storageEstimate?.usage ?? 0) / (storageEstimate?.quota ?? 1);

    return (
        <footer className="bg-zinc-700 text-white p-4">
            <p>
                This site is a fan-made project and is not affiliated with, endorsed by, or sponsored by COGNOSPHERE PTE. LTD. (HoYoverse) or Zenless Zone Zero.
                All trademarks and copyrights are the property of their respective owners.
            </p>
            <p className="text-sm text-zinc-400">Using {usagePercentage.toFixed(2)}% of local storage.</p>
        </footer>
    );
}