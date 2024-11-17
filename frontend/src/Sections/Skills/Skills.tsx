import React, { useEffect, useState } from "react";
import { Skill } from "../../Types/Skill";
import { getSkillService } from "../../Services/SkillsService";
import { iconMap } from "../../Utils/iconMap";

const Skills = () => {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		const getSkills = async () => {
			const result = await getSkillService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				setSkills(result.data);
			}
		};
		getSkills();
	}, []);

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
		Database: ["SQL Server", "PostgreSQL", "MongoDB"],
	};

	const groupedSkills = skills.reduce(
		(acc: { [key: string]: Skill[] }, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{}
	);

	const colorMap: { [key: string]: string } = {
		ReactJS: "bg-blue-500",
		Docker: "bg-blue-600",
		PHP: "bg-indigo-500",
		"ASP.NET Core": "bg-purple-600",
		"React Native": "bg-blue-400",
		Typescript: "bg-blue-700",
		"SQL Server": "bg-red-600",
		PostgreSQL: "bg-blue-800",
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
		<section id="skills" className="bg-gray-200 h-screen">
			<div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col justify-center h-full">
				<h1 className="text-3xl font-semibold text-center py-6 text-gray-800">
					Skills
				</h1>
				<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6">
					{serverError ? (
						<p className="text-red-500">{serverError}</p>
					) : (
						categoryOrder
							.filter((category) => groupedSkills[category])
							.map((category) => (
								<div
									key={category}
									className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md h-full"
								>
									<h2 className="text-xl font-semibold text-gray-700 mb-4">
										{category}
									</h2>
									<div className="flex flex-wrap justify-center gap-3">
										{groupedSkills[category]
											.sort(
												(a, b) =>
													skillOrder[category].indexOf(a.name) -
													skillOrder[category].indexOf(b.name)
											)
											.map((skill) => (
												<div
													key={skill.name}
													className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105 mx-5"
												>
													<div
														className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-colors duration-300 ${
															colorMap[skill.name]
														}`}
													>
														<div className="text-2xl text-white">
															{iconMap[skill.name] && iconMap[skill.name]()}
														</div>
													</div>
													<p className="mt-2 text-sm font-medium text-gray-600">
														{skill.name}
													</p>
												</div>
											))}
									</div>
								</div>
							))
					)}
				</div>
			</div>
		</section>
	);
};

export default Skills;
