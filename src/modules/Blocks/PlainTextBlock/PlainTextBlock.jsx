import css from "./PlainTextBlock.module.scss";

import Title from 'elements/Title/Title'
import Text from 'elements/Text/Text'
import Link from "elements/Link/Link";
import Icon from "elements/Icon/Icon";

function Block({ title, subTitle, text, span, link, download }) {
  const renderTitle = () => {
    if(span && link) return (
      <Link href={link} target="_blank">
        <Icon name="link" /> <Title tag="h3">{title} <span>- {span}</span></Title>
      </Link>
    )
    if(span) return <Title tag="h3">{title} <span>- {span}</span></Title>
    if(link) return <Link href={link} target="_blank"><Icon name="link" /> <Title tag="h3">{title}</Title></Link>
    if(!title) return null;
    return <Title tag="h3">{title}</Title>
  }
  return (
    <div className={css.block}>
      {renderTitle()}
      {subTitle ? (
        <Text className="sub">{subTitle}</Text>
      ): null}
      {text.length || download ? (
        <div className="block-text">
          {text.map((row, i) => (
            <Text key={i}>{row}</Text>
          ))}
          {download ?
            <div className="download">
              <Link href={download.link} target="_blank">{download.text}</Link>
            </div>
          : null}
        </div>
      ): null}
    </div>
  )
}

export default Block