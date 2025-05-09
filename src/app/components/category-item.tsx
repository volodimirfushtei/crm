import React from 'react';
import style from './categoty-item.module.css';

export interface CategoryItemProps {
  title: string;
  num: number;
  index: number;
}

const categories = [

  { id: 1, title: 'Products', num: 4 },
  { id: 2, title: 'Products', num: 8 },
  { id: 3, title: 'Products', num: 26 },
  { id: 4, title: 'Products', num: 1 },
  { id: 5, title: 'Products', num: 37 },
  { id: 6, title: 'Products', num: 22 },
  { id: 7, title: 'Products', num: 4 },
  { id: 8, title: 'Products', num: 12 },
];

function CategoryItem({ title, num, index }: CategoryItemProps) {
  return (
    <div
      className="grid rounded-[4px] w-[144px] h-[106px] bg-[#111827] relative  ">
      <div className="  blockrounded-[20px] w-[16px] h-[2px] bg-[#fafafa] absolute top-3 left-3 "></div>
      <div className="font-normal text-[14px] leading-[1.42857] text-[#fafafa] pl-3 pt-[22px]">{title}</div>
      <div
        className={`font-semibold text-[60px] leading-[1] text-right pr-3 ${index % 2 === 0 ? style.alternateColor1 : style.alternateColor2}`}>{num}</div>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      {categories.map((category, index) => (
        <CategoryItem key={category.id} title={category.title} num={category.num} index={index} />
      ))}
    </div>
  );
}

export default CategoryList;


