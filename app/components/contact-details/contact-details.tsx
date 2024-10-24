import Link from 'next/link';
import Image from 'next/image';
import { ContactDetails as t } from '@/utils/resourceContent';

export default function ContactDetails() {
    return (
        <section
            id="contact-info-section"
            aria-labelledby="title-contact-info"
            className="page-width mt-24 flex h-full scroll-mt-32 flex-col bg-[#191d3c] bg-portfolio bg-cover bg-bottom pb-6 pt-6 text-stone-100 lg:rounded-lg"
        >
            <h2 id="title-contact-info">{t.title}</h2>
            <div className="flex w-full flex-col justify-between gap-4 pb-4  sm:flex-row sm:pb-8">
                <dl>
                    <dt className="text-xl">{t.email}</dt>
                    <dd className="text-sm">
                        <a href="mailto:your.email@example.com">
                            mlsloynaz@gmail.com
                        </a>
                    </dd>
                </dl>
                <dl>
                    <dt className="text-xl">{t.phone}</dt>
                    <dd className="text-sm">
                        <a href="tel:+18137685545">( +1 ) 813-768-5545</a>
                    </dd>
                </dl>
                <dl tabIndex={0}>
                    <dt className="text-xl">{t.address}</dt>
                    <dd className="text-sm">
                        <p>{t.addressValue}</p>
                    </dd>
                </dl>
                <div className="flex h-fit pt-4 sm:pt-0">
                    <Link className="button-white" href="/contactme">
                        {t.linkLbl}
                    </Link>
                </div>
            </div>
            <dl>
                <dt className="pb-1 pt-4 text-xl">{t.social}</dt>
                <dd className="flex gap-4">
                    <Link href="https://github.com/mlsloynaz">
                        <Image
                            src="images/skills/github-white.svg"
                            alt={t.a11yGoToGitHub}
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/maria-lourdes-sierra-loynaz-b907b58b">
                        <Image
                            src="images/skills/linkedin-white.svg"
                            width={30}
                            height={30}
                            alt={t.a11yGoToLinkedin}
                        />
                    </Link>
                </dd>
            </dl>
        </section>
    );
}
