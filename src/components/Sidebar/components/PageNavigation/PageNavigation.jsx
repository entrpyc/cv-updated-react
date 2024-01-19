import { useContext, useState } from 'react';

import css from './PageNavigation.module.scss';

import { GlobalContext } from 'context/GlobalContext';
import Avatar from 'components/Avatar/Avatar'
import Icon from 'elements/Icon/Icon';
import Title from 'elements/Title/Title';
import Text from 'elements/Text/Text';
import Link from 'elements/Link/Link';
import Button from 'elements/Button/Button';
import { LocalStorage, keys } from 'adapters/localstorage/localstorage-adapter';

function PageNavigation() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { message, pageData } = useContext(GlobalContext);
  const { navigation } = pageData;
  const {
    info,
    social,
    websiteNavigation,
    pageNavigation,
  } = navigation || {};


  function onMenuClick() {
    setMenuOpened(!menuOpened);
  }

  function showMenuItem(item) {
    const application = LocalStorage.get(keys.application);

    if(item.id === "resume" && !application) return false;

    return true;
  }

  return (navigation &&
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
            <Button className={`navigation-switch ${!menuOpened ? "active" : ''}`} onClick={onMenuClick}>
              <span>
                <Icon name="arrow" direction="right" />
                Page Navigation
              </span>
            </Button>
            <Button className={`navigation-switch ${menuOpened ? "active" : ''}`} onClick={onMenuClick}>
              <span>
                <Icon name="arrow" direction="right" />
                Website Navigation
              </span>
            </Button>
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
            {websiteNavigation.map((item, index) => (showMenuItem(item) ? (
              <Link
                className="link"
                href={item.href}
                to={item.to}
                key={index}
              >
                <Icon name={item.icon || "anchor"} /> {item.name}
              </Link>
            ): null))}
          </div>
        ): null}
      </div>
    </div>
  )
}

export default PageNavigation