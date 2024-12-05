import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { iconMap } from "../../Utils/iconMap";
import { ExperienceProps } from "../../Types/ExperienceProps";
import { format, parse } from "date-fns";

const ExperienceCard: React.FC<ExperienceProps> = ({ experience }) => {
	const parseDateString = (dateString: string | undefined) => {
		if (!dateString) return null;
		const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
		return isNaN(parsedDate.getTime()) ? null : parsedDate;
	};

	const formatDate = (date: Date | null) => {
		if (!date) return "";
		return format(date, "MMM yyyy");
	};

	return (
		<div className="w-full md:w-3/4 p-4 md:p-6 bg-white dark:bg-gray-800">
			<AnimatePresence mode="wait">
				{experience && (
					<motion.div
						key={experience.company}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
							{experience.position}{" "}
							{experience.companyUrl ? (
								<a
									href={experience.companyUrl}
									target="_blank" 
									rel="noopener noreferrer"
									className="text-indigo-600 hover:underline"
								>
									@ {experience.company}
								</a>
							) : (
								<span className="text-indigo-600">@ {experience.company}</span>
							)}
						</h2>
						<p className="text-sm text-gray-500 dark:text-gray-200 mb-2">
							{formatDate(parseDateString(experience.startDate))} –{" "}
							{experience.isCurrent
								? "Present"
								: formatDate(parseDateString(experience.endDate))}
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-200 mb-4">
							{experience.location}
						</p>
						<ul className="list-none space-y-3 pr-2 md:pr-4 text-justify">
							{experience.description
								.split(".")
								.filter((desc) => desc.trim() !== "")
								.map((desc, idx) => (
									<li key={idx} className="flex items-start">
										<svg
											className="flex-shrink-0 mr-2 h-4 w-4 text-indigo-500 mt-1"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 00-1.414 1.414l4.414 4.414a1 1 0 001.414 0l8.414-8.414a1 1 0 00-1.414-1.414z"
												clipRule="evenodd"
											/>
										</svg>
										<p className="text-sm text-gray-700 dark:text-gray-100 leading-relaxed">
											{desc.trim()}.
										</p>
									</li>
								))}
						</ul>

						{/* Skills Section */}
						{experience.professionalExpSkills.length > 0 && (
							<div className="mt-6">
								<h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
									Skills Used:
								</h3>
								<div className="flex flex-wrap gap-4">
									{experience.professionalExpSkills.map((skillItem) => (
										<div
											key={skillItem.skillId}
											className="flex flex-col items-center"
										>
											<div
												className={`w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full shadow-md bg-indigo-100`}
											>
												<div className="text-xl md:text-2xl text-indigo-500">
													{iconMap[skillItem.skill.name] &&
														iconMap[skillItem.skill.name]()}
												</div>
											</div>
											<p className="mt-2 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-100">
												{skillItem.skill.name}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ExperienceCard;
