import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Book } from "../../Types/Book";
import { getBookService } from "../../Services/BookService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Books.css';


const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [errorServer, setErrorServer] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBooks = async () => {
      const result = await getBookService();
      if (typeof result == "string") {
        setErrorServer(result);
      } else if (Array.isArray(result.data)) {
        setBooks(result.data);
      }
      setLoading(false);
    };
    getBooks();
  }, []);

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="books"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Book Recommendations
        </h2>
        <Slider {...settings}>
          {books.map((book, index) => (
            <div key={index} className="px-2">
              <div className="book-card mx-auto max-w-xs transform transition-transform hover:scale-105">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg">
                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    By {book.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    {book.description.length > 100
                      ? `${book.description.substring(0, 100)}...`
                      : book.description}
                  </p>
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
