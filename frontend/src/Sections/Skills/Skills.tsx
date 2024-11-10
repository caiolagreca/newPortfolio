import React, { useEffect, useState } from "react";
import { Skill } from "../../Types/Skill";
import { getSkillService } from "../../Services/SkillsService";

const Skills = () => {
	const [skills, setSkills] = useState<Skill[]>();
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		const getSkills = async () => {
			const result = await getSkillService();
			if (typeof result == "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				console.log(result.data);
				setSkills(result.data);
			}
		};
		getSkills();
	}, []);

	return (
		<div className="App">
			<h1>Skills</h1>
			{skills ? (
				skills.map((skill: any, index: number) => (
					<div key={index}>
						<h2>{skill.name}</h2>
						<p>{skill.category}</p>
					</div>
				))
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Skills;
