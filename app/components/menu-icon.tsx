'use client';

import { useState } from 'react';
import { useMenuContext } from './MenuContext/menuContext';

const iconBarClass =
    ' my-[4px] h-[2px] w-full bg-gray-900 rounded transition ease-in-out duration-300';

const MenuIcon = () => {
    const { menuOpen, setMenuOpen } = useMenuContext();

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <button
            aria-label={`${menuOpen ? 'close' : 'open'} menu`}
            className="relative h-8 w-8"
            onClick={handleClick}
        >
            <div
                className={`${iconBarClass} ${
                    menuOpen ? 'translate-y-2 rotate-45 transform' : ''
                }`}
            ></div>
            <div
                className={`${iconBarClass} ${menuOpen ? 'opacity-0' : ''}`}
            ></div>
            <div
                className={`${iconBarClass} ${
                    menuOpen ? '-translate-y-1 -rotate-45 transform' : ''
                }`}
            ></div>
        </button>
    );
};

export default MenuIcon;
