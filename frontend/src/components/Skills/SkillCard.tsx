import React from "react";
import { Skill } from "../../Types/Skill";
import { iconMap } from "../../Utils/iconMap";

interface SkillCardProps {
	skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
	const colorMap: { [key: string]: string } = {
		ReactJS: "bg-blue-500",
		Docker: "bg-blue-600",
		PHP: "bg-indigo-500",
		"ASP.NET Core": "bg-purple-600",
		"React Native": "bg-blue-400",
		Typescript: "bg-blue-700",
		"SQL Server": "bg-red-600",
		PostgreSQL: "bg-blue-800",
		MySQL: "bg-orange-500",
		MongoDB: "bg-green-600",
		AWS: "bg-yellow-500",
		Azure: "bg-blue-600",
		Angular: "bg-red-500",
		Python: "bg-yellow-600",
		Linux: "bg-gray-700",
		NodeJS: "bg-green-700",
		Wordpress: "bg-blue-900",
		"C#": "bg-purple-700",
	};

	return (
		<div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
			<div
				className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md ${
					colorMap[skill.name] || "bg-gray-300"
				}`}
			>
				<div className="text-2xl text-white">
					{iconMap[skill.name] && iconMap[skill.name]()}
				</div>
			</div>
			<p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-100">
				{skill.name}
			</p>
		</div>
	);
};

export default SkillCard;
