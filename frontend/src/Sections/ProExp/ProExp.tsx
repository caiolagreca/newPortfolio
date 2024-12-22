import UseExperience from "../../Hooks/UseExperience";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { useState } from "react";

const ProExp = () => {
	const { experiences, serverError, containerRef } = UseExperience();
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<section
			id="experience"
			ref={containerRef}
			className="min-h-screen bg-gray-50 dark:bg-gray-900"
		>
			<div className="max-w-5xl mx-auto flex flex-col py-10 px-4">
				<h1 className="text-2xl md:text-3xl font-semibold text-center py-6 text-gray-800 dark:text-gray-100">
					Professional Experience
				</h1>
				{serverError ? (
					<p className="text-red-500 text-center">{serverError}</p>
				) : experiences.length > 0 ? (
					<div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-lg">
						{/* Sidebar */}
						<div className="block md:hidden mb-4">
							<select
								className="w-full px-4 py-3 border rounded-lg text-sm font-medium dark:bg-gray-800 dark:text-gray-100"
								value={activeIndex}
								onChange={(e) => setActiveIndex(Number(e.target.value))}
							>
								{}
								{experiences.map((experience, index) => (
									<option key={experience.company} value={index}>
										{experience.company}
									</option>
								))}
							</select>
						</div>

						<div className="hidden md:block w-full md:w-1/4 bg-white dark:bg-gray-800 border-b md:border-b-0 md:border-r">
							<ul className="flex flex-col">
								{experiences.map((experience, index) => (
									<li key={experience.company}>
										<button
											className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-300 ${
												index === activeIndex
													? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
													: "text-gray-600 dark:text-gray-100 hover:bg-gray-100 border-l-4 border-transparent"
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
						<ExperienceCard experience={experiences[activeIndex]} />
					</div>
				) : (
					<p className="text-gray-500 text-center">Loading experiences...</p>
				)}
			</div>
		</section>
	);
};

export default ProExp;
