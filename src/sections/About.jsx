import Section from "../components/Section";
import aboutImage from "../assets/images/hugging.jpg";
import haircutBroll from "../assets/images/haircut.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

export default function About() {
  const aboutTextRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { scrollYProgress: textProgress } = useScroll({
    target: aboutTextRef,
    offset: ["end end", "end 60vh"],
  });

  const textOpacity = useTransform(textProgress, [0, 0.7], [0, 1]);
  const textY = useTransform(textProgress, [0, 0.7], [100, 0]);
  const textBlur = useTransform(textProgress, [0, 0.7], ["8px", "0px"]);

  return (
    <Section id="about">

      <motion.div
        className="about-video"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <video
          src={haircutBroll}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={aboutImage} alt="About" />
        </motion.div>

        <div className="about-text">
          <motion.div
            ref={aboutTextRef}
            style={
              isMobile 
                ? {}
                : {
                  opacity: textOpacity,
                  y: textY,
                  filter: `blur(${textBlur})`,
            }}
          >
            <p>
              "After more than 30 years as a hair stylist, what I've come
              to value most are the relationships I've built with the people
              who've trusted me along the way."
            </p>

            <br />

            <p>
              Every client, every appointment, every conversation matters.
              The work is important, but the connection is what lasts.
            </p>
          </motion.div>
        </div>
      </div>

    </Section>
  );
}