// components/map-ref-setter.tsx
'use client';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';

export function MapRefSetter({ mapRef }: { mapRef: React.MutableRefObject<L.Map | null> }) {
  const map = useMap();

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = map;
    }
  }, [map, mapRef]);

  return null;
}

