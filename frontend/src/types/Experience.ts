import { ProExpSkill } from "./ProExpSkill";

export type Experience = {
	position: string;
	company: string;
	companyUrl?: string;
	location: string;
	startDate: string;
	endDate?: string;
	isCurrent?: boolean;
	description: string;
	professionalExpSkills: ProExpSkill[];
};
