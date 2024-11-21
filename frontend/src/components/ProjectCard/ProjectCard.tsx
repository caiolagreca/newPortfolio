// src/components/ProjectCard/ProjectCard.tsx
import React from "react";
import { ProjectSkill } from "../../Types/ProjectSkill";
import { iconMap } from "../../Utils/iconMap"; // Ensure this map contains all skill icons

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveDemoUrl?: string;
  sourceCodeUrl: string;
  reverse?: boolean;
  skills: ProjectSkill[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveDemoUrl,
  sourceCodeUrl,
  reverse,
  skills,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Image Section */}
      <div className="md:w-1/2">
        <img src={imageUrl} alt={title} className="rounded-lg shadow-lg" />
      </div>
      {/* Content Section */}
      <div className="md:w-1/2 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Skills Used:
            </h4>
            <div className="flex flex-wrap gap-4">
              {skills.map((projectSkill) => (
                <div
                  key={projectSkill.skillId}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${
                      iconMap[projectSkill.skill.name]
                        ? "bg-indigo-100"
                        : "bg-gray-300"
                    }`}
                  >
                    <div className="text-2xl text-indigo-500">
                      {iconMap[projectSkill.skill.name] &&
                        iconMap[projectSkill.skill.name]()}
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {projectSkill.skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex space-x-4">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          )}
          {sourceCodeUrl && (
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
