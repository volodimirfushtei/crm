import React from 'react';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import 'remixicon/fonts/remixicon.css';
import Providers from '@/app/components/providers';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'TruScape',
  description: 'Business Intelligence Platform',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <title></title>
    </head>
    <body className="flex ">

    <main className="ml-64 flex-1  min-h-screen "><Providers>
      {children}</Providers>
    </main>
    </body>
    </html>
  );
}
