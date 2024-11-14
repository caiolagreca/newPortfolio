import React, { useEffect, useState } from "react";
import { getArticleService } from "../../Services/ArticleService";
import { Article } from "../../Types/Article";
import { motion } from "framer-motion";

const Articles = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArticles = async () => {
			const result = await getArticleService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				setArticles(result.data);
			}
		};
		fetchArticles();
	}, []);

	return (
		<section id="articles" className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
				<h2 className="text-3xl font-semibold text-gray-800 mb-12">Articles I've Written</h2>
				{serverError ? (
					<p className="text-red-500">{serverError}</p>
				) : (
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{articles.map((article) => (
							<motion.div
								key={article.title}
								className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
								whileHover={{ y: -5 }}
							>
								<img
									src={article.imageUrl}
									alt={article.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-lg font-medium text-gray-800 mb-1">
										{article.title}
									</h3>
									<p className="text-gray-500 text-sm mb-3">
										{article.description}
									</p>
									<a
										href={article.urlArticle}
										target="_blank"
										rel="noopener noreferrer"
										className="text-indigo-500 text-sm font-medium hover:underline"
									>
										Read More
									</a>
								</div>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Articles;
