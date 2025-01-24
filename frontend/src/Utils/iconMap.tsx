import {
	FaDocker,
	FaPhp,
	FaReact,
	FaAws,
	FaAngular,
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
import { DiMsqlServer, DiMysql } from "react-icons/di";

export const iconMap: { [key: string]: () => JSX.Element } = {
	ReactJS: () => <FaReact />,
	Docker: () => <FaDocker />,
	PHP: () => <FaPhp />,
	"ASP.NET Core": () => <AiOutlineDotNet />,
	"React Native": () => <TbBrandReactNative />,
	Typescript: () => <SiTypescript />,
	"SQL Server": () => <DiMsqlServer />,
	PostgreSQL: () => <SiPostgresql />,
	MySQL: () => <DiMysql />,
	MongoDB: () => <SiMongodb />,
	AWS: () => <FaAws />,
	Azure: () => <SiMicrosoftazure />,
	Angular: () => <FaAngular />,
	Linux: () => <FaLinux />,
	NodeJS: () => <FaNodeJs />,
	WordPress: () => <FaWordpress />,
	"C#": () => <SiCsharp />,
};
