import { useState } from "react";
import emailjs from "emailjs-com";
import { FormDataContact } from "../Types/FormDataContact";

const serviceID = process.env.REACT_APP_YOUR_SERVICE_ID || "";
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID || "";
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY || "";

if (!serviceID || !templateID || !publicKey) {
	console.error("EmailJS environment variables are not set properly.");
}

const useContact = () => {
	const [formData, setFormData] = useState<FormDataContact>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [statusMessage, setStatusMessage] = useState<string | null>(null);
	const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
	const [showPopup, setShowPopup] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	// Handle form input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const result = await emailjs.send(
				serviceID,
				templateID,
				formData,
				publicKey
			);
			console.log("Email sent:", result.text);
			setStatusMessage("Your email was sent successfully!");
			setIsSuccess(true);
			setShowPopup(true);
			// Resetar o formulário
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error: any) {
			console.error("Email error:", error.text);
			setStatusMessage(
				"Sorry, something went wrong. Try again in a few seconds."
			);
			setIsSuccess(false);
			setShowPopup(true);
		} finally {
			setLoading(false);
		}
	};

	const closePopup = () => {
		setShowPopup(false);
		setStatusMessage(null);
		setIsSuccess(null);
	};

	return {
		formData,
		handleChange,
		handleSubmit,
		statusMessage,
		isSuccess,
		showPopup,
		closePopup,
		loading,
	};
};

export default useContact;
