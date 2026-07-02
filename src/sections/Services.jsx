import Section from "../components/Section";

export default function Services() {
  return (
    <Section id="pricing">
      <div className="pricing-container">

        <div className="pricing-header">
          <h2>Pricing</h2>
          <p>Simple, transparent rates based on time, detail, and hair length.</p>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Men’s Haircut</h3>
            <p className="price">$55+</p>
          </div>

          <div className="price-card">
            <h3>Women’s Haircut</h3>
            <p className="price">$85+</p>
          </div>

        </div>

        <div className="pricing-note">
          <p>
            Every service is tailored. Pricing may vary slightly depending on hair length,
            thickness, and the time needed to achieve your result.
          </p>

          <p>
            I focus on clean shape, movement, and something that grows out well —
            not just how it looks when you leave the chair.
          </p>
        </div>

      </div>

    </Section>
  );
}