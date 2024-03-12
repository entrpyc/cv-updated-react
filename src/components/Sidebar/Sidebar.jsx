import { useContext } from 'react';

import css from './Sidebar.module.scss';

import PageNavigation from './components/PageNavigation/PageNavigation';

import Avatar from 'components/Avatar/Avatar';
import Title from 'elements/Title/Title';
import Text from 'elements/Text/Text';
import Icon from 'elements/Icon/Icon';
import Link from 'elements/Link/Link';

import { InterfaceContext } from 'context/InterfaceContext';
import { FeatureContext } from 'context/FeatureContext';


function Sidebar() {
  const { message } = useContext(FeatureContext);
  const { pageInterface } = useContext(InterfaceContext);
  const { navigation } = pageInterface;

  const {
    info,
    social,
    websiteNavigation,
    pageNavigation,
    downloads,
  } = navigation || {};
  
  return (info && social &&
    <aside className={css.sidebar}>
      <div className="aside-content">
        <div className="sidebar-content">
          <div className="page-navigation">
            <Avatar picture={info.picture} name={info.name} message={message} />
            <div className="info">
              <Title tag="h1">{info.name}</Title>
              <Text>{info.position}</Text>
            </div>
            <div className="social">
              {social.map((link, i) => (
                <Link href={link.link} target="_blank" rel="noreferrer" key={i}>
                  <Icon name={link.logo || `logo-${link.name}`} />
                </Link>
              ))}
            </div>
            <PageNavigation {...{ websiteNavigation, pageNavigation, downloads }} />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar