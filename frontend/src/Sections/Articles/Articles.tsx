import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getArticleService } from "../../Services/ArticleService";
import { Article } from "../../Types/Article";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Articles: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getArticles = async () => {
			const result = await getArticleService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				setArticles(result.data);
			}
			setLoading(false);
		};
		getArticles();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-gray-600 text-lg animate-pulse">
					Loading Articles...
				</p>
			</div>
		);
	}

	if (serverError) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-red-500 text-lg">{serverError}</p>
			</div>
		);
	}

	const settings = {
		dots: true,
		infinite: articles.length > 3,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					infinite: articles.length > 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: articles.length > 1,
				},
			},
		],
	};

	return (
		<section id="articles" className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-12">
					Articles I’ve Written
				</h2>
				<Slider {...settings}>
					{articles.map((article, index) => (
						<div key={index} className="px-2">
							<div
								className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col mb-6 pb-3"
							style={{ height: "440px" }} // Set a fixed height
							>
								<img
									src={article.imageUrl}
									alt={article.title}
									className="w-full h-40 object-cover"
								/>
								<div className="p-4 flex flex-col flex-1">
									<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
										{article.title}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-300 mb-4 overflow-hidden">
										{article.description}
									</p>
									<div className="mt-auto">
										<a
											href={article.urlArticle}
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
					))}
				</Slider>
			</div>
			{/* Add spacing below the carousel */}
			<div className="mt-8"></div>
		</section>
	);
};

export default Articles;
