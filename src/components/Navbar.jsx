import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function Navbar({ onContactClick }) {
  const [hidden, setHidden] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <a
        href="#"
        className="navbar-logo"
        onClick={(e) => {
          e.preventDefault();
          lenis?.scrollTo(0);
        }}
      >
        Tracy's Hair Salon
      </a>

      <button className="navbar-button" onClick={onContactClick}>
        Book an Appointment
      </button>
    </nav>
  );
}