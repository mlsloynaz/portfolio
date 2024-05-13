"use client"

import React, { ReactElement, createContext, useContext, useState } from 'react';

interface MenuContextType {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context
const MenuContext = createContext<MenuContextType>({
    menuOpen: false,
    setMenuOpen:()=>{}
});

// Create a provider component
export const MenuProvider = ({ children }: { children: ReactElement }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

// A custom hook to use the context
export const useMenuContext = () => {
    return useContext(MenuContext);
};
