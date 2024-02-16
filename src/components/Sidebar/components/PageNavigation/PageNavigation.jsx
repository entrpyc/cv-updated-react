import css from './PageNavigation.module.scss';

import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';
import { LocalStorage, keys } from 'helpers/adapters/localstorage-adapter';

function PageNavigation({ websiteNavigation, pageNavigation }) {
  function showMenuItem(item) {
    const application = LocalStorage.get(keys.application);

    if(item.id === "resume" && !application) return false;

    return true;
  }

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
      {websiteNavigation ? (
        <div className={`website-navigation active`}>
          {websiteNavigation.map((item, i) => (showMenuItem(item) ? (
            <Link
              className="link default"
              href={item.href}
              to={item.to}
              key={i}
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