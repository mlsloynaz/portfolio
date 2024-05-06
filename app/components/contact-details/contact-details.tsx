import Link from "next/link";

export default function ContactDetails() {
    return (
        <div id="contact-info-section" className="flex flex-col w-full h-full max-w-96 min-w-72 md:max-w-full lg:max-w-[1024px] py-8">
            <div className="flex flex-col h-full px-4 text-grey-700 ">
                <h2 className="text-2xl pb-8">Contact info</h2>
                <div className="flex bg-gradient-to-b from-blue-800 to-gray-700 text-stone-100 rounded-lg p-4 justify-around items-center">
                    <div>
                        <dl>
                            <dt className="text-xl">Email</dt>
                            <dd className="text-sm"><a href="mailto:your.email@example.com">mlsloynaz@gmail.com</a></dd>

                            <dt className="text-xl">Phone</dt>
                            <dd className="text-sm"><a href="tel:+18137685545">( +1 ) 813-768-5545</a></dd>

                            <dt className="text-xl">Address</dt>
                            <dd className="text-sm">
                                <p>Valrico, Florida</p>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <Link className="button-white" href="/contactme">Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}