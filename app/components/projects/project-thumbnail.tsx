import Image from "next/image";
import Link from 'next/link';
import {Projects as t} from  '@/utils/resourceContent';

type ProjectThumbnailProps = {
    title:string;
    shortDescription:string;
    logo:string;
}

export default function ProjectThumbnail({ title, shortDescription, logo }: ProjectThumbnailProps) {
    return (
        <div className="flex flex-col shrink-0 grow-0 h-48 w-52 bg-[#F6F1E7] p-4 justify-between rounded-lg">
            <div id="projects" className="flex flex-col">
                <h4 className="text-xl pb-4 text-gray-800 decoration-4">{title}</h4>
                <p className="text-sm text-gray-400">{shortDescription}</p>
            </div>
            <div className="flex justify-between">
                <Link className="text-md text-grey-800 underline underline-offset-4 decoration-1" href={`project/${title}`}>
                    {t.learnMore}
                </Link>
                <div className="relative h-8 w-8">
                    <Image
                        src={`/images/company/${logo}`}
                        alt={title}
                        layout='fill'
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}
