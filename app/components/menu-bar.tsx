"use client"

import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./menu-icon";
import { useState } from "react";

export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('click on menu')
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className="flex justify-between items-center h-20 px-8 md:px-28 py-4 bg-stone-50">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="call me by phone"
                        width={30}
                        height={30}
                        className="inline pr-2"
                    />
                    <p className="inline">Web Developer</p>
                </Link>
                <div className="hidden gap-4 md:gap-8 md:flex">
                    <MenuItems />
                </div>
                <div className="flex justify-self-end items-center">
                    <Link className="button-blue" href="/contactme">Contact Me</Link>
                    <div className="ml-4 flex h-8 w-8 items-center justify-center md:hidden" onClick={toggleMenu}>
                        <MenuIcon />
                    </div>
                </div>
            </div>
            {
                isOpen ?
                    <div className="fixed top-32 flex flex-col bg-slate-50 w-full">
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
                <Link href="/">About</Link>
            </li>
            <li className="border-y border-gray-300 p-4 md:border-none md:inline">
                <Link href="/#experience-section">Experience</Link>
            </li>
            <li className="border-y border-gray-300 p-4 md:border-none md:inline">
                <Link href="/#contact-info-section">Contact info</Link>
            </li>
        </ul>
    )
}