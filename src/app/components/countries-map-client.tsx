// src/app/components/countries-map-client.ts
'use client';

import dynamic from 'next/dynamic';
import Loader from '@/app/components/loader';


// In countries-map-client.ts
const CountriesMap = dynamic(() => import('./countries-map'), {
  ssr: false,
  loading: () => <div className="h-[400px] flex items-center justify-center"><Loader /></div>,
});

export default CountriesMap;





