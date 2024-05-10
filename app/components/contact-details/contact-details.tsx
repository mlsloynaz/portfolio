import Link from "next/link";
import {ContactDetails as t} from  '@/utils/resourceContent';

export default function ContactDetails() {
    return (
        <div id="contact-info-section" className="flex flex-col w-full h-full pb-8">
            <div className="flex flex-col h-full px-4 text-grey-700 ">
                <h2 className="text-2xl pb-8">{t.title}</h2>
                <div className="flex bg-portfolio bg-cover bg-center text-stone-100 rounded-lg p-4 justify-around items-center">
                    <div>
                        <dl>
                            <dt className="text-xl">{t.email}</dt>
                            <dd className="text-sm"><a href="mailto:your.email@example.com">mlsloynaz@gmail.com</a></dd>

                            <dt className="text-xl">{t.phone}</dt>
                            <dd className="text-sm"><a href="tel:+18137685545">( +1 ) 813-768-5545</a></dd>

                            <dt className="text-xl">{t.address}</dt>
                            <dd className="text-sm">
                                <p>{t.addressValue}</p>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <Link className="button-white" href="/contactme">{t.linkLbl}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}