import axios from "axios";
import { Project } from "../Types/Project";

export const getProjectService = async () => {
	try {
		const response = await axios.get<Project[]>(
			"https://newportfolio-ypn3.onrender.com/api/Project"
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
