import Hero from "./Sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Sections/Skills/Skills";
import About from "./Sections/AboutMe/About";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About/>
			<Skills />
		</>
	);
}

export default App;
