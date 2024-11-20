import React, { useEffect, useState } from "react";
import { Experience } from "../../Types/Experience";
import { getExperienceService } from "../../Services/ExperienceService";
import { motion, AnimatePresence } from "framer-motion";
import { parse, format } from "date-fns";
import { enUS } from "date-fns/locale";
import { iconMap } from "../../Utils/iconMap";

const ProExp = () => {
	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);

	useEffect(() => {
		const getExperiences = async () => {
			const result = await getExperienceService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				const sortedExperiences = result.data.sort((a, b) => {
					const dateA = parseDateString(a.startDate);
					const dateB = parseDateString(b.startDate);
					return (dateB?.getTime() || 0) - (dateA?.getTime() || 0);
				});
				setExperiences(sortedExperiences);
				setActiveIndex(0);
			}
		};
		getExperiences();
	}, []);

	const parseDateString = (dateString: string | undefined) => {
		if (!dateString) return null;
		const parsedDate = parse(dateString, "dd/MM/yyyy", new Date(), {
			locale: enUS,
		});
		return isNaN(parsedDate.getTime()) ? null : parsedDate;
	};

	const formatDate = (date: Date | null) => {
		if (!date) return "";
		return format(date, "MMM yyyy");
	};

	return (
		<section id="experience" className="h-screen overflow-hidden bg-gray-50">
			<div className="max-w-5xl mx-auto h-full flex flex-col py-10">
				<h1 className="text-3xl font-semibold text-center py-6 text-gray-800">
					Professional Experience
				</h1>
				{serverError ? (
					<p className="text-red-500 text-center">{serverError}</p>
				) : (
					<div className="flex flex-1 border rounded-lg overflow-hidden shadow-lg mb-5">
						{/* Sidebar */}
						<div className="md:w-1/4 bg-white border-r overflow-y-auto">
							<ul className="flex md:flex-col overflow-x-auto md:overflow-visible">
								{experiences.map((experience, index) => (
									<li key={experience.company}>
										<button
											className={`w-full whitespace-nowrap text-left px-4 py-3 text-sm font-medium transition-colors duration-300 ${
												index === activeIndex
													? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
													: "text-gray-600 hover:bg-gray-100 border-l-4 border-transparent"
											}`}
											onClick={() => setActiveIndex(index)}
										>
											{experience.company}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Content Panel */}
						<div className="md:w-3/4 overflow-y-auto p-6 bg-white">
							<AnimatePresence mode="wait">
								{experiences.length > 0 && experiences[activeIndex] && (
									<motion.div
										key={activeIndex}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.5 }}
									>
										<h2 className="text-xl font-semibold text-gray-800 mb-1">
											{experiences[activeIndex].position}{" "}
											{experiences[activeIndex].companyUrl ? (
												<a
													href={experiences[activeIndex].companyUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="text-indigo-600 hover:underline"
												>
													@ {experiences[activeIndex].company}
												</a>
											) : (
												<span className="text-indigo-600">
													@ {experiences[activeIndex].company}
												</span>
											)}
										</h2>
										<p className="text-sm text-gray-500 mb-2">
											{formatDate(
												parseDateString(experiences[activeIndex].startDate)
											)}{" "}
											–{" "}
											{experiences[activeIndex].isCurrent
												? "Present"
												: formatDate(
														parseDateString(experiences[activeIndex].endDate)
												  )}
										</p>
										<p className="text-sm text-gray-500 mb-4">
											{experiences[activeIndex].location}
										</p>
										<ul className="list-none space-y-3 pr-4 text-justify">
											{experiences[activeIndex].description
												.split(".")
												.filter((desc) => desc.trim() !== "")
												.map((desc, idx) => (
													<li key={idx} className="flex items-start">
														<svg
															className="flex-shrink-0 mr-3 h-4 w-4 text-indigo-500 mt-1"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 00-1.414 1.414l4.414 4.414a1 1 0 001.414 0l8.414-8.414a1 1 0 00-1.414-1.414z"
																clipRule="evenodd"
															/>
														</svg>
														<p className="text-sm text-gray-700 leading-relaxed">
															{desc.trim()}.
														</p>
													</li>
												))}
										</ul>

										{/* Skills Section */}
										{experiences[activeIndex].professionalExpSkills.length > 0 && (
											<div className="mt-6">
												<h3 className="text-lg font-semibold text-gray-800 mb-3">
													Skills Used:
												</h3>
												<div className="flex flex-wrap gap-4">
													{experiences[activeIndex].professionalExpSkills.map(
														(skillItem) => (
															<div
																key={skillItem.skillId}
																className="flex flex-col items-center"
															>
																<div
																	className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md bg-indigo-100`}
																>
																	<div className="text-2xl text-indigo-500">
																		{iconMap[skillItem.skill.name] &&
																			iconMap[skillItem.skill.name]()}
																	</div>
																</div>
																<p className="mt-2 text-sm font-medium text-gray-600">
																	{skillItem.skill.name}
																</p>
															</div>
														)
													)}
												</div>
											</div>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default ProExp;
