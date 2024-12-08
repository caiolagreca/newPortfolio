import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useArticles from "../../Hooks/useArticles";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Articles: React.FC = () => {
	const { articles, serverError, loading } = useArticles();

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
					{articles.map((article) => (
						<ArticleCard
							key={article.title}
							title={article.title}
							description={article.description}
							imageUrl={article.imageUrl}
							urlArticle={article.urlArticle}
						/>
					))}
				</Slider>
			</div>
			{/* Add spacing below the carousel */}
			<div className="mt-8"></div>
		</section>
	);
};

export default Articles;
