import axios from "axios";
import { Skill } from "../Types/Skill";

export const getSkillService = async () => {
	try {
		const response = await axios.get<Skill[]>(
			'https://newportfolio-ypn3.onrender.com/api/Skill'
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
