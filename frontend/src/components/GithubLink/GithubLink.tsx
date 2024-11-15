import { FaGithub } from "react-icons/fa";
import LinkButton from "../LinkButton/LinkButton";

const GithubLink = () => (
	<LinkButton
		href="https://github.com/caiolagreca"
		text="See more projects"
		icon={FaGithub}
		bgColor="#333" // Cor personalizada para o GitHub
	/>
);

export default GithubLink;
