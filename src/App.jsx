import Hero from "./sections/Hero";
import Navbar from "./components/Navbar"
import About from "./sections/About";
import Services from "./sections/Services";
import Location from "./sections/Location";

export default function App() {

  return (
    <>
      <Location />    
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
      </main>
    </>
  );
}