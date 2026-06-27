import Section from "../components/Section";

export default function PlaceholderSection({ id, label, bg }) {
  return (
    <Section id={id}>
      <div className="placeholder" style={{ background: bg }}>
        <h1>{label}</h1>
      </div>
    </Section>
  );
}