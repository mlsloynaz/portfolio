"use client"

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./menu-icon";

import { Header as t } from '@/utils/resourceContent';
import { useMenuContext } from "./MenuContext/menuContext";
import { useEffect, useState } from "react";
import { MenuItems } from "./menu-items";

export default function MenuBar() {
    const { menuOpen, setMenuOpen } = useMenuContext()
    const [announcement, setAnnouncement] = useState('');

    const handleMenuMobileClick = () => {
        setMenuOpen(false)
    }
    useEffect(() => {
        if (menuOpen) {
            setAnnouncement(t.a11yMenuOpened);
        } else {
            setAnnouncement(t.a11yMenuClosed);
        }
    }, [menuOpen]);

    return (
        <>
            <nav className="flex-between page-width py-4">
                <Link href="/" className="hover:font-medium transition-opacity">
                    <Image
                        src="/images/logo.webp"
                        alt={t.a11yGotoHome}
                        width={25}
                        height={30}
                        className="inline pr-2"
                    />
                    <p className="inline">{t.home}</p>
                </Link>
                <div className="desktop-only gap-4 md:gap-8 md:flex">
                    <MenuItems itemClass="nav-link" listItemClass="inline space-x-2"/>
                </div>
                <div className="flex justify-self-end items-center">
                    <Link className="button-blue" href="/contactme">{t.contactMeBtn}</Link>
                    <div className="mobile-only ml-4 flex-center h-8 w-8">
                        <MenuIcon />
                    </div>
                </div>
            </nav>
            {
                menuOpen ?
                    <div className="mobile-only fixed top-20 flex flex-col bg-slate-50 w-full shadow-lg" onClick={handleMenuMobileClick}>
                        <MenuItems itemClass="border-y border-gray-300 hover:bg-gray-200 w-full block"/>
                    </div> : null
            }
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {announcement}
            </div>
        </>
    )
}