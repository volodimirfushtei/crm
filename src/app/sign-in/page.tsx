// app/sign-in/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';


export default function SignIn() {
  const [providers, setProviders] = useState<Record<LiteralUnion<string>, ClientSafeProvider> | null>(null);

  useEffect(() => {
    getProviders().then((prov) => setProviders(prov));
  }, []);

  return (
    <div className="flex items-center justify-center mr-64 mt-40">
      <div className="w-full max-w-xl space-y-8 rounded-xl bg-white p-10 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Увійти до облікового запису</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Використовуйте свій <span className=" font-bold ">Google або Email</span> для входу
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {providers ? (
            Object.values(providers).map((provider) => {
              if (provider.id === 'google') {
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}

                    className="group relative flex w-full justify-center  rounded-xl border border-gray-300 bg-primary px-4 py-3 text-sm font-medium text-gray-50 shadow-sm hover:bg-secondary"
                  >
                    <span className="absolute inset-y-0 left-0 flex  items-center pl-3 ">
                      <Image width={28} height={28} alt="google" src="/images/google.svg" />
                    </span>
                    Continue with
                    <Image className="ml-2" width={60} height={32} alt="google" src="/images/google_icon.svg" />
                  </button>
                );
              }

              if (provider.id === 'email') {
                return (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                    className="flex w-full justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100"
                  >
                    Continue with Email
                  </button>
                );
              }

              return null;
            })
          ) : (
            <p className="flex text-center text-gray-500 items-center justify-center">
              <svg
                className="animate-spin h-4 w-4 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-50"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </p>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-400">
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}




