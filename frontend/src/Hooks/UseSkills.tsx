import { useEffect, useRef, useState } from "react";
import { getSkillService } from "../Services/SkillsService";
import { Skill } from "../Types/Skill";

function groupSkillsByCategorie(data: Skill[]) {
	return data.reduce((acc: { [key: string]: Skill[] }, skill: Skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {});
}

export const useSkills = () => {
	const [skillsGrouped, setSkillsGrouped] = useState<{
		[key: string]: Skill[];
	}>({});
	const [serverError, setServerError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [hasFetched, setHasFetched] = useState(false);

	const containerRef = useRef<HTMLElement>(null);

	const categoryOrder = ["Backend", "Frontend", "Database", "DevOps"];

	const skillOrder: { [key: string]: string[] } = {
		Backend: ["NodeJS", ".NET Core", "PHP", "Microservices", "RabbitMQ"],
		Frontend: [
			"ReactJS",
			"React Native",
			"Angular",
			"WordPress",
		],
		"DevOps": ["Docker", "Kubernetes", "AWS", "Azure", "Linux", "Prometheus"],
		Database: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasFetched) {
					setHasFetched(true);
					setLoading(true);

					getSkillService()
						.then((result) => {
							if (typeof result == "string") {
								setServerError(result);
								setLoading(false);
							} else if (Array.isArray(result.data)) {
								const grouped = groupSkillsByCategorie(result.data);
								setSkillsGrouped(grouped);
								setLoading(false);
							}
						})
						.catch((err) => {
							setServerError(`Error fetching Skills: ${err}`);
							setLoading(false);
						});
				}
			});
		});

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [hasFetched]);

	return {
		skillsGrouped,
		serverError,
		categoryOrder,
		skillOrder,
		loading,
		containerRef,
	};
};
