import React from 'react';
import Image from 'next/image';

export interface CountriesProps {
    children?: React.ReactNode;
    countries: { name: string; count: number; x: number; y: number }[
        ]; // Add x and y for marker positions
}

const defaultCountries = [
    {name: 'Canada', count: 4, x: -30, y: -40},
    {name: 'USA', count: 4, x: 50, y: 60},
    {name: 'Italia', count: 2, x: 50, y: 40},
    {name: 'Ukraine', count: 2, x: 50, y: 80},
    {name: 'Spain', count: 2, x: 50, y: 100},
];

function Countries({children, countries = defaultCountries}: CountriesProps) {
    return (
        <div className="flex flex-col rounded-[4px] w-[556px] h-[348px] bg-[#f3f4f6] relative cursor-pointer">
            <h3 className="font-medium text-[20px] leading-[1.4] pl-5 pt-5 text-[#111827]">Countries of companies</h3>
            <ul className="absolute bottom-5 left-[22px]">
                {countries.map((country, index) => (
                    <li key={index}
                        className="flex flex-row  items-center gap-1.5 font-medium text-[14px] leading-[1.42857] text-[#111827]">
                        <div className="w-2 h-2 rounded-full bg-[#e9d5ff] pt-0.5"></div>
                        {country.name} - {country.count}
                    </li>
                ))}
            </ul>
            <div className="relative w-full h-full">
                <Image
                    src="/images/World.png"
                    alt="World Map"
                    width={395}
                    height={260}
                    className="absolute right-5 bottom-5"
                />
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="absolute w-1 h-1 rounded-full bg-red-500" // Customize marker style
                        style={{
                            left: `calc(50% + ${country.x}px)`, // Adjust x position relative to the map
                            top: `calc(50% + ${country.y}px)`,  // Adjust y position relative to the map
                        }}
                    ></div>
                ))}
            </div>
            {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
        </div>
    );
}

Countries.defaultProps = {
    countries: defaultCountries
};
export default Countries;


