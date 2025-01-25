import {
	FaDocker,
	FaPhp,
	FaReact,
	FaAws,
	FaAngular,
	FaLinux,
	FaNodeJs,
	FaWordpress,
	FaCubes,
} from "react-icons/fa";
import {
	SiMicrosoftazure,
	SiMongodb,
	SiPostgresql,
	SiKubernetes,
	SiRabbitmq
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMsqlServer, DiMysql, DiRedis } from "react-icons/di";

export const iconMap: { [key: string]: () => JSX.Element } = {
	".NET Core": () => <AiOutlineDotNet />,
	NodeJS: () => <FaNodeJs />,
	PHP: () => <FaPhp />,
	ReactJS: () => <FaReact />,
	"React Native": () => <TbBrandReactNative />,
	Angular: () => <FaAngular />,
	"SQL Server": () => <DiMsqlServer />,
	PostgreSQL: () => <SiPostgresql />,
	MySQL: () => <DiMysql />,
	MongoDB: () => <SiMongodb />,
	Microservices: () => <FaCubes />,
	AWS: () => <FaAws />,
	Azure: () => <SiMicrosoftazure />,
	Kubernetes: () => <SiKubernetes />,
	Docker: () => <FaDocker />,
	RabbitMQ: () => <SiRabbitmq />,
	Redis: () => <DiRedis />,
	Linux: () => <FaLinux />,
	WordPress: () => <FaWordpress />,
};
