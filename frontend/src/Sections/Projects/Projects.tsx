// src/Sections/Projects/Projects.tsx
import React, { useEffect, useState } from "react";
import { Project } from "../../Types/Project";
import { getProjectService } from "../../Services/ProjectService";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		const getProjects = async () => {
			const result = await getProjectService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				setProjects(result.data.reverse());
			}
		};
		getProjects();
	}, []);

	return (
		<section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-12">
					Some Things I’ve Built
				</h2>
				<div className="flex flex-col gap-12">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							description={project.description}
							imageUrl={project.imageUrl}
							liveDemoUrl={project.urlWebsite}
							sourceCodeUrl={project.urlRepository}
							reverse={index % 2 === 1} // Alternate layout
							skills={project.projectSkills}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
