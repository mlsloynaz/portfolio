import Image from 'next/image';
import Link from 'next/link';
import MenuBar from './menu-bar';
import { MenuProvider } from './MenuContext/menuContext';
import { Header as t } from '@/utils/resourceContent';

export default function Header() {
    return (
        <header className="header-container">
            <div className="flex w-full flex-col items-center bg-black text-stone-50">
                <div className="page-width flex  h-12 justify-between py-2 text-stone-50">
                    <Link className="sr-only" href="#main-content">
                        {t.a11ySkipToMain}
                    </Link>
                    <h1>Maria Sierra-Loynaz Portfolio</h1>
                    <a className="flex items-center" href="tel:+18137685545">
                        <Image
                            src="/images/phone-call.svg"
                            alt="call me by phone"
                            width={25}
                            height={25}
                        />
                        <p className="desktop-only">( +1 ) 813-768-5545</p>
                    </a>
                </div>
            </div>
            <MenuProvider>
                <div className="flex-center h-20 w-full flex-col bg-stone-50/80 shadow-lg backdrop-blur-md backdrop-filter">
                    <MenuBar />
                </div>
            </MenuProvider>
        </header>
    );
}
