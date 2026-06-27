import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setActive(entry.target.id);
            }
        });
        },
        { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    let lastY = 0;

    const handleScroll = (e) => {
        const y = e.scroll;

        if (Math.abs(y - lastY) < 10) return;

        setHidden(y > lastY && y > 80);

        if (y < 80) setHidden(false);

        lastY = y;
    };

    const waitForLenis = () => {
        if (!window.lenis) {
        requestAnimationFrame(waitForLenis);
        return;
        }

        window.lenis.on("scroll", handleScroll);
    };

    waitForLenis();

    return () => {
        observer.disconnect();
        if (window.lenis) {
        window.lenis.off("scroll", handleScroll);
        }
    };
    }, []);
}