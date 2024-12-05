import { useEffect, useState } from "react";
import { Project } from "../Types/Project";
import { getProjectService } from "../Services/ProjectService";

const UseProjects = (): {
	projects: Project[];
	serverError: string | null;
	loading: boolean;
} => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [serverError, setServerError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProjects = async () => {
			try {
				const result = await getProjectService();
				if (typeof result === "string") {
					setServerError(result);
				} else if (Array.isArray(result.data)) {
					setProjects(result.data.reverse());
				}
			} catch (err) {
				setServerError("Failed to fetch projects.");
			} finally {
        setLoading(false);
			}
		};
		getProjects();
	}, []);

	return { projects, serverError, loading };
};

export default UseProjects;
