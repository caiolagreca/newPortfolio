import { ProjectSkill } from "./ProjectSkill";

export type Project = {
	title: string;
	description: string;
	imageUrl: string;
	urlWebsite?: string;
	urlRepository: string;
	projectSkills: ProjectSkill[];
};
