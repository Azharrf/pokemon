import Button from '../../atoms/Button';

interface LabelProps {
    title: string;
    label?: string;
    types?: any;
}
export default function Label(props: LabelProps) {
  const { title, label, types } = props

  if (label) {
    return (
      <div className="label">
        <p>{title}</p>
        {label && <p className="txt-label">{label}</p>}
      </div>
    )
  }

  return (
    <div className="label">
      <p>{title}</p>
      {types && types.map((t: { name: string }, i: number) => (
        <Button key={i} classBtn="btn btn-primary" title={t.name} />
      ))}
    </div>
  )
}
