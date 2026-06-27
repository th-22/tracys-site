import Navbar from "./components/Navbar";
import PlaceholderSection from "./sections/PlaceholderSection";
import useLenis from "./hooks/useLenis";


export default function App() {
  useLenis();

  return (
    <>
      <Navbar />

      <PlaceholderSection id="hero" label="HERO" bg="#f2e9e4" />
      <PlaceholderSection id="about" label="ABOUT" bg="#c9ada7" />
      <PlaceholderSection id="services" label="SERVICES" bg="#9a8c98" />
      <PlaceholderSection id="gallery" label="GALLERY" bg="#4a4e69" />
      <PlaceholderSection id="contact" label="CONTACT" bg="#22223b" />
    </>
  );
}