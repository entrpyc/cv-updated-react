import { useContext, useState } from 'react';

import css from './PageNavigation.module.scss';

import { GlobalContext } from 'context/GlobalContext';
import Avatar from 'components/Avatar/Avatar'
import Icon from 'elements/Icon/Icon';
import Title from 'elements/Title/Title';
import Text from 'elements/Text/Text';
import Link from 'elements/Link/Link';
import Button from 'elements/Button/Button';

function PageNavigation() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { message, pageData } = useContext(GlobalContext);
  const { sidebar } = pageData;
  const {
    info,
    social,
    websiteNavigation,
    pageNavigation,
  } = sidebar || {};


  function onMenuClick() {
    setMenuOpened(!menuOpened);
  }

  return (sidebar &&
    <div className={css.pageNavigation}>
      <Avatar picture={info.picture} name={info.name} message={message} />
      <div className="info">
        <Title tag="h1">{info.name}</Title>
        <Text>{info.position}</Text>
      </div>
      <div className="social">
        {social.github ? (
          <Link href={social.github} target="_blank" rel="noreferrer">
            <Icon name="logo-github" />
          </Link>
        ): null}
        {social.npm ? (
          <Link href={social.npm} target="_blank" rel="noreferrer">
            <Icon name="logo-npm" />
          </Link>
        ) : null}
        {social.linkedin ? (
          <Link href={social.linkedin} target="_blank" rel="noreferrer">
            <Icon name="logo-linkedin" />
          </Link>
        ): null}
      </div>
      <div className="navigation">
        {websiteNavigation ? (
          <div className="menu">
            <Button className={`navigation-switch ${!menuOpened ? "active" : ''}`} onClick={onMenuClick}>Page Navigation</Button>
            <Button className={`navigation-switch ${menuOpened ? "active" : ''}`} onClick={onMenuClick}>Website Navigation</Button>
          </div>
        ): null}
        <div className={`page-navigation ${!menuOpened ? "active" : ''}`}>
          {pageNavigation.map((item, index) => (
            <Link
              className="link"
              href={item.href}
              to={item.to}
              key={index}
            >
              <Icon name={item.icon || "anchor"} /> {item.name}
            </Link>
          ))}
        </div>
        {websiteNavigation ? (
          <div className={`website-navigation ${menuOpened ? "active" : ''}`}>
            {websiteNavigation.map((item, index) => (
              <Link
                className="link"
                href={item.href}
                to={item.to}
                key={index}
              >
                <Icon name={item.icon || "anchor"} /> {item.name}
              </Link>
            ))}
          </div>
        ): null}
      </div>
    </div>
  )
}

export default PageNavigation