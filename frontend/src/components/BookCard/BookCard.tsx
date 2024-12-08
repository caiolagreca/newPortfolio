import React, { useState } from "react";
import { Book } from "../../Types/Book";

const BookCard: React.FC<Book> = ({ title, author, imageUrl, description }) => {
	const [expandedDescription, setExpandedDescription] = useState(false);

	return (
		<div key={title} className="px-2">
			<div
				className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 filter grayscale mb-2"
				style={{ backgroundImage: `url(${imageUrl})` }}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-90"></div>

				{/* Content */}
				<div className="relative p-6 h-full flex flex-col justify-end">
					<h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
					<p className="text-white mb-2 text-base">By {author}</p>
					<p className="text-white text-sm">
						{expandedDescription
							? description
							: `${description.substring(0, 100)}...`}
					</p>
					<button
						onClick={() => setExpandedDescription(!expandedDescription)}
						className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						{expandedDescription ? "Read Less" : "Read More"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
