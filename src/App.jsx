import About from "./Components/About";
import Achievements from "./Components/Achievement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Specializations from "./Components/Specilization";


export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Specializations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
