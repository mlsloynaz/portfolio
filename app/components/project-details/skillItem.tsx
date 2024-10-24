import { skillData } from '@/app/utils/skillData';
import Image from 'next/image';

export function SkillItem({ skillName }: { skillName: string }) {
    const { name, logoUrl } = skillData[skillName];

    return (
        <p
            tabIndex={0}
            className="flex w-32 flex-col items-center self-start px-4 py-2 md:w-56"
        >
            <span className="px-4">{name}</span>
            <span className=" relative h-8 w-8">
                <Image
                    src={`/images/skills/${logoUrl}`}
                    alt=""
                    width={30}
                    height={30}
                />
            </span>
        </p>
    );
}
