import Hero from "./Sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Sections/Skills/Skills";
import About from "./Sections/AboutMe/About";
import ProExp from "./Sections/ProExp/ProExp";
import FullResume from "./components/FullResume/FullResume";
import Projects from "./Sections/Projects/Projects";
import GithubLink from "./components/GithubLink/GithubLink";
import Articles from "./Sections/Articles/Articles";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<ProExp />
			<FullResume />
			<Projects />
			<GithubLink />
			<Articles />
		</>
	);
}

export default App;
