type Props = { index: string; eyebrow: string; title: string; accent: string; subtitle?: string }

export default function SectionHeading({ index, eyebrow, title, accent, subtitle }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{index} / {eyebrow}</p>
      <h2>{title} <span className="gradient-text">{accent}</span></h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
