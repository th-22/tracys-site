import { useEffect, useState, useRef } from "react";

export default function useScrollNav() {
  const [active, setActive] = useState("hero");
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // works now
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    let lastScroll = 0;

    const handleScroll = (e) => {
      const y = e.scroll;

      setHidden(y > lastScroll && y > 80);
      if (y < 80) setHidden(false);

      lastScroll = y;
    };

    if (window.lenis) {
      window.lenis.on("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      if (window.lenis) {
        window.lenis.off("scroll", handleScroll);
      }
    };
  }, []);

  return { active, hidden };
}