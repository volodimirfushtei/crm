import React from 'react';

export interface AboutCompanyProps {
  company: string;
  categoryTitle: string;
  joinedDate: string;
  country: string;
}

export default async function AboutCompany({ company, categoryTitle, joinedDate, country }: AboutCompanyProps) {
  return (
    <div
      className=" flex flex-col p-5 mb-10 items-start rounded-lg shadow-sm w-[268px] h-auto  rounded-md bg-gradient-to-br from-[#111827]/20 to-white/80">
      <h2 className="font-semibold text-[20px] mb-5 leading-[1.4] text-gray-900 ">About Company</h2>
      <ul className="flex flex-col gap-y-3 ">
        <li className="list-none font-normal text-base leading-6 text-[#111827] ">Category:{categoryTitle}</li>
        <li className="list-none font-normal text-base leading-6 text-[#111827]">Country:{country}</li>
        <li className="list-none font-normal text-base leading-6 text-[#111827]">Joined Data:{joinedDate}</li>
      </ul>
      <div className="w-[228px] h-0 border border-gray-300 mt-8 mb-8 " />
      <p className="font-normal text-base leading-6 text-[#111827] ">{company}</p>
    </div>
  );
}

