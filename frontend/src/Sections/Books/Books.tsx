import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Book } from "../../Types/Book";
import { getBookService } from "../../Services/BookService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Books.css";

const Books = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [errorServer, setErrorServer] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [expandedDescriptions, setExpandedDescriptions] = useState<{
		[key: number]: boolean;
	}>({});

	useEffect(() => {
		const getBooks = async () => {
			const result = await getBookService();
			if (typeof result === "string") {
				setErrorServer(result);
			} else if (Array.isArray(result.data)) {
				setBooks(result.data);
			}
			setLoading(false);
		};
		getBooks();
	}, []);

	const toggleDescription = (index: number) => {
		setExpandedDescriptions((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

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
						<div key={index} className="px-2">
							<div
								className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 filter grayscale mb-2"
								style={{ backgroundImage: `url(${book.imageUrl})` }}
							>
								{/* Overlay */}
								<div className="absolute inset-0 bg-black opacity-90"></div>

								{/* Content */}
								<div className="relative p-6 h-full flex flex-col justify-end">
									<h3 className="text-xl font-semibold text-white mb-1">
										{book.title}
									</h3>
									<p className="text-white mb-2 text-base">By {book.author}</p>
									<p className="text-white text-sm">
										{expandedDescriptions[index]
											? book.description
											: `${book.description.substring(0, 100)}...`}
									</p>
									<button
										onClick={() => toggleDescription(index)}
										className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									>
										{expandedDescriptions[index] ? "Read Less" : "Read More"}
									</button>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Books;
