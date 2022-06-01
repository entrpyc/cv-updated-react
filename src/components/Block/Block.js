import "./Block.scss";

function Block({ title, subTitle, text, secondary}) {
  return (
    <div className="block">
      <h3>{title}</h3>
      <p className="sub">{subTitle}</p>
      <p className="text">{text}</p>
      <p className="secondary">{secondary}</p>
    </div>
  )
}

export default Block