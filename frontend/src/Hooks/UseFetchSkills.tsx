import { useState, useEffect } from "react";
import { Skill } from "../Types/Skill";
import { getSkillService } from "../Services/SkillsService";

const useFetchSkills = () => {
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

	useEffect(() => {
		const fetchSkills = async () => {
			const result = await getSkillService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
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
		fetchSkills();
	}, []);

	return { skillsGrouped, serverError, categoryOrder };
};

export default useFetchSkills;
