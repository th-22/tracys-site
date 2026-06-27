import useScrollNav from "../hooks/useScrollNav";

export default function Navbar() {
  const { active, hidden } = useScrollNav();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && window.lenis) {
      window.lenis.scrollTo(el);
    }
  };

  return (
    <nav className="navbar">
      <a onClick={() => scrollTo("hero")}>Hero</a>
      <a onClick={() => scrollTo("about")}>About</a>
      <a onClick={() => scrollTo("services")}>Services</a>
      <a onClick={() => scrollTo("contact")}>Contact</a>
    </nav>
  );
}
