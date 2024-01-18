import { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import Avatar from 'components/Avatar/Avatar'
import Icon from 'elements/Icon/Icon';
import Title from 'elements/Title/Title';
import Text from 'elements/Text/Text';
import Link from 'elements/Link/Link';

function PageNavigation() {
  const { message, pageData } = useContext(GlobalContext);
  const { sidebar } = pageData;
  const { info, social, navigation } = sidebar || {};

  return (sidebar &&
    <div className="page-navigation">
      <Avatar picture={info.picture} name={info.name} message={message} />
      <div className="info">
        <Title tag="h1">{info.name}</Title>
        <Text>{info.position}</Text>
      </div>
      <div className="social">
        {social.github &&
          <Link href={social.github} target="_blank" rel="noreferrer">
            <Icon name="logo-github" />
          </Link>
        }
        {social.npm &&
          <Link href={social.npm} target="_blank" rel="noreferrer">
            <Icon name="logo-npm" />
          </Link>
        }
        {social.linkedin &&
          <Link href={social.linkedin} target="_blank" rel="noreferrer">
            <Icon name="logo-linkedin" />
          </Link>
        }
      </div>
      <div className="navigation">
        {navigation.map((item, index) => (
          <Link href={item.href} key={index}><Icon name="anchor" /> {item.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default PageNavigation