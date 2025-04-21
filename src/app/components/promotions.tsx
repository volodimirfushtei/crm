import React from 'react';
import style from "./promotions.module.css"
import Image from "next/image";

export interface PromotionsProps {
    children?: React.ReactNode;

}

function Promotions({}: PromotionsProps) {
    return (
        <div className="border border-[#f3f4f6] rounded-[4px] w-[556px] h-[348px] bg-[#f3f4f6] cursor-pointer">
            <h3 className="font-medium text-[20px] leading-[1.4] mb-5 text-[#111827] pt-5 pl-5">Promotions</h3>
            <table>
                <thead className="bg-[#f3f4f6] w-full">
                <tr>
                    <th className="rounded-tl-[2px] rounded-bl-[2px] w-[268px] h-[28px] text-left bg-[#111827] font-normal text-[12px] leading-[1.33333] text-white pl-[20px]">Company</th>
                    <th className="w-[180px] h-7 bg-[#e9d5ff] font-normal text-[12px] leading-[1.33333] text-[#111827] text-center">Name</th>
                    <th className="rounded-tr-[2px] rounded-br-[2px] w-[108px] h-[28px] bg-[#d9f99d] font-normal text-[12px] leading-[1.33333] text-[#111827] text-center">%</th>
                </tr>
                </thead>
                <tbody className="h-[36px]">

                {[...Array(7)].map((_, index) => (
                    <tr className={`h-9 ${index % 2 === 0 ? style.alternateColorEven : style.alternateColorOdd}`}
                        key={index}>
                        <td className="pl-5">
                            <div className="flex items-center">
                                <Image
                                    src="/images/LogoCosco.png"
                                    alt="Costco Wholesale Logo"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                Costco Wholesale
                            </div>
                        </td>
                        <td className="text-center">lorem ipsum dolor</td>
                        <td className="text-center">40%</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default Promotions;