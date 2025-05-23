import React from 'react';
import Image from 'next/image';
import type { Promotion } from '@/app/lib/api';
import DeletePromotionButton from '@/app/components/delete-promotion-button';

export interface PromotionProps {
  promotion: Promotion;
  className?: string;
}

export default function Promotion({ promotion }: PromotionProps) {
  return (

    <div
      className="w-[248px] h-[248px] relative rounded-lg shadow-sm overflow-hidden bg-[#e1fcfd] border-2 border-white hover:border-2 hover:border-amber-300 hover:scale-105 animate-border-spin"
    >

      <div className="relative w-full h-40 bg-gray-300 ">
        <div className="relative w-full h-full flex justify-center items-center  ">
          <Image fill className="object-cover object-center "
                 src={promotion.avatar && promotion.avatar.startsWith('http') ? promotion.avatar : `/images/${promotion.avatar || 'sale'}.png`}
                 alt="promotion avatar" /></div>
        <div className="w-14 h-14 absolute top-0 left-px rounded-br-full bg-lime-200" />
        <div className="w-14 h-14 absolute inset-0 py-3 pr-3 pl-0.5 rounded-br-full bg-gray-900">
          <p className="text-center text-xs font-bold text-gray-50">{`-${promotion.discount}%`}</p>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3 bg-lime-200 bg-cover bg-center " style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.8))',
      }}>
        <p className="text-base font-semibold text-gray-50">
          {promotion.title}
        </p>
        <p className="text-sm text-gray-50">{promotion.description}</p>
      </div>
      <DeletePromotionButton promotionId={promotion.id} className="absolute top-0 right-0 " />
    </div>
  );
}