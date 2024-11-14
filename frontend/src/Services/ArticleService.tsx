import axios from "axios";
import { Article } from "../Types/Article";

export const getArticleService = async () => {
	try {
		const response = await axios.get<Article[]>(
			"http://localhost:5058/api/Article"
		);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			return error.message;
		} else {
			console.log("unexpected error: ", error);
			return "Unexpected error ocurred";
		}
	}
};
