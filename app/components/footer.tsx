import Link from 'next/link';
import Image from 'next/image';
import { Footer as t } from '@/utils/resourceContent';
import { IconCredits } from './icons-credits';
import { MenuItems } from './menu-items';

export function Footer() {
    return (
        <footer className="flex justify-center bg-black py-8 text-sm text-stone-50">
            <div className='page-width'>
                <Link className="sr-only" href="#main-content">
                    {t.a11ySkipToMain}
                </Link>
                <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2  divide-slate-100">
                    <section className="py-2 md:p-0">
                        <MenuItems itemClass="nav-link-mobile" listClass='pr-2' />
                    </section>
                    <section
                        aria-labelledby="accessibility-statement"
                        className="w-full flex-1 py-2 md:p-2"
                    >
                        <h3 id="accessibility-statement">{t.a11SectionTitle}</h3>
                        <p>
                            {t.a11ySectionDesc}{' '}
                            <a
                                className="link-underlined"
                                aria-label="for issues with accessibility email to"
                                href="mailto:mlsloynaz@gmail.com"
                            >
                                mlsloynaz@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                    <section className='py-2 md:p-2'
                        aria-labelledby="thanks"
                    >
                        <h3 id="thanks">{t.thankTo}</h3>
                        <Link
                            href="https://www.linkedin.com/in/anabellorenzo/"
                        >
                            <span className="link-underlined">
                                Anabel Lorenzo Batista
                            </span>
                        </Link>
                    </section>
                </div>
                <section aria-labelledby="icons-credit" className="py-2">
                    <IconCredits />
                </section>
            </div>
        </footer>
    );
}
