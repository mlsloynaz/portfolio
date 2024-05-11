import Image from "next/image";
import profilePic from '/public/images/profile-pic.png'
import {Bio as t} from  '@/utils/resourceContent';

export default function Bio() {
    return (
        <div id="about-section" className="flex flex-col w-full ">
            <div className="flex flex-col p-4 rounded-lg bg-portfolio bg-cover bg-center text-stone-100">
                <div className="flex gap-2 items-center">
                    <div className="flex-1">
                        <p className="text-2xl py-8">{`${t.title} Maria Sierra Loynaz`}</p>
                    </div>
                    <div className="m-2 rounded-full overflow-hidden h-16 w-16 sm:h-24 sm:w-24 lg:h-36 lg:w-36">
                        <Image
                            src={profilePic}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                            className='round-full'
                            placeholder="blur"
                            blurDataURL=""
                        />
                    </div>
                </div>
                <p className="text-l lg:max-w-[70%]">{`${t.description}`}</p>
            </div>
            <div className="flex flex-col h-full text-grey-700 ">
                <p className="text-2xl py-8">{`${t.secondaryBio.title}`}</p>
                <p className="text-l">{`${t.secondaryBio.description}`}</p>
            </div>
        </div>
    )
}
