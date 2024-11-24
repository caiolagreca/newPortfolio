import Hero from "./Sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./Sections/Skills/Skills";
import About from "./Sections/AboutMe/About";
import ProExp from "./Sections/ProExp/ProExp";
import FullResume from "./components/FullResume/FullResume";
import Projects from "./Sections/Projects/Projects";
import GithubLink from "./components/GithubLink/GithubLink";
import Articles from "./Sections/Articles/Articles";
import Challenges from "./Sections/Challenges/Challenges";
import Books from "./Sections/Books/Books";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import Divider from "./components/Divider/Divider";
import ThemeSwitch from "./components/DayNightSwitch/ThemeSwitch";

function App() {
	return (
		<>
			<Navbar />
			<ThemeSwitch />
			<Hero />
			<About />
			<Divider flip color="rgb(229 231 235)" />
			<Skills />
			<Divider color="rgb(229 231 235)" />
			<ProExp />
			<FullResume />
			<Projects />
			<GithubLink />
			<Articles />
			<Divider flip color="rgb(229 231 235)" />
			<Challenges />
			<Divider color="rgb(229 231 235)" />
			<Books />
			<Divider flip color="rgb(229 231 235)" />
			<Contact />
			<Divider color="rgb(229 231 235)" />
			<Footer />
		</>
	);
}

export default App;
