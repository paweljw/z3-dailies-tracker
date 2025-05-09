'use client';

import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-zinc-700 p-4 text-white">
      <Link href="/" className="text-2xl font-bold">
        <Image
          src="/android-chrome-192x192.png"
          alt="logo"
          width={48}
          height={48}
          aria-label="Zenless Zone Zero dailies tracker logo"
          title="Zenless Zone Zero dailies tracker"
        />
      </Link>
    </nav>
  );
}
