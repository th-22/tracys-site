import Hero from "./sections/Hero";
import PlaceholderSection from "./sections/Placeholder";
import Navbar from "./components/Navbar"
import About from "./sections/About";

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PlaceholderSection id="services" label="SERVICES" bg="#9a8c98" />
      <PlaceholderSection id="gallery" label="GALLERY" bg="#4a4e69" />
      <PlaceholderSection id="contact" label="CONTACT" bg="#22223b" />
    </>
  );
}