import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Geist } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import { env } from '~/env';

export const metadata: Metadata = {
  title: 'Zenless Zone Zero dailies tracker',
  description: 'Zenless Zone Zero dailies tracker',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', url: '/favicon-16x16.png' },
  ],
  manifest: '/site.webmanifest',
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_TAG_ID} />
      </body>
    </html>
  );
}
