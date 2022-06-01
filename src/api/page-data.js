const picture = './assets/profile.jpeg'

export const aboutData = {
  picture,
  birthdate: 'June 10, 1999',
  location: 'Sofia, Bulgaria',
  email: 'contact@a-angelov.eu',
  phone: '+359 896 929 913',
}

export const experienceData = [
  {
    title: 'Clustermarket',
    subTitle: 'Software Engineer | February, 2022 - PRESENT',
    text: "I'm working on a Booking software developed with Ruby.",
    secondary: "I'm developing the Front-end architecture of a Svelte based version of the software. We are working with GraphQL, Svelte, and GitLab. A part from the position is to review peer code on a daily basis and actively contribute to the development of the business logic.",
  },
  {
    title: 'Senteca Commerce',
    subTitle: 'Software Engineer | October, 2021 - January 2022',
    text: "I applied as a Senior Front-end Developer",
    secondary: "Senteca Commerce are developing e-commerce solutions for big brands in Bulgaria. I was responsible for reviewing junior code and refactoring websites to improve their usability and performance. We were using Next.js, GraphQl, and Tailwind.",
  },
  {
    title: 'LimeChain',
    subTitle: 'Blockchain Developer | November, 2020 - November, 2021',
    text: "The majority of my work revolved around developing PWAs based on blockchain technology. I've also developed smart contracts and engaged with developing APIs. I've worked on complicated projects such as the Boson Protocol and Universe.xyz where my team and I developed a decentralized marketplace, auctions, and an NFT collection.",
    secondary: "Core technologies were JavaScript, REACT, and Solidity.",
  },
  {
    title: 'Grind Web Studio',
    subTitle: 'Front-end Developer | November, 2019 - November, 2020',
    text: "I developed e-commerce platforms with WordPress using Sass, JavaScript, and Laravel blades.",
    secondary: "My responsibilities at Grind were to build pixel-perfect pages, provide needed custom data fields in the admin panel of WordPress, optimize device and browser compatibility, and create custom functionalities using vanilla JavaScript.",
  },
  {
    title: 'Max Win Gaming LTD',
    subTitle: 'Marketing Designer, 2D Animator | December, 2017 - October, 2019',
    text: "My team and I at Max Win Gaming developed online slot games. My job was to sketch and create animations, improve the games visually, and prepare marketing materials.",
    secondary: "The games were made using canvas and easelJS. My job required very good knowledge and experience in Adobe PS, AE, and Animate. At Max Win Gaming I improved my knowledge in UX design and developed my graphic design skills. The work has been complex and challenging - as the small team we were, we all had involvement in every part of the production and selling.",
  },
]

export const portfolioData = {

}

export const sidebarData = {
  info: {
    picture,
    name: 'Asen Angelov',
    position: 'Software Engineer',
  },
  
  social: [
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
  ],
  
  navigation: [
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
  ],
}