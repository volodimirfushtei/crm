// src/app/components/countries-map-client.ts
'use client';

import dynamic from 'next/dynamic';

// ⚠️ SSR вимкнено для leaflet
const CountriesMap = dynamic(() => import('./countries-map'), {
  ssr: false,
});

export default CountriesMap;





