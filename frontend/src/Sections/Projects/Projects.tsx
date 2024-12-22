import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import UseProjects from "../../Hooks/UseProjects";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

const Projects: React.FC = () => {
	const { projects, serverError, loading, containerRef } = UseProjects();

	return (
		<section
			ref={containerRef}
			className="py-16 bg-gray-50 dark:bg-gray-900"
			id="projects"
		>
			<div className="container mx-auto px-6">
				<h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-12">
					Some Things I’ve Built
				</h1>
				{loading ? (
					<div className="flex flex-col items-center justify-center gap-4 min-h-[200px] w-full">
						<SkeletonLoader count={3} height={20} width={300} />
					</div>
				) : serverError ? (
					<p className="text-red-500">{serverError}</p>
				) : (
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
				)}
			</div>
		</section>
	);
};

export default Projects;
