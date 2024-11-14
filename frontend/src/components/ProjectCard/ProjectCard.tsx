// src/components/ProjectCard.tsx
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	liveDemoUrl?: string;
	sourceCodeUrl?: string;
	reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	imageUrl,
	liveDemoUrl,
	sourceCodeUrl,
	reverse = false,
}) => {
	return (
		<div
			className={`flex flex-col md:flex-row items-center gap-6 ${
				reverse ? "md:flex-row-reverse" : ""
			}`}
		>
			<div className="md:w-1/2 w-full relative group overflow-hidden rounded-md shadow-lg">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-out" />
			</div>
			<div className="md:w-1/2 w-full p-6 bg-white rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
				<h3 className="text-xl font-semibold text-gray-800">{title}</h3>
				<p className="text-sm text-gray-600 mt-4">{description}</p>
				<div className="flex items-center gap-4 mt-6">
					{liveDemoUrl && (
						<a
							href={liveDemoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out"
						>
							<FiExternalLink className="w-5 h-5" />
						</a>
					)}
					{sourceCodeUrl && (
						<a
							href={sourceCodeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out"
						>
							<FiGithub className="w-5 h-5" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
