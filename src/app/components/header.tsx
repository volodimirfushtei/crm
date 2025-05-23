'use client';
import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Loader from '@/app/components/loader';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const { data: session, status } = useSession();

  return (
    <header
      className="flex items-center gap-5 py-6 px-10 border-b border-gray-300 bg-lime-100"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
      }}
    >
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">
        {children}
      </h1>

      <div className="w-px self-stretch bg-gray-300" />

      <div className="flex gap-3 items-center">
        {/* Avatar — клік: signIn або signOut */}
        <Image
          onClick={() => {
            if (session) {
              signOut();
            } else {
              signIn(); // за замовчуванням відкриє sign-in сторінку
            }
          }}
          width={44}
          height={44}
          src={session?.user?.image || '/images/avatar_icon.svg'}
          alt="avatar"
          className="rounded-full hover:drop-shadow-xl cursor-pointer"
        />

        <div className="leading-tight">
          {status === 'loading' ? (
            <span className="text-sm text-gray-600"><Loader /></span>
          ) : session ? (
            <>
              <p className="text-base font-semibold text-gray-900">
                Hi, {session.user?.name ?? 'Гість'}
              </p>
              <p className="text-sm text-gray-700">{session.user?.email}</p>
            </>
          ) : (
            <p className="text-sm text-gray-700">Push for enter</p>
          )}
        </div>
      </div>
    </header>
  );
}



