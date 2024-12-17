import axios from "axios";
import { Challenge } from "../Types/Challenge";

export const getChallengeService = async () => {
	try {
		const response = await axios.get<Challenge[]>(
			"https://newportfolio-ypn3.onrender.com/api/Challenge"
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
