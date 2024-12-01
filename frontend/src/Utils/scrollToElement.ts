export const scrollToElement = (href: string) => {
	const elementId = href.startsWith("#") ? href.substring(1) : href;
	const targetElement = document.getElementById(elementId);
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: "smooth" });
	}
};
