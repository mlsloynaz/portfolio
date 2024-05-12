"use client"

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./menu-icon";

import {Header as t} from  '@/utils/resourceContent';
import { useMenuContext } from "./projects/MenuContext/menuContext";

export default function MenuBar() {
   const {menuOpen, setMenuOpen} = useMenuContext()
    
   const handleMenuMobileClick=()=>{
        setMenuOpen(false)
    }

    return (
        <>
            <div className="flex justify-between items-center h-20 px-8 md:px-28 py-4 bg-stone-50 bg-opacity-95">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="call me by phone"
                        width={30}
                        height={30}
                        className="inline pr-2"
                    />
                    <p className="inline">{t.home}</p>
                </Link>
                <div className="hidden gap-4 md:gap-8 md:flex">
                    <MenuItems />
                </div>
                <div className="flex justify-self-end items-center">
                    <Link className="button-blue" href="/contactme">{t.contactMeBtn}</Link>
                    <div className="ml-4 flex h-8 w-8 items-center justify-center md:hidden">
                        <MenuIcon />
                    </div>
                </div>
            </div>
            {

                menuOpen ?
                    <div className="fixed top-32 flex flex-col bg-slate-50 w-full bg-opacity-95" onClick={handleMenuMobileClick}>
                        <MenuItems />
                    </div> : null
            }
        </>
    )
}

function MenuItems() {
    return (
        <ul>
            <li className="border-y border-gray-300 p-4 md:border-none md:inline">
                <Link href="/">{t.about}</Link>
            </li>
            <li className="border-y border-gray-300 p-4 md:border-none md:inline">
                <Link href="/#experience-section">{t.experience}</Link>
            </li>
            <li className="border-y border-gray-300 p-4 md:border-none md:inline">
                <Link href="/#contact-info-section">{t.contactInfo}</Link>
            </li>
        </ul>
    )
}