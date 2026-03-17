type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{text}</p>
    </div>
  );
}
