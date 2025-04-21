import React from 'react';
import CategoryList from "@/app/components/category-item";

export interface CategoriesProps {
    children?: React.ReactNode;

}

function Categories({children}: CategoriesProps) {
    return (
        <div className="border border-[#f3f4f6] rounded-[4px] w-[652px] h-[312px] bg-[#f3f4f6]">
            <h3 className="font-medium text-[20px] leading-[1.4] pt-5 pl-5 mb-5">Categories of companies</h3>
            <div className="flex justify-center"><CategoryList/></div>
            {children}
        </div>

    );
}

export default Categories;