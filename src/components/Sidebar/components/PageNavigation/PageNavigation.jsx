import { useState } from 'react';

import css from './PageNavigation.module.scss';

import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import Button from 'elements/Button/Button';
import { LocalStorage, keys } from 'adapters/localstorage/localstorage-adapter';

function PageNavigation({ websiteNavigation, pageNavigation }) {
  const [menuOpened, setMenuOpened] = useState(false);

  function onMenuClick() {
    setMenuOpened(!menuOpened);
  }

  function showMenuItem(item) {
    const application = LocalStorage.get(keys.application);

    if(item.id === "resume" && !application) return false;

    return true;
  }

  return (
    <div className={css.navigation}>
      {websiteNavigation && pageNavigation ? (
        <div className="menu">
          <Button className={`navigation-switch default ${!menuOpened ? "active" : ''}`} onClick={onMenuClick}>
            <span>
              <Icon name="arrow" direction="right" />
              Page Navigation
            </span>
          </Button>
          <Button className={`navigation-switch default ${menuOpened ? "active" : ''}`} onClick={onMenuClick}>
            <span>
              <Icon name="arrow" direction="right" />
              Website Navigation
            </span>
          </Button>
        </div>
      ): null}
      {pageNavigation ? (
        <div className={`page-navigation ${!menuOpened ? "active" : ''}`}>
          {pageNavigation.map((item, index) => (
            <Link
              className="link default"
              href={item.href}
              to={item.to}
              key={index}
            >
              <Icon name={item.icon || "anchor"} /> {item.name}
            </Link>
          ))}
        </div>
      ): null}
      {websiteNavigation ? (
        <div className={`website-navigation ${menuOpened ? "active" : ''}`}>
          {websiteNavigation.map((item, index) => (showMenuItem(item) ? (
            <Link
              className="link default"
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
  )
}

export default PageNavigation