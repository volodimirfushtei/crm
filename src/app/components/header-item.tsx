import React from 'react';


export interface HeaderItemProps {

}

function HeaderItem({}: HeaderItemProps) {
    return (
        <div>
            <nav className="container mx-auto px-6  flex items-center justify-between">
                <div className="flex items-center gap-12">

                    <div className="flex items-center gap-8 text-[20px]">
                        <a href="#features" className="text-primary font-medium text-[20px]">Home</a>
                        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                        <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[20px]">
                    <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Sign in</a>
                    <a href="#get-started"
                       className="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-primary/90 transition-colors text-[14px]">
                        Get Started
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default HeaderItem;