import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
	const [skills, setSkills] = useState<any[]>([]);

	const getSkills = async () => {
		try {
			const response = await axios.get(`http://localhost:5058/api/Skill`);
			return setSkills(response.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log("error message: ", error.message);
				return error.message;
			} else {
				console.log("unexpected error: ", error);
				return "Unexpected error ocurred";
			}
		}
	};

	useEffect(() => {
		getSkills();
	}, []);

	return (
		<div className="App">
			<h1>Skills</h1>
			{skills.length > 0 ? (
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
