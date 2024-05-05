import { ProjectDataType } from "@/app/definitions/projectDataType";
import Image from "next/image";
import Link from 'next/link';

type ThumbnailProp = ProjectDataType

export default function Thumbnail({ title, description, logo }: ThumbnailProp) {
    return (
        <div className="flex flex-col shrink-0 grow-0 h-48 w-52 bg-[#F6F1E7] p-4 justify-between rounded-lg">
            <div id="projects" className="flex flex-col">
                <h4 className="text-xl pb-4 text-gray-800 decoration-4">{title}</h4>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
            <div className="flex justify-between">
                <Link className="text-md text-grey-800 underline underline-offset-4 decoration-1" href={`project/${title}`}>
                    Learn more
                </Link>
                <div className="relative h-8 w-8">
                    <Image
                        src={`/images/${logo}`}
                        alt={title}
                        layout='fill'
                        className='object-contain'
                        blurDataURL={`/public/images/blur-${logo}`}
                    />
                </div>
            </div>
        </div>
    )
}
