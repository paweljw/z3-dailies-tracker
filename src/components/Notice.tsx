"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function Notice() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const localNotice = localStorage.getItem("localNotice");
        setIsOpen(localNotice !== "true");
    }, []);

    const handleClose = () => {
        localStorage.setItem("localNotice", "true");
        setIsOpen(false);
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="bg-zinc-70 p-4 rounded-lg border-orange-300 border-1 text-orange-300 flex flex-col md:flex-row justify-between items-center">
            <p>
                This website stores its data locally in your browser.
                There is currently no way to export this data to use it on another device.
                Browsers may delete this data when your disk fills up.
            </p>
            <button onClick={handleClose} className="inline-block bg-orange-300 text-zinc-800 px-2 py-1 rounded-md">okay</button>
        </div>
    );
}