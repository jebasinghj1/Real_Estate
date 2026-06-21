import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import Hero from "./sections/Hero";
import Ticker from "./sections/Ticker";
import About from "./sections/About";
import Plots from "./sections/Plots";
import Stats from "./sections/Stats";
import Amenities from "./sections/Amenities";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Plots />
        <Stats />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
