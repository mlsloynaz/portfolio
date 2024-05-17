
"use clent"

import Image from "next/image";
import MenuBar from "./menu-bar";
import { MenuProvider } from "./MenuContext/menuContext";

export default function Header() {
    return (
        <header className="fixed z-20 left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300">
            <div className="flex justify-between items-center bg-black h-12 px-8 md:px-28 py-4 text-stone-50">
                <h1>Maria Sierra-Loynaz Portfolio </h1>
                <a className="flex items-center" href="tel:+18137685545">
                    <Image
                        src="/images/phone-call.svg"
                        alt="call me by phone"
                        width={30}
                        height={30} />
                    <p className="hidden md:block">( +1 ) 813-768-5545</p>
                </a>
            </div>
            <MenuProvider>
                <MenuBar />
            </MenuProvider>
        </header>
    )
}