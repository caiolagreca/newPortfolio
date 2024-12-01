export type ButtonProps = {
	label: string;
	onClick: () => void;
	variant: "primary" | "secondary";
	icon: JSX.Element;
};
