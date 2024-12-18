import React from "react";
import { SkeletonLoaderProps } from "../../Types/SkeletonLoaderProps";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
	count = 1,
	width = "100%",
	height = 20,
}) => {
	// Detecta se o modo dark está ativo (supondo que você adiciona a classe 'dark' no html)
	const isDarkMode =
		typeof document !== "undefined" &&
		document.documentElement.classList.contains("dark");

	const baseColor = isDarkMode ? "#374151" : "#d1d5db";
	const highlightColor = isDarkMode ? "#4b5563" : "#e2e5e9";

	return (
		<SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
			<Skeleton count={count} width={width} height={height} />
		</SkeletonTheme>
	);
};

export default SkeletonLoader;
