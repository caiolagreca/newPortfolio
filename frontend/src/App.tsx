import Hero from "./Sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Sections/Skills/Skills";
import About from "./Sections/AboutMe/About";
import ProExp from "./Sections/ProExp/ProExp";
import FullResume from "./components/FullResume/FullResume";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<ProExp />
			<FullResume />
		</>
	);
}

export default App;
