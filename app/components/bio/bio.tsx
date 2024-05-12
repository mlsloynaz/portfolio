import Image from "next/image";
import profilePic from '/public/images/profile-pic.png'
import {Bio as t} from  '@/utils/resourceContent';

export default function Bio() {
    return (
        <div id="about-section" className="flex flex-col w-full items-center">
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
            <div className="flex flex-col h-full text-grey-700 max-w-[1024px] px-6 sm:px-12 pt-20">
                <p className="text-5xl pb-8">{`${t.secondaryBio.title}`}</p>
                <p className="text-lg">{`${t.secondaryBio.description}`}</p>
            </div>
        </div>
    )
}
