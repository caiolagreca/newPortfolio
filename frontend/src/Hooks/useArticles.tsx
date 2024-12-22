import { useEffect, useRef, useState } from "react";
import { getArticleService } from "../Services/ArticleService";
import { Article } from "../Types/Article";

const useArticles = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [hasFetched, setHasFetched] = useState(false);

	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasFetched) {
					setHasFetched(true);
					setLoading(true);

					getArticleService()
						.then((result) => {
							if (typeof result === "string") {
								setServerError(result);
								setLoading(false);
							} else if (Array.isArray(result.data)) {
								setArticles(result.data);
								setLoading(false);
							}
						})
						.catch((err) => {
							setServerError(`Error fetching Skills: ${err}`);
							setLoading(false);
						});
				}
			});
		});

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [hasFetched]);

	return { articles, serverError, loading, containerRef };
};

export default useArticles;
