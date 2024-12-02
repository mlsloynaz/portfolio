import Image from 'next/image';
import Link from 'next/link';
import { Projects as t } from '@/utils/resourceContent';

type ProjectThumbnailProps = {
    title: string;
    shortDescription: string;
    logo: string;
};

export default function ProjectThumbnail({
    title,
    shortDescription,
    logo,
}: ProjectThumbnailProps) {
    return (
        <div className="flex h-48 w-52 shrink-0 grow-0 flex-col justify-between rounded-lg bg-[#F6F1E7] p-4">
            <div className="flex flex-col">
                <p className="pb-4 text-xl text-gray-800 decoration-4">{title}</p>
                <p className="text-sm text-[#4d5157]">{shortDescription}</p>
            </div>
            <div className="flex justify-between">
                <Link
                    className="text-md text-grey-800 underline decoration-1 underline-offset-4 hover:font-bold"
                    href={`project/${title}`}
                >
                    {t.learnMore}
                    <span className="sr-only">{`${t.about} ${title}`}</span>
                </Link>
                <div className="relative h-8 w-8">
                    <Image
                        src={`/images/company/${logo}`}
                        alt={title}
                        fill
                        sizes="32px"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
