import Image from "next/image";
import Link from "next/link";
import MenuBar from "./menu-bar";
import { MenuProvider } from "./MenuContext/menuContext";
import { Header as t } from '@/utils/resourceContent';

export default function Header() {
    return (
        <header className="header-container">
            <div className="flex flex-col items-center bg-black w-full text-stone-50">
                <div className="flex justify-between  h-12 page-width py-2 text-stone-50">
                    <Link className="sr-only" href="#main-content">{t.a11ySkipToMain}</Link>
                    <h1>Maria Sierra-Loynaz Portfolio </h1>
                    <a className="flex items-center" href="tel:+18137685545">
                        <Image
                            src="/images/phone-call.svg"
                            alt="call me by phone"
                            width={25}
                            height={25} />
                        <p className="desktop-only">( +1 ) 813-768-5545</p>
                    </a>
                </div>
            </div>
            <MenuProvider>
            <div className="flex flex-col justify-center items-center w-full h-20 bg-stone-50/80  backdrop-filter backdrop-blur-md">
                <MenuBar />
            </div>
            </MenuProvider>
        </header>
    )
}