import Image from "next/image";
import Link from 'next/link';
import { Projects as t } from '@/utils/resourceContent';

type ProjectThumbnailProps = {
    title: string;
    shortDescription: string;
    logo: string;
}

export default function ProjectThumbnail({ title, shortDescription, logo }: ProjectThumbnailProps) {
    return (
        <div className="flex flex-col shrink-0 grow-0 h-48 w-52 bg-[#F6F1E7] p-4 justify-between rounded-lg">
            <div id="projects" className="flex flex-col">
                <p className="text-xl pb-4 text-gray-800 decoration-4">{title}</p>
                <p className="text-sm text-[#4d5157]">{shortDescription}</p>
            </div>
            <div className="flex justify-between">
                <p> {t.learnMore}<Link className="text-md text-grey-800 underline underline-offset-4 decoration-1" href={`project/${title}`} />
                </p>
                <div className="relative h-8 w-8">
                    <Image
                        src={`/images/company/${logo}`}
                        alt={title}
                        fill
                        sizes="32px"
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}
