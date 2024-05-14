import { SkillItem } from "./skillItem"

export function SkillList({ skills }: { skills: string[] }) {
    return (
        <div className="flex flex-col  p-4 text-slate-900 rounded-lg">
            <div className="columns-3 sm:columns-4">
                {skills.map((skill: string) => { return (<SkillItem key={skill} skillName={skill} />) })}
            </div>
        </div>
    )
}