import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

import 'remixicon/fonts/remixicon.css';
import Providers from '@/app/components/providers';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={font.className}>
    <body className="flex">
    <main className="ml-64 flex-1 min-h-screen ">
      <Toaster position="top-right" />
      <Providers>
        {children}
      </Providers>
    </main>
    </body>
    </html>
  );
}

