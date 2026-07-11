import Section from "../components/Section";
import haircutImage from '../assets/images/blow_dry.jpg';

export default function Services({ onContactClick }) {
  return (
    <Section id="pricing">
      <div className="pricing-container">
        <div className="pricing-info">
          <div className="price-card">
            <h3>Men’s Haircut - $55+</h3>
            <h3>Women’s Haircut - $85+</h3>
          </div>
          <div className="pricing-note">
            <p>
              Every service is tailored. Pricing may vary slightly depending on hair length,
              thickness, and the time needed to achieve your result. I focus on clean shape, movement,
              and something that grows out well.
            </p>
            <p>
              Please reach out with any questions about pricing or services. I look forward to working with you!
            </p>
            <button className="button mobile-book">Book an Appointment</button>
          </div>

        </div>
        <div className="pricing-image">
          <img src={haircutImage} alt="haircut" />
          <button className="button desktop-book" onClick={onContactClick}>
            Book an Appointment
          </button>
        </div>
      </div>
    </Section>
  );
}