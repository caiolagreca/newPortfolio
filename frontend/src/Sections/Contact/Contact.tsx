import React from "react";
import useContact from "../../Hooks/useContact";

const Contact: React.FC = () => {
	const {
		formData,
		handleChange,
		handleSubmit,
		statusMessage,
		isSuccess,
		showPopup,
		closePopup,
		loading,
	} = useContact();

	return (
		<section
			id="contact"
			className="py-6 bg-gray-200 dark:bg-gray-800 relative"
		>
			<div className="max-w-4xl mx-auto px-6 md:px-8">
				<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
					Get in Touch
				</h2>
				<p className="text-center text-gray-600 dark:text-gray-100 mb-6">
					Have a project in mind or just want to say hi? Feel free to send me a
					message!
				</p>
				<form
					onSubmit={handleSubmit}
					className="space-y-4 max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Name Input */}
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-100"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Your Name"
							/>
						</div>
						{/* Email Input */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 dark:text-gray-100"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>
					{/* Subject Input */}
					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-gray-700 dark:text-gray-100"
						>
							Subject
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
							value={formData.subject}
							onChange={handleChange}
							className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Subject"
						/>
					</div>
					{/* Message Input */}
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-100"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							required
							rows={4}
							value={formData.message}
							onChange={handleChange}
							className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
							placeholder="Your Message"
						></textarea>
					</div>
					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>

			{/* Popup de Mensagem */}
			{showPopup && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
						<h3
							className={`text-lg font-semibold mb-4 ${
								isSuccess ? "text-green-600" : "text-red-600"
							}`}
						>
							{isSuccess ? "Success!" : "Error"}
						</h3>
						<p className="text-gray-700 mb-4">{statusMessage}</p>
						<button
							onClick={closePopup}
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors duration-300"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Contact;
