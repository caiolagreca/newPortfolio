import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import UseProjects from "../../Hooks/UseProjects";

const Projects: React.FC = () => {
	const { projects, serverError, loading } = UseProjects();

	if (loading) {
		return (
			<section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-12">
						Some Things I’ve Built
					</h2>
					<p className="text-gray-500 text-center">Loading...</p>
				</div>
			</section>
		);
	}

	if (serverError) {
		return (
			<section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-12">
						Some Things I’ve Built
					</h2>
					<p className="text-red-500 text-center">{serverError}</p>
				</div>
			</section>
		);
	}

	if (projects.length === 0) {
		return (
			<section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-12">
						Some Things I’ve Built
					</h2>
					<p className="text-gray-500 text-center">No projects found.</p>
				</div>
			</section>
		);
	}

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
							reverse={index % 2 === 1}
							skills={project.projectSkills}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
