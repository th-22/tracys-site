import Section from "../components/Section";
import aboutImage from '../assets/images/hugging.jpg';

export default function About() {
  return (
    <Section id='about'>
      <div className='about-text'>
        <p>I have been a hair stylist for over 20 years, but my focus has always been simple:
        relationships over everything. Every client, every appointment, every conversation
        matters. The work is important, but the connection is what lasts.</p>
      </div>
      <div className='about-image'>
        <img src={aboutImage} alt="about-image" />
      </div>
    </Section>
  );
}