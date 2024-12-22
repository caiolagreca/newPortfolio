import { useEffect, useRef, useState } from "react";
import { getExperienceService } from "../Services/ExperienceService";
import { Experience } from "../Types/Experience";

const useExperience = () => {
	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [hasFetched, setHasFetched] = useState(false);

	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasFetched) {
					setHasFetched(true);

					getExperienceService()
						.then((result) => {
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
						})
						.catch((err) => {
							setServerError(`Error fetching Skills: ${err}`);
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

	return { experiences, serverError, containerRef };
};

export default useExperience;
