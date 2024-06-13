import { SkillItem } from "./skillItem"

export function SkillList({ skills }: { skills: string[] }) {
    return (
        <div className="flex flex-wrap max-w-6xl mx-auto text-slate-900 rounded-lg">
            
                {skills.map((skill: string) => { return (<SkillItem  key={skill} skillName={skill} />) })}
            
        </div>
    )
}