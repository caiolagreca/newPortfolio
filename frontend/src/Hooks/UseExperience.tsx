import { useEffect, useState } from "react";
import { getExperienceService } from "../Services/ExperienceService";
import { Experience } from "../Types/Experience";

const useExperience = () => {
	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);

	useEffect(() => {
		const getExperiences = async () => {
			const result = await getExperienceService();
			if (typeof result === "string") {
				setServerError(result);
			} else if (Array.isArray(result.data)) {
				const sortedExperiences = result.data.sort((a, b) => {
					const dateA = new Date(a.startDate);
					const dateB = new Date(b.startDate);
					return (dateB?.getTime() || 0) - (dateA?.getTime() || 0);
				});
				setExperiences(sortedExperiences);
			}
		};
		getExperiences();
	}, []);

	return { experiences, serverError };
};

export default useExperience;
