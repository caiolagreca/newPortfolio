import { useEffect, useState } from "react";
import { getArticleService } from "../Services/ArticleService";
import { Article } from "../Types/Article";

const useArticles = () => {
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

	return { articles, serverError, loading };
};

export default useArticles;
