import Link from "next/link";
import { ContactDetails as t } from '@/utils/resourceContent';

export default function ContactDetails() {
    return (
        <div id="contact-info-section" className="flex flex-col h-full w-full bg-portfolio bg-cover bg-center text-stone-100 rounded-lg p-4 my-16 ">
            <h2 className="text-2xl pb-8">{t.title}</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-between  pb-4 sm:pb-8">
                <dl>
                    <dt className="text-xl">{t.email}</dt>
                    <dd className="text-sm"><a href="mailto:your.email@example.com">mlsloynaz@gmail.com</a></dd>
                </dl>
                <dl>
                    <dt className="text-xl">{t.phone}</dt>
                    <dd className="text-sm"><a href="tel:+18137685545">( +1 ) 813-768-5545</a></dd>
                </dl>
                <dl>
                    <dt className="text-xl">{t.address}</dt>
                    <dd className="text-sm">
                        <p>{t.addressValue}</p>
                    </dd>
                </dl>
                <div className="pt-4 sm:pt-0">
                    <Link className="button-white" href="/contactme">{t.linkLbl}</Link>
                </div>
            </div>
        </div>
    )
}