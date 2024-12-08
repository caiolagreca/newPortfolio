import React from "react";
import { Article } from "../../Types/Article";

const ArticleCard: React.FC<Article> = ({
	title,
	description,
	imageUrl,
	urlArticle,
}) => {
	return (
		<div key={title} className="px-2">
			<div
				className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col mb-6 pb-3"
				style={{ height: "440px" }} // Set a fixed height
			>
				<img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
				<div className="p-4 flex flex-col flex-1">
					<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
						{title}
					</h3>
					<p className="text-sm text-gray-500 dark:text-gray-300 mb-4 overflow-hidden">
						{description}
					</p>
					<div className="mt-auto">
						<a
							href={urlArticle}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
