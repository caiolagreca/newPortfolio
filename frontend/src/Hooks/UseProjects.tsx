import { useEffect, useRef, useState } from "react";
import { Project } from "../Types/Project";
import { getProjectService } from "../Services/ProjectService";

const UseProjects = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [hasFetched, setHasFetched] = useState(false);

	const containerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasFetched) {
					setHasFetched(true);
					setLoading(true);

					getProjectService()
						.then((result) => {
							if (typeof result === "string") {
								setServerError(result);
								setLoading(false);
							} else if (Array.isArray(result.data)) {
								setProjects(result.data.reverse());
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

	return { projects, serverError, loading, containerRef };
};

export default UseProjects;
