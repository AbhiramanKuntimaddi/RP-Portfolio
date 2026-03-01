import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Initiatives from "./components/Initiatives";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<About />
			<Services />
			<Initiatives />
			<Testimony />
			<Contact />
			<Footer />
		</main>
	);
}
