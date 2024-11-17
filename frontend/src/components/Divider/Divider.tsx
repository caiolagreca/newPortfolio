// src/components/SectionDivider.tsx

import React from "react";

interface SectionDividerProps {
	flip?: boolean;
	color?: string;
}

const Divider: React.FC<SectionDividerProps> = ({ flip, color }) => {
	return (
		<div className={`overflow-hidden ${flip ? "transform rotate-180" : ""}`}>
			<svg
				className="relative block w-full h-30"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1000 120"
			>
				<path
					d="M0,0V46.29c47.79,22,103.93,29.16,158.71,21.39C230.37,59.85,284.12,32,342.86,24.63c79.39-9.91,156.38,14.1,231.43,35.48,60.62,17.77,122.69,30.09,185.71,27.18,59.83-2.8,113.92-19.17,172.57-24.94C1012,54.45,1081.25,64.17,1140,89V0Z"
					fill={color || "#ffffff"}
				></path>
			</svg>
		</div>
	);
};

export default Divider;
