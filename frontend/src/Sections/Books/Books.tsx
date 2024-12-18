import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Book } from "../../Types/Book";
import { getBookService } from "../../Services/BookService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Books.css";
import useBooks from "../../Hooks/useBooks";
import BookCard from "../../components/BookCard/BookCard";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";

const Books = () => {
	const { books, errorServer, loading } = useBooks();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section id="books" className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-6 text-center">
				<h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-12">
					Book Recommendations
				</h1>
				{loading ? (
					<div className="flex flex-col items-center justify-center gap-4 min-h-[200px] w-full">
						<SkeletonLoader count={3} height={20} width={300} />
					</div>
				) : errorServer ? (
					<p className="text-red-500">{errorServer}</p>
				) : (
					<Slider {...settings}>
						{books.map((book, index) => (
							<BookCard
								title={book.title}
								author={book.author}
								imageUrl={book.imageUrl}
								description={book.description}
							/>
						))}
					</Slider>
				)}
			</div>
		</section>
	);
};

export default Books;
