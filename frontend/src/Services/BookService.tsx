import axios from "axios";
import { Book } from "../Types/Book";

export const getBookService = async () => {
	try {
		const response = await axios.get<Book[]>("https://newportfolio-ypn3.onrender.com/api/Book");
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
