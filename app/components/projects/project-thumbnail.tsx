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
        <div className="project-card">
            <div className="flex flex-col">
                <p className="project-card-title">{title}</p>
                <p className="project-card-subtitle">{shortDescription}</p>
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
