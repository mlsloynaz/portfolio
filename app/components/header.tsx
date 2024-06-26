import Image from "next/image";
import Link from "next/link";
import MenuBar from "./menu-bar";
import { MenuProvider } from "./MenuContext/menuContext";
import {Header as t} from  '@/utils/resourceContent';

export default function Header() {
    return (
        <header className="fixed z-20 left-0 top-0 flex flex-col w-full justify-center border-b border-gray-300">
            <div className="flex justify-between items-center bg-black h-12 px-8 md:px-28 py-4 text-stone-50">
                <Link  className="sr-only" href="#main-content">{t.a11ySkipToMain}</Link>
                <h1>Maria Sierra-Loynaz Portfolio </h1>
                <a className="flex items-center" href="tel:+18137685545">
                    <Image
                        src="/images/phone-call.svg"
                        alt="call me by phone"
                        width={25}
                        height={25} />
                    <p className="hidden md:block">( +1 ) 813-768-5545</p>
                </a>
            </div>
            <MenuProvider>
                <MenuBar />
            </MenuProvider>
        </header>
    )
}