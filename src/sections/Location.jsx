import Section from "../components/Section";

export default function Location() {
  return (
    <Section id="location">
      <div className="location-container">

        <div className="location-text">
          <h2>Location</h2>

          <p>
            5216 University Way NE<br />
            Seattle, WA 98105
          </p>

          <p className="location-note">
            Located in the heart of the U-District. Easy street access and nearby transit.
          </p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=5216+University+Way+NE,+Seattle,+WA+98105&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </Section>
  );
}