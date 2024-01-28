const picture = './assets/profile.png'

export const aboutData = {
  birthdate: 'July 22, 2001',
  location: 'Sofia, Bulgaria',
  email: 'kaloyantsenkulovski.cv@gmail.com',
  phone: '+359 898 437 788',
  specialized: 'Front-end and Javascript technologies',
  lookingFor: 'React Mid-level Developer Role',
  minimumSalaryExpected: `NET 5'000BGN / month`,
}

export const experienceData = [
  {
    title: 'Indepth Solutions',
    subTitle: 'Co-Founder & CEO | January, 2023 - PRESENT',
    text: [
      "At our company, we specialize in integrating AI solutions tailored for automating repetitive tasks within businesses.",
      "I was playing a crucial role in connecting with both my colleagues and the CTO to comprehensively grasp the requirements of our customers. This involved a seamless integration of fast solutions coupled with artificial intelligence. My primary focus was on ensuring a profound understanding of our clients' operations, dissecting the entire process from inception to conclusion, and delivering the most optimal solutions for their needs.",
    ],
  },
  {
    title: 'Grind Web Studio',
    subTitle: 'Front End Developer | August, 2022 - July, 2022',
    text: [
      "I developed e-commerce platforms with WordPress using Sass, JavaScript, and Laravel blades.",
      "My responsibilities at Grind were to build pixel-perfect pages, provide needed custom data fields in the admin panel of WordPress, optimize device and browser compatibility, and create custom functionalities using vanilla JavaScript.",
    ],
  },
  {
    title: 'Freelance',
    subTitle: 'Web Development | January, 2021 - March, 2022',
    text: [
      "In my freelance journey, I've engaged in a variety of projects, lending my skills in web development. My dedication to producing top-notch results is evident through successful collaborations with diverse clients. I have a demonstrated history of grasping client requirements, transforming them into actionable plans, and executing projects with precision. Through clear communication and keen attention to detail, I prioritize client satisfaction while meeting project timelines. Freelancing has sharpened my adaptability, problem-solving abilities, and the knack for delivering outstanding results in dynamic and fast-paced settings."
    ],
  },
]

export const portfolioData = [
  {
    title: "Web Development",
    content: [
      {
        "title": "BMI Bulgaria- Roof installations information and catalog",
        "href": "https://www.bmigroup.com/bg/",
        "techStack": [
          { title: "Javascript" },
          { title: "jQuery" },
          { title: "Laravel" },
          { title: "Tailwind" },
        ]
      },
      {
        "title": "Kaiski - Web site for an artist with custom  CMS",
        "href": "https://www.kaiski.com/",
        "techStack": [
          { title: "Next JS" },
          { title: "Firebase" },
          { title: "Tailwind" },
        ]
      },
      {
        "title": "Biotrade Corporate website - Interactive Map",
        "href": "https://biotrade.global/",
        "techStack": [
          { title: "Javascript (Vanilla)" },
          { title: "Laravel" },
          { title: "Wordpress (with ACF)" },
        ]
      },
    ]
  }
]

export const skillsData = [
  {
    title: 'Tailwind',
    text: [
      "Since 2022, I've always used Tailwind in my projects. It's super simple and clear, making my work a lot easier. Tailwind's customization options are handy, allowing me to tweak things to fit each project perfectly."
    ]
  },
  {
    title: 'Javascript',
    text: [
      "In my ongoing projects, JavaScript is my reliable choice. Its dynamic nature simplifies coding tasks, making the development process straightforward and efficient. Whether dealing with the DOM, managing asynchronous operations, or creating interactive features, JavaScript proves invaluable in meeting the specific demands of each project.",
      // "I'm getting into TypeScript, keen to learn. While I'm not an expert, the idea of static typing and concepts like interfaces caught my eye. Each step in learning adds to my curiosity. I'm on a journey of exploration and continuous learning in TypeScript, and I'm excited about unraveling its potential!"
    ]
  },
  {
    title: 'React & Next JS',
    text: [
      "I'm utilizing React as a swift solution over Vanilla JavaScript, drawn to its component-based architecture and efficient state management. The modular nature of React components provides a clean and organized structure to my projects",
      "Recently, I've seamlessly integrated Next.js into the stack. This addition enhances the development process further with server-side rendering capabilities, optimizing page loads and bolstering overall performance."
    ]
  },
  {
    title: 'Web Development',
    text: [
      "I possess a solid understanding of web development intricacies. From managing cookies, load balancing, and distinguishing Local Storage from Session Storage to navigating client-side and server-side JavaScript. My expertise extends to server-side rendering, client-side rendering, and performance optimization. Adhering to best practices like KISS, and DRY principles.",
    ]
  },
  {
    title: 'Business Solutions',
    text: [
      "I use my business experience gained from co-founding a company to identify more efficient solutions for engineering challenges that directly affect the overall performance of the business.",
      "This experience has also sharpened my ability to prioritize tasks effectively and discern their levels of urgency. Also understanding the goals and challenges of colleagues across various departments has notably enhanced my communication skills within the team."
    ]
  },
]

export const bioData = [
  {
    title: 'Engineering',
    text: [
      'asdasdsa',
      'asdasdsa',
    ]
  },
  {
    title: 'Engineering',
    text: [
      'asdasdsa',
      'asdasdsa',
    ]
  },
]

export const sidebarData = {
  info: {
    picture,
    name: 'Kaloyan Tsenkulovski',
    position: 'Front-End Developer',
  },

  social: [
    {
      src: './assets/github-logo.png',
      href: 'https://github.com/Kaloiann',
      alt: 'github',
    },
    // {
    //   src: './assets/npm-logo.png',
    //   href: 'https://www.npmjs.com/~entrpyc',
    //   alt: 'npm',
    // },
    {
      src: './assets/linkedin-logo.png',
      href: 'https://www.linkedin.com/in/kaloyan-tsenkulovski-6a4a91230/',
      alt: 'linkedin',
    }
  ],

  navigation: [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Portfolio',
      href: '#portfolio',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
  ],
}