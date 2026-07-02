import Hero from "./sections/Hero";
import PlaceholderSection from "./sections/Placeholder";
import Navbar from "./components/Navbar"
import About from "./sections/About";
import Services from "./sections/Services";
import Location from "./sections/Location";

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Location />
      <PlaceholderSection id="gallery" label="GALLERY" bg="#4a4e69" />
      <PlaceholderSection id="contact" label="CONTACT" bg="#22223b" />
    </>
  );
}