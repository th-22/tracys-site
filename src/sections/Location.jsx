import Section from "../components/Section";

export default function Location() {
  return (
    <Section id="location">
      <div className="location-container">
        <div className="location-left">
          <span className="eyebrow">Visit Us</span>
          <h2>Come Say Hello.</h2>

          <div className="location-block">
            <h3>Address</h3>
            <p>
              5216 University Way NE
              <br />
              Seattle, WA 98105
            </p>
          </div>

          <div className="location-block">
            <h3>Phone</h3>
            <a href="tel:2067291559">(206) 729-1559</a>
          </div>

          <div className="location-block">
            <h3>Hours</h3>
            <p>
              Tuesday – Saturday
              <br />
              10:00 AM – 5:00 PM
            </p>
          </div>
        </div>

        <div className="location-right">
          <iframe
            src="https://www.google.com/maps?q=5216+University+Way+NE,+Seattle,+WA+98105&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          />
        </div>
      </div>
    </Section>
  );
}