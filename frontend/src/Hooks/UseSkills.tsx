import { useEffect, useState } from "react";
import { getSkillService } from "../Services/SkillsService";
import { Skill } from "../Types/Skill";


export const useSkills = () => {
	const [skillsGrouped, setSkillsGrouped] = useState<{ [key: string]: Skill[] }>(
		{}
	);
	const [serverError, setServerError] = useState<string | null>(null);

	const categoryOrder = [
		"Programming Language",
		"Framework",
		"DevOps",
		"Database",
	];

	const skillOrder: { [key: string]: string[] } = {
		"Programming Language": ["Typescript", "C#", "PHP", "Python"],
		Framework: [
			"ReactJS",
			"ASP.NET Core",
			"NodeJS",
			"React Native",
			"Angular",
			"Wordpress",
		],
		DevOps: ["Docker", "AWS", "Azure", "Linux"],
		Database: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
	};

	useEffect(() => {
		const getSkills = async () => {
			const result = await getSkillService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				// Group skills by category
				const grouped = result.data.reduce(
					(acc: { [key: string]: Skill[] }, skill) => {
						if (!acc[skill.category]) {
							acc[skill.category] = [];
						}
						acc[skill.category].push(skill);
						return acc;
					},
					{}
				);
				setSkillsGrouped(grouped);
			}
		};
		getSkills();
	}, []);

	return { skillsGrouped, serverError, categoryOrder, skillOrder };
};
