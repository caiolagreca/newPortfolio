import React from "react";
import { useSkills } from "../../Hooks/UseSkills";
import SkillCard from "../../components/SkillCard/SkillCard";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

const Skills: React.FC = () => {
	const {
		skillsGrouped,
		serverError,
		categoryOrder,
		skillOrder,
		loading,
		containerRef,
	} = useSkills();

	return (
		<section
			id="skills"
			ref={containerRef}
			className="bg-gray-200 dark:bg-gray-800 py-16"
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
				<h1 className="text-3xl font-semibold text-center py-6 text-gray-800 dark:text-gray-100">
					Skills
				</h1>

				{loading ? (
					<div className="flex flex-col items-center justify-center gap-4 min-h-[200px] w-full">
						<SkeletonLoader count={3} height={20} width={300} />
					</div>
				) : serverError ? (
					<p className="text-red-500">{serverError}</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
						{categoryOrder
							.filter((category) => skillsGrouped[category])
							.map((category) => (
								<div
									key={category}
									className="flex flex-col items-center justify-start p-6 rounded-lg bg-white dark:bg-gray-900 shadow-md h-auto"
								>
									<h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
										{category}
									</h2>
									<div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
										{skillsGrouped[category]
											.sort(
												(a, b) =>
													skillOrder[category].indexOf(a.name) -
													skillOrder[category].indexOf(b.name)
											)
											.map((skill) => (
												<SkillCard key={skill.name} skill={skill} />
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
