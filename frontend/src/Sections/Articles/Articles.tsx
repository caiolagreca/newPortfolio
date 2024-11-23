import React, { useEffect, useState } from "react";
import { getArticleService } from "../../Services/ArticleService";
import { Article } from "../../Types/Article";
import { motion, AnimatePresence } from "framer-motion";

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % articles.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + articles.length) % articles.length
    );
  };

  const getVisibleArticles = () => {
    const visibleArticles = [];
    for (let i = 0; i < 3; i++) {
      visibleArticles.push(articles[(currentIndex + i) % articles.length]);
    }
    return visibleArticles;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">Loading Articles...</p>
      </div>
    );
  }

  return (
    <section id="articles" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Articles I’ve Written
        </h2>
        {serverError ? (
          <p className="text-red-500">{serverError}</p>
        ) : (
          <div className="relative">
            {/* Articles Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center gap-8"
              >
                {getVisibleArticles().map((article) => (
                  <div
                    key={article.title}
                    className="w-[28%] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-base font-medium text-gray-800 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        {article.description?.length > 100
                          ? `${article.description.substring(0, 100)}...`
                          : article.description ?? "No description"}
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
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer duration-200 hover:scale-125 active:scale-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-blue-500"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer duration-200 hover:scale-125 active:scale-100 rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-blue-500"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
