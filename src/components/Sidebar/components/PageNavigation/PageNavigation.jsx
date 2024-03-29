import css from './PageNavigation.module.scss';

import { useEffect, useState } from 'react';

import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import { LocalStorage, keys } from 'helpers/adapters/localstorage-adapter';

function PageNavigation({ websiteNavigation, pageNavigation, downloads }) {
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
  }, [websiteNavigation, pageNavigation])

  return (
    <div className={css.navigation}>
      {visiblePageNavigation && visiblePageNavigation.length > 1 ? (
        <div className="menu">
          <div className={`website-navigation active`}>
            {visiblePageNavigation.map((item, i) => (
              <Link
                className="link default"
                href={item.href}
                to={item.to}
                key={i}
              >
                <Icon name={item.icon || "link"} /> {item.name}
              </Link>
            ))}
          </div>
        </div>
      ): null}
      {pageNavigation ? (
        <div className="menu">
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
        </div>
      ): null}
      {downloads ? (
        <div className="menu">
            <div className={`downloads active`}>
              {downloads.map((item, i) => (
                <Link
                  className="link default"
                  download={item.download}
                  downloadFileName={item.downloadFileName}
                  key={i}
                >
                  <Icon name={item.icon || "download"} /> {item.name}
                </Link>
              ))}
            </div>
        </div>
      ): null}
    </div>
  )
}

export default PageNavigation