import Section from "../components/Section";
import aboutImage from '../assets/images/hugging.jpg';
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id='about'>
        <motion.div
          className="about-image"
          initial={{ y: -150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={aboutImage} alt="About" />
        </motion.div>
        <div className='about-text'>
          <div>
            <p>"I have been a hair stylist for over 20 years, but my focus has always been simple:
            relationships over everything. </p>
            <br />
            <p>Every client, every appointment, every conversation
            matters. The work is important, but the connection is what lasts."</p>
          </div>
        </div>
    </Section>
  );
}