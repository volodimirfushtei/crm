// src/app/components/static-map.tsx
'use client';

import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { CountryMap } from '../../../types/country';

export default function CountriesMap({ countries }: { countries: CountryMap[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const flyToCountry = (name: string) => {
    setActive(name);
  };


  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      {/* Статичне зображення карти */}
      <div
        ref={mapRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Точки для країн */}
        {countries.map((country) => {

          const left = `${(country.lng + 180) * 100 / 360}%`;
          const top = `${(90 - country.lat) * 100 / 180}%`;

          return (
            <button
              key={country.name}
              onClick={() => flyToCountry(country.name)}
              title={country.name}
              className={clsx(
                'absolute w-3 h-3 rounded-full bg-purple-500 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:bg-purple-700 z-10',
                active === country.name ? 'scale-150' : '',
              )}
              style={{ left, top }}
            >
              <span className="sr-only">{country.name}</span>
            </button>
          );
        })}
      </div>
      {/* Легенда знизу */}
      <ul className="absolute bottom-5 left-6 bg-white/80 p-3 rounded-md space-y-1 z-[10]">
        {countries.map((country) => (
          <li
            key={country.name}
            onClick={() => flyToCountry(country.name)}
            className={clsx(
              'flex items-center gap-2 text-sm cursor-pointer hover:underline',
              active === country.name ? 'font-bold text-purple-900' : 'text-gray-800',
            )}
          >
            <div className="w-2 h-2 rounded-full bg-purple-300" />
            {country.name} — {country.count}
          </li>
        ))}
      </ul>
    </div>
  );
}






