import Image from "next/image";
import profilePic from '/public/images/profile-pic.webp'
import { Bio as t } from '@/utils/resourceContent';

export default function Bio() {
    return (
        <section id="about-section" className="flex flex-col w-full items-center" aria-labelledby="title-about">
            <h2 id="title-about" className="sr-only">{t.titleSection}</h2>
            <div className="flex flex-col w-full items-center bg-portfolio bg-cover bg-center text-stone-100">
                <div className="flex  w-full items-center justify-between max-w-[1024px] px-6 pt-36 pb-8 sm:px-12 sm:pb-16 sm:pt-24">
                    <div>
                        <p className="text-5xl">{t.hi}</p>
                        <p className="text-5xl">{`${t.title}`}</p>
                        <p className="text-lg pt-8 lg:max-w-[70%]">{`${t.description}`}</p>
                    </div>
                    <div className="m-2 rounded-full overflow-hidden absolute top-32 right-0 w-36 md:w-64 md:relative md:top-0 md:right-0">
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            className='round-full'
                            placeholder="blur"
                            blurDataURL=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row h-full text-grey-700 max-w-[1024px] px-6 sm:px-12 pt-20 justify-between">
                <div className="flex flex-col h-full md:h-[200px] w-full md:w-[60%]">
                    <p className="text-5xl pb-8">{`${t.secondaryBio.title}`}</p>
                    <p className="text-lg">{`${t.secondaryBio.description}`}</p>
                </div>
                <div className="flex flex-col  text-gray-500">
                    <p className="flex text-9xl font-extrabold">10+</p>
                    <p className="text-3xl">years experience</p>
                </div>

            </div>
        </section>
    )
}
