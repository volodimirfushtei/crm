import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import Providers from '@/app/components/providers';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'CRM',
  description: 'Customer Relationship Management System',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {


  return (
    <html lang="uk" className={font.className}>
    <head>
      <title className=" text-[20px] font-semibold text-[#111827]">CRM</title>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-F3D7RNPM1D"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-F3D7RNPM1D');
            `,
        }}
      />
    </head>
    <body className="flex">
    <main className="ml-64 flex-1 min-h-screen">

      <Toaster position="top-right" />

      <Providers>
        {children}
      </Providers>
    </main>
    </body>
    </html>
  );
}

