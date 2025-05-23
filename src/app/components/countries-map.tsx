'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import clsx from 'clsx';
import { MapRefSetter } from '@/app/components/map-ref-setter';
import { CountryMap } from '../../../types/country';


export interface CountriesMapProps {
  countries: CountryMap[];

}

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


// Компонент для фокусування карти на всіх країнах
function FitBounds({ countries }: { countries: CountryMap[] }) {
  const map = useMap();

  useEffect(() => {
    if (countries.length === 0) return;

    const bounds = L.latLngBounds(countries.map(c => [c.lat, c.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [countries, map]);

  return null;
}


export default function CountriesMap({ countries }: CountriesMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const flyToCountry = (lat: number, lng: number, name: string) => {
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lng], 5, { duration: 1.2 });
      setActive(name);
    }
  };

  if (countries.length === 0) return <p>No countries found</p>;

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <ul className="absolute bottom-5 left-6 bg-white/80 p-3 rounded-md space-y-1 z-[1000]">
        {countries.map((country) => (
          <li
            key={country.name}
            onClick={() => flyToCountry(country.lat, country.lng, country.name)}
            className={clsx(
              'flex items-center gap-2 text-sm cursor-pointer hover:underline',
              active === country.name ? 'font-bold text-purple-900' : 'text-[#111827]',
            )}
          >
            <div className="w-2 h-2 rounded-full bg-[#e9d5ff]" />
            {country.name} — {country.count}
          </li>
        ))}
      </ul>
      <MapContainer
        key={countries.map(c => c.name).join(',')}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <MapRefSetter mapRef={mapRef} />
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds countries={countries} />
        {countries.map((country) => (
          <Marker key={country.name} position={[country.lat, country.lng]}>
            <Popup>
              <strong>{country.name}</strong> — {country.count} companies
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}






