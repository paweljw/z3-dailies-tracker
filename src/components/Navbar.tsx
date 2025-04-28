"use client";

import Link from "next/link";

export default function Navbar() {


    return (
        <nav className="flex items-center justify-between p-4 bg-zinc-700 text-white">
            <Link href="/" className="text-2xl font-bold">Z3 Dailies Tracker</Link>

        </nav>
    );
}