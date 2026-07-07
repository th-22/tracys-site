import Hero from "./sections/Hero";
import Navbar from "./components/Navbar"
import About from "./sections/About";
import Services from "./sections/Services";
import Location from "./sections/Location";
import { useLenis } from "lenis/react";

export default function App() {
  const lenis = useLenis();
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        
      </main>
      <Location />    
    </>
  );
}