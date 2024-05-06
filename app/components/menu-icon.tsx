"use client"

import { useState } from 'react';


const iconBarClass = " my-[4px] h-[2px] w-full bg-gray-900 rounded transition ease-in-out duration-300"

const MenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log('click on button')
        setIsOpen(!isOpen);
    };

    return (
            <button
                aria-label={`${isOpen?"close":"open"} menu`}
                className="relative h-8 w-8"
                onClick={handleClick}
            >
                <div
                    className={`${iconBarClass} ${isOpen ? 'transform rotate-45 translate-y-2' : ''
                        }`}
                ></div>
                <div
                    className={`${iconBarClass} ${isOpen ? 'opacity-0' : ''
                        }`}
                ></div>
                <div
                    className={`${iconBarClass} ${isOpen ? 'transform -rotate-45 -translate-y-1' : ''
                        }`}
                ></div>
            </button>
   
    );
};

export default MenuIcon;
