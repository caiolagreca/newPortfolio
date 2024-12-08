import { useEffect, useState } from "react";
import { getBookService } from "../Services/BookService";
import { Book } from "../Types/Book";

const useBooks = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [errorServer, setErrorServer] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getBooks = async () => {
			const result = await getBookService();
			if (typeof result === "string") {
				setErrorServer(result);
			} else if (Array.isArray(result.data)) {
				setBooks(result.data);
			}
			setLoading(false);
		};
		getBooks();
	}, []);
	return { books, errorServer, loading };
};

export default useBooks;
