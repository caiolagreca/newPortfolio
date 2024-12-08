import React from "react";
import { Challenge } from "../../Types/Challenge";

const ChallengeCard: React.FC<Challenge> = ({
	title,
	description,
	imageUrl,
	linkGithub,
}) => {
	return (
		<div
			key={title}
			className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
		>
			{imageUrl && (
				<img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
			)}
			<div className="p-6">
				<h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
					{title}
				</h3>
				<p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
					{description.length > 100
						? `${description.substring(0, 97)}...`
						: description}
				</p>
				<a
					href={linkGithub}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
				>
					View Code on GitHub
				</a>
			</div>
		</div>
	);
};

export default ChallengeCard;
