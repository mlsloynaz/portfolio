'use client';

import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from './menu-icon';

import { Header as t } from '@/utils/resourceContent';
import { useMenuContext } from './MenuContext/menuContext';
import { useEffect, useState } from 'react';
import { MenuItems } from './menu-items';

export default function MenuBar() {
    const { menuOpen, setMenuOpen } = useMenuContext();
    const [announcement, setAnnouncement] = useState('');

    const handleMenuMobileClick = () => {
        setMenuOpen(false);
    };
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
                <Link href="/" className="transition-opacity hover:font-medium">
                    <Image
                        src="/images/logo.webp"
                        alt={t.a11yGotoHome}
                        width={25}
                        height={30}
                        className="inline pr-2"
                    />
                    <p className="inline">{t.home}</p>
                </Link>
                <div className="desktop-only gap-4 md:flex md:gap-8">
                    <MenuItems
                        itemClass="nav-link"
                        listItemClass="inline space-x-2"
                    />
                </div>
                <div className="flex items-center justify-self-end">
                    <Link className="button-blue" href="/contactme">
                        {t.contactMeBtn}
                    </Link>
                    <div className="mobile-only flex-center ml-4 h-8 w-8">
                        <MenuIcon />
                    </div>
                </div>
            </nav>
            {menuOpen ? (
                <div
                    className="mobile-only fixed top-32 flex w-full flex-col bg-slate-50 shadow-lg"
                    onClick={handleMenuMobileClick}
                >
                    <MenuItems itemClass="border-y border-gray-300 hover:bg-gray-200 active:border-blue-700 w-full block px-6 sm:px-12" />
                </div>
            ) : null}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {announcement}
            </div>
        </>
    );
}
