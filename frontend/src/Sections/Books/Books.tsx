import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Book } from "../../Types/Book";
import { getBookService } from "../../Services/BookService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Books.css";
import useBooks from "../../Hooks/useBooks";
import BookCard from "../../components/BookCard/BookCard";

const Books = () => {
	const { books, errorServer, loading } = useBooks();

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-gray-600 text-lg animate-pulse">
					Loading Book recommendations...
				</p>
			</div>
		);
	}

	if (errorServer) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-red-500 text-lg">{errorServer}</p>
			</div>
		);
	}

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
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-12">
					Book Recommendations
				</h2>
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
			</div>
		</section>
	);
};

export default Books;
