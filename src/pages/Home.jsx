import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Process from "../components/Process";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import WhyMe from "../components/WhyMe";
import Github from "../components/Github";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TechStack />
        <About />
        <Services />
        <Skills />
        <Process />
        <Experience />
        <Projects />
        <WhyMe />
        <Github />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
