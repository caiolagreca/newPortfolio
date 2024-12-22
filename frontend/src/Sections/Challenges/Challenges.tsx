import React from "react";
import useChallenges from "../../Hooks/useChallenges";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

const Challenges = () => {
	const { challenges, errorServer, loading } = useChallenges();

	return (
		<section id="challenges" className="py-16 bg-gray-200 dark:bg-gray-800">
			<div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
				<h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-12">
					LeetCode Challenges
				</h1>
				{loading ? (
					<div className="flex flex-col items-center justify-center gap-4 min-h-[200px] w-full">
						<SkeletonLoader count={3} height={20} width={300} />
					</div>
				) : errorServer ? (
					<p className="text-red-500">{errorServer}</p>
				) : (
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{challenges.map((challenge) => (
							<ChallengeCard
								key={challenge.title}
								imageUrl={challenge.imageUrl}
								title={challenge.title}
								description={challenge.description}
								linkGithub={challenge.linkGithub}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Challenges;
