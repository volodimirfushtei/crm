import React from 'react';
import CountriesMap from '@/app/components/countries-map';
import { Country as ApiCountry, getCountries } from '@/app/lib/api';
import { CountryMap as MapCountry } from '../../../../../types/country';
import DashboardCard from '@/app/components/dashboard-card'; // тип, який очікує CountriesMap
export const dynamic = 'force-dynamic';

export default async function Page() {


  const apiCountries: ApiCountry[] = await getCountries();


  const someLookup: Record<string, { lat: number; lng: number }> = {
    canada: { lat: 56.1304, lng: -106.3468 },
    usa: { lat: 37.0902, lng: -95.7129 },
    italia: { lat: 41.8719, lng: 12.5674 },
    spain: { lat: 40.4637, lng: -3.7492 },
    ukraine: { lat: 48.3794, lng: 31.1656 },

  };


  const mapCountries: MapCountry[] = apiCountries.map((c) => {
    const key = c.title.toLowerCase().replace(/\s+/g, '_'); //
    const coords = someLookup[key];

    if (!coords) {
      console.warn(`No coords  "${c.title}" → "${key}"`);
    }
    return {
      name: c.title,
      count: Math.floor(Math.random() * 100),
      lat: coords?.lat ?? 0,
      lng: coords?.lng ?? 0,
    };
  });

  return (
    <DashboardCard label="Countrties">
      <CountriesMap countries={mapCountries} />
    </DashboardCard>

  );
}

