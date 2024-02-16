import css from './PageNavigation.module.scss';

import { useEffect, useState } from 'react';

import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import { LocalStorage, keys } from 'helpers/adapters/localstorage-adapter';

function PageNavigation({ websiteNavigation, pageNavigation }) {
  const [visiblePageNavigation, setVisiblePageNavigation] = useState([]);
  
  function showMenuItem(item) {
    const application = LocalStorage.get(keys.application);

    if(item.id === "resume" && !application) return false;

    return true;
  }

  useEffect(() => {
    setVisiblePageNavigation(
      websiteNavigation.filter(item => showMenuItem(item))
    );
  }, [websiteNavigation])

  return (
    <div className={css.navigation}>
      <div className="menu">
        {pageNavigation ? (
          <div className={`page-navigation active`}>
            {pageNavigation.map((item, i) => (
              <Link
                className="link default"
                href={item.href}
                to={item.to}
                key={i}
              >
                <Icon name={item.icon || "anchor"} /> {item.name}
              </Link>
            ))}
          </div>
        ): null}
      </div>
      {visiblePageNavigation && visiblePageNavigation.length > 1 ? (
        <div className={`website-navigation active`}>
          {visiblePageNavigation.map((item, i) => (
            <Link
              className="link default"
              href={item.href}
              to={item.to}
              key={i}
            >
              <Icon name={item.icon || "anchor"} /> {item.name}
            </Link>
          ))}
        </div>
      ): null}
    </div>
  )
}

export default PageNavigation