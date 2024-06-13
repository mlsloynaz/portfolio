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
            <nav className="flex justify-between items-center h-20 px-8 md:px-28 py-4 bg-stone-50/80  backdrop-blur-md">
                <Link href="/">
                    <Image
                        src="/images/logo.webp"
                        alt={t.a11yGotoHome}
                        width={25}
                        height={30}
                        className="inline pr-2"
                    />
                    <p className="inline">{t.home}</p>
                </Link>
                <div className="hidden gap-4 md:gap-8 md:flex">
                    <MenuItems itemClass="inline hover:bg-gray-200 md:rounded-xl"/>
                </div>
                <div className="flex justify-self-end items-center">
                    <Link className="button-blue" href="/contactme">{t.contactMeBtn}</Link>
                    <div className="ml-4 flex h-8 w-8 items-center justify-center md:hidden">
                        <MenuIcon />
                    </div>
                </div>
            </nav>
            {
                menuOpen ?
                    <div className="fixed top-32 flex flex-col bg-slate-50 w-full bg-opacity-95 md:hidden" onClick={handleMenuMobileClick}>
                        <MenuItems itemClass="border-y border-gray-300 hover:bg-gray-200"/>
                    </div> : null
            }
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {announcement}
            </div>
        </>
    )
}