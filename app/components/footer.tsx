import Link from "next/link";
import Image from "next/image";
import { Footer as t } from '@/utils/resourceContent';
import { IconCredits } from "./icons-credits";
import { MenuItems } from "./menu-items";

export function Footer() {
    return (
        <footer className="w-full bg-black px-8 md:px-28 py-8 text-stone-50 text-sm">
            <Link className="sr-only" href="#main-content">{t.a11ySkipToMain}</Link>
            <div className="flex flex-col md:flex-row ">
                <section className="border-b  md:border-b-0 md:border-r px-4 max-w-1/3">
                    <MenuItems itemClass="text-lg hover:bg-gray-700 md:rounded-xl" />
                </section>
                <section aria-labelledby="accessibility-statement" className="w-full  border-b md:border-b-0 flex-1 p-4">
                    <h3 id="accessibility-statement" className="text-lg pb-2">{t.a11SectionTitle}</h3>
                    <p>{t.a11ySectionDesc} <a className="underline underline-offset-2" aria-label="for issues with accessibility email to" href="mailto:mlsloynaz@gmail.com">mlsloynaz@gmail.com</a>.</p>
                </section>
            </div>

            <section className="p-4 w-full  border-b md:border-b-0" aria-labelledby="thanks">
                <h3 id="thanks" className="text-lg pb-2">{t.thankTo}</h3>
                <Link className="flex gap-2" href="https://www.linkedin.com/in/anabellorenzo/">
                    <Image src="/images/skills/linkedin-white.svg" width={15} height={15} className="h-full" alt="linkedin link" />
                    <span className="underline underline-offset-2" >Anabel Lorenzo Batista</span>
                </Link>
            </section>
            <IconCredits />
        </footer>
    )
}