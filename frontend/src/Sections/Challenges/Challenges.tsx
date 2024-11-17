import React, { useEffect, useState } from "react";
import { Challenge } from "../../Types/Challenge";
import { getChallengeService } from "../../Services/ChallengeService";

const Challenges = () => {
	const [challenges, setChallenges] = useState<Challenge[]>([]);
	const [errorServer, setErrorServer] = useState<string | null>(null);

	useEffect(() => {
		const getChallenges = async () => {
			const result = await getChallengeService();
			if (typeof result === "string") {
				setErrorServer(result);
			} else if (Array.isArray(result.data)) {
				setChallenges(result.data);
			}
		};
		getChallenges();
	}, []);

	return (
		<section id="challenges" className="py-16 bg-gray-200">
			<div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
				<h2 className="text-3xl font-semibold text-gray-800 mb-12">
					LeetCode Challenges
				</h2>
				{errorServer ? (
					<p className="text-red-500">{errorServer}</p>
				) : (
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{challenges.map((challenge, index) => (
							<div
								key={index}
								className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
							>
								{challenge.imageUrl && (
									<img
										src={challenge.imageUrl}
										alt={challenge.title}
										className="w-full h-48 object-cover"
									/>
								)}
								<div className="p-6">
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{challenge.title}
									</h3>
									<p className="text-gray-500 text-sm mb-4">
										{challenge.description.length > 100
											? `${challenge.description.substring(0, 97)}...`
											: challenge.description}
									</p>
									<a
										href={challenge.linkGithub}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
									>
										View Code on GitHub
									</a>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Challenges;
