import React from "react";
import { SkeletonLoaderProps } from "../../Types/SkeletonLoaderProps";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
	count = 1,
	width = "100%",
	height = 20,
}) => {
	return (
		<SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6">
			<Skeleton count={count} width={width} height={height} />
		</SkeletonTheme>
	);
};

export default SkeletonLoader;
