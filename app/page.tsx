import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
	return (
		<main>
      <Header />
			<Hero />
			<Expertise />
      <Testimony />
      <Contact />
      <Footer />
		</main>
	);
}