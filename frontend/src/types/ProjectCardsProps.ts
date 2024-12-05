import { ProjectSkill } from "./ProjectSkill";

export interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	liveDemoUrl?: string;
	sourceCodeUrl: string;
	reverse?: boolean;
	skills: ProjectSkill[];
}