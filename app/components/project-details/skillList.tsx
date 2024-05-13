import { skillDataType } from "@/app/utils/definitions/projectDataType"
import { SkillItem } from "./skillItem"
import { ProjectDetail as t } from '@/utils/resourceContent';

export function SkillList({ skills }: { skills: string[] }) {
    return (
        <div className="flex flex-col  p-4 bg-[#F6F1E7] text-slate-900 rounded-lg">
            <p className="text-3xl pb-8">{t.skills}</p>
            <div className="columns-3 sm:columns-4">
                {skills.map((skill: string) => { return (<SkillItem key={skill} skillName={skill} />) })}
            </div>
        </div>
    )
}