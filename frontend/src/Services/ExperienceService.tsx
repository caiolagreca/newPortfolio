import axios from "axios";
import { Experience } from "../Types/Experience";

export const getExperienceService = async () => {
	try {
		const response = await axios.get<Experience[]>(
			"https://newportfolio-ypn3.onrender.com/api/proExp"
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
