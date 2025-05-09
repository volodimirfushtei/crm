import React from 'react';
import StatusLabel from '@/app/components/status-label';
import { CompanyStatus } from '@/app/lib/api';
import Image from 'next/image';

export interface CompanyStatusProps {
  avatar?: string;
  company: string;
  status: CompanyStatus;
  id: number;
}


export default function CompanyIt({ avatar, company, status, id }: CompanyStatusProps) {
  return (
    <div
      className="flex flex-col  items-center justify-center rounded-lg shadow-sm drop-shadow-xl border-2  w-[268px] h-[228px]  bg-transparentBlack overflow-hidden ">
      <div className="flex max-w-40 h-[172px] flex-col gap-5 items-center justify-center w-full ">
        <Image className="object-cover object-center"
               alt="logo company"
               src={avatar && avatar.startsWith('http') ? avatar : `/icons/${avatar || 'company-logo'}.svg`}
               height={40}
               width={48} />
        <a className="font-semibold text-base leading-6 text-center truncate max-w-xs text-[#FAFAFA] "
           href={`/companies/${id}`}>{company}</a>
        <StatusLabel status={status} />

      </div>
    </div>
  );
}

