import React from "react";
import { Skill } from "../../Types/Skill";
import SkillCard from "./SkillCard";
import { SkillCategoryProps } from "../../Types/SkillCategoryProps";


const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
	return (
		<div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
				{category}
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{skills.map((skill) => (
					<SkillCard key={skill.name} skill={skill} />
				))}
			</div>
		</div>
	);
};

export default SkillCategory;
