import './Sidebar.scss';

const info = {
  picture: './assets/profile.jpeg',
  name: 'Asen Angelov',
  position: 'Software Engineer',
}

const social = [
  {
    src: './assets/github-logo.png',
    href: 'https://github.com/entrpyc',
    alt: 'github',
  },
  {
    src: './assets/gitlab-logo.png',
    href: 'https://gitlab.com/aangelov1',
    alt: 'gitlab',
  },
  {
    src: './assets/npm-logo.png',
    href: 'https://www.npmjs.com/~entrpyc',
    alt: 'npm',
  },
  {
    src: './assets/linkedin-logo.png',
    href: 'https://www.linkedin.com/in/asen-angelov-a26458195/',
    alt: 'linkedin',
  }
]

const navigation = [
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Portfolio',
    href: '#portfolio',
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="picture">
        <div className="img-container">
          <img src={info.picture} alt={info.name} />
        </div>
      </div>
      <div className="info">
        <h1>{info.name}</h1>
        <p>{info.position}</p>
      </div>
      <div className="social">
        {social.map((item, index) => (
          <a href={item.href} target="_blank" rel="noreferrer">
            <img src={item.src} key={index} alt={item.alt} />
          </a>
        ))}
      </div>
      <div className="navigation">
        {navigation.map((item, index) => (
          <a href={item.href} key={index}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar