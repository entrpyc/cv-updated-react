import "./Block.scss";

function Block({ title, subTitle, text }) {
  return (
    <div className="block">
      <h3>{title}</h3>
      <p className="sub">{subTitle}</p>
      {text.map((row, i) => <p className="text" key={i} dangerouslySetInnerHTML={{ __html: row }}></p>)}
    </div>
  )
}

export default Block