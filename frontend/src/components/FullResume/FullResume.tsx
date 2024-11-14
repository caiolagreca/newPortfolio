import { TiDownloadOutline } from "react-icons/ti";
import LinkButton from "../LinkButton/LinkButton";

const FullResume = () => (
	<LinkButton
		href="https://drive.google.com/file/d/1CKAP79VUBooXSx4qx5QFTibC9vmt95RI/view"
		text="View my full Resume"
		icon={TiDownloadOutline}
		bgColor="#4C51BF" // Cor personalizada, se desejar
	/>
);

export default FullResume;
