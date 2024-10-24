import Link from 'next/link';
import Image from 'next/image';
import { Footer as t } from '@/utils/resourceContent';
import { IconCredits } from './icons-credits';
import { MenuItems } from './menu-items';

export function Footer() {
    return (
        <footer className="w-full bg-black px-8 py-8 text-sm text-stone-50 md:px-28">
            <Link className="sr-only" href="#main-content">
                {t.a11ySkipToMain}
            </Link>
            <div className="flex flex-col md:flex-row ">
                <section className="border-b  pr-4 md:border-b-0 md:border-r ">
                    <MenuItems itemClass="nav-link-mobile" />
                </section>
                <section
                    aria-labelledby="accessibility-statement"
                    className="w-full flex-1 border-b p-4 md:border-b-0 md:border-r"
                >
                    <h3 id="accessibility-statement">{t.a11SectionTitle}</h3>
                    <p>
                        {t.a11ySectionDesc}{' '}
                        <a
                            className="underline underline-offset-2"
                            aria-label="for issues with accessibility email to"
                            href="mailto:mlsloynaz@gmail.com"
                        >
                            mlsloynaz@gmail.com
                        </a>
                        .
                    </p>
                </section>
                <section
                    className="border-b p-4 md:border-b-0"
                    aria-labelledby="thanks"
                >
                    <h3 id="thanks">{t.thankTo}</h3>
                    <Link
                        className="flex gap-2"
                        href="https://www.linkedin.com/in/anabellorenzo/"
                    >
                        <span className="underline underline-offset-2">
                            Anabel Lorenzo Batista
                        </span>
                    </Link>
                </section>
            </div>

            <IconCredits />
        </footer>
    );
}
