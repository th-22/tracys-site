import { useState } from "react";
import { useLenis } from "lenis/react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar"
import About from "./sections/About";
import Services from "./sections/Services";
import Location from "./sections/Location";
import Contact from "./sections/Contact";


export default function App() {
  const lenis = useLenis();
  
  const [contactOpen, setContactOpen] = useState(false);
            console.log(contactOpen);

  return (
    <>
      <main>
        <Contact
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />
        <Navbar onContactClick={() => setContactOpen(true)} />
        <Hero />
        <About />
        <Services onContactClick={() => setContactOpen(true)} />
      </main>
      <Location />    
    </>
  );
}