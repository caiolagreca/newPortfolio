import { useEffect, useState } from "react";
import { getChallengeService } from "../Services/ChallengeService";
import { Challenge } from "../Types/Challenge";

const useChallenges = () => {
	const [challenges, setChallenges] = useState<Challenge[]>([]);
	const [errorServer, setErrorServer] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getChallenges = async () => {
			const result = await getChallengeService();
			if (typeof result === "string") {
				setErrorServer(result);
			} else if (Array.isArray(result.data)) {
				setChallenges(result.data);
			}
			setLoading(false);
		};
		getChallenges();
	}, []);

	return { challenges, errorServer, loading };
};

export default useChallenges;
