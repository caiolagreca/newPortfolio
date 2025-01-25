import React from "react";
import { iconMap } from "../../Utils/iconMap";
import { SkillCardProps } from "../../Types/SkillCardProps";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const colorMap: { [key: string]: string } = {
    ".NET Core": "bg-purple-600",
    NodeJS: "bg-green-700",
    PHP: "bg-indigo-500",
    ReactJS: "bg-blue-500",
    "React Native": "bg-blue-400",
    Angular: "bg-red-500",
    "SQL Server": "bg-red-600",
    PostgreSQL: "bg-blue-800",
    MySQL: "bg-orange-500",
    MongoDB: "bg-green-600",
    Microservices: "bg-purple-500",
    AWS: "bg-yellow-500",
    Azure: "bg-blue-600",
    Kubernetes: "bg-indigo-600",
    Docker: "bg-blue-600",
    RabbitMQ: "bg-orange-600",
    Prometheus: "bg-orange-500",
    Redis: "bg-red-700",
    Linux: "bg-gray-700",
    WordPress: "bg-blue-900",
  };

  return (
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-md ${
          colorMap[skill.name] || "bg-gray-300"
        }`}
      >
        <div className="text-2xl text-white">
          {iconMap[skill.name] && iconMap[skill.name]()}
        </div>
      </div>
      <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-100">
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard;
