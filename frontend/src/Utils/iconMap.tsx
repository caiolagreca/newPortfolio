import {
	FaDocker,
	FaPhp,
	FaReact,
	FaAws,
	FaAngular,
	FaPython,
	FaLinux,
	FaNodeJs,
	FaWordpress,
} from "react-icons/fa";
import {
	SiTypescript,
	SiMicrosoftazure,
	SiMongodb,
	SiPostgresql,
	SiCsharp,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export const iconMap: { [key: string]: () => JSX.Element } = {
	ReactJS: () => <FaReact />,
	Docker: () => <FaDocker />,
	PHP: () => <FaPhp />,
	"ASP.NET Core": () => <AiOutlineDotNet />,
	"React Native": () => <TbBrandReactNative />,
	Typescript: () => <SiTypescript />,
	"SQL Server": () => <DiMsqlServer />,
	PostgreSQL: () => <SiPostgresql />,
	MongoDB: () => <SiMongodb />,
	AWS: () => <FaAws />,
	Azure: () => <SiMicrosoftazure />,
	Angular: () => <FaAngular />,
	Python: () => <FaPython />,
	Linux: () => <FaLinux />,
	NodeJS: () => <FaNodeJs />,
	Wordpress: () => <FaWordpress />,
	"C#": () => <SiCsharp />,
};
