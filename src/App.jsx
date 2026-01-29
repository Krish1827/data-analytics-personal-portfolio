import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#020617] selection:bg-cyan-500 selection:text-black">
      <Hero />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}