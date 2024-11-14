import { motion } from "framer-motion";
import { IconType } from "react-icons"; // Importa o tipo para os ícones

interface LinkButtonProps {
	href: string;
	text: string;
	icon: IconType; // Recebe o ícone como uma propriedade
	bgColor?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	href,
	text,
	icon: Icon,
	bgColor = "#4C51BF",
}) => {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full block"
			initial="rest"
			animate="rest"
			whileHover="hover"
		>
			<motion.div
				className="w-full flex justify-center items-center py-6 cursor-pointer relative overflow-hidden"
				style={{ backgroundColor: bgColor }}
				variants={{
					rest: { backgroundColor: bgColor },
					hover: { backgroundColor: "#5A67D8" },
				}}
				transition={{ duration: 0.3 }}
			>
				<motion.span
					className="text-white tracking-wider uppercase font-medium text-lg"
					variants={{
						rest: { y: 0, opacity: 1 },
						hover: { y: -20, opacity: 0 },
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					{text}
				</motion.span>
				<motion.div
					className="absolute"
					variants={{
						rest: { y: 20, opacity: 0 },
						hover: { y: 0, opacity: 1 },
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					<Icon className="text-white text-3xl" />
				</motion.div>
			</motion.div>
		</motion.a>
	);
};

export default LinkButton;
