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
      <div className="navbar-links">
        <a onClick={() => scrollTo("contact")}>Contact</a>
      </div>
      
    </nav>
  );
}
