import Image from 'next/image';
import profilePic from '/public/images/profile-pic.webp';
import { Bio as t } from '@/utils/resourceContent';

export default function Bio() {
    return (
        <section
            id="about-section"
            className="flex w-full flex-col items-center"
            aria-labelledby="title-about"
        >
            <h2 id="title-about" className="sr-only">
                {t.titleSection}
            </h2>
            <div className="flex w-full flex-col items-center bg-portfolio bg-cover bg-center text-stone-100">
                <div className="page-width flex justify-between pb-8 pt-36 sm:pb-16 sm:pt-24">
                    <div className="w-11/12">
                        <p className="text-5xl">{t.hi}</p>
                        <p className="text-5xl">{`${t.title}`}</p>
                        <p className="pt-8 text-lg lg:max-w-[80%]">{`${t.description}`}</p>
                    </div>
                    <div className="absolute right-0 top-32 m-2 w-40 overflow-hidden  rounded-full md:relative md:right-0 md:top-0 md:w-80">
                        <Image
                            src={profilePic}
                            priority
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            className="round-full"
                            placeholder="blur"
                            blurDataURL=""
                        />
                    </div>
                </div>
            </div>
            <div className="text-grey-700 page-width flex h-full flex-col justify-between pt-20 md:flex-row">
                <div className="flex h-full w-full flex-col md:w-[60%]">
                    <p className="pb-8 text-5xl">{`${t.secondaryBio.title}`}</p>
                    <p className="text-lg">{`${t.secondaryBio.description}`}</p>
                </div>
                <div className="flex flex-col  text-gray-500">
                    <p className="flex text-9xl font-extrabold">10+</p>
                    <p className="text-3xl">{t.yearsExperience}</p>
                </div>
            </div>
        </section>
    );
}
