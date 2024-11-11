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

  const groupSkillsByCategory = skills.reduce(
    (accumulator: { [key: string]: Skill[] }, skill) => {
      if (!accumulator[skill.category]) {
        accumulator[skill.category] = [];
      }
      accumulator[skill.category].push(skill);
      return accumulator;
    },
    {}
  );

  const colorMap: { [key: string]: string } = {
    ReactJS: "hover:bg-blue-500",
    Docker: "hover:bg-blue-600",
    PHP: "hover:bg-indigo-500",
    "ASP.NET Core": "hover:bg-purple-600",
    "React Native": "hover:bg-blue-400",
    Typescript: "hover:bg-blue-700",
    "SQL Server": "hover:bg-red-600",
    PostgreSQL: "hover:bg-blue-800",
    MongoDB: "hover:bg-green-600",
    AWS: "hover:bg-yellow-500",
    Azure: "hover:bg-blue-600",
    Angular: "hover:bg-red-500",
    Python: "hover:bg-yellow-600",
    Linux: "hover:bg-black",
    NodeJS: "hover:bg-green-700",
    Wordpress: "hover:bg-blue-900",
    "C#": "hover:bg-purple-700",
  };

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Skills
        </h1>
        {serverError ? (
          <p className="text-red-500 text-center">{serverError}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {Object.keys(groupSkillsByCategory).map((category) => (
              <div
                key={category}
                className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md"
                style={{ minWidth: "250px" }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {category}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {groupSkillsByCategory[category].map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                          colorMap[skill.name] || "hover:bg-gray-700"
                        }`}
                      >
                        <div className="text-2xl">
                          {iconMap[skill.name] && iconMap[skill.name]()}
                        </div>
                      </div>
                      <p className="mt-2 text-center text-gray-700 text-sm">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
