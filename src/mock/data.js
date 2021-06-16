import { nanoid } from 'nanoid';

export const siteMetadata = {
  title: `Alpha Olomi // Software Developer`,
  description: `Alpha Olomi is a Software Developer with over 3 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.`,
  author: `@alphaolomi`,
  keywords: [
    'Alpha Olomi',
    'Alpha Elifuraha Olomi',
    'personal',
    'portfolio',
    'experience',
    'freelance',
    'student',
    'engineer',
    'software',
    'developer',
  ],
  contact: 'hello@alphaolomi.com',
  image: 'https://alphaolomi.com/img/thumbnail.png',
  site_name: 'Alpha Olomi // Software Developer',
  website: 'https://alphaolomi.com',
  lang: 'en',
};

// HEAD DATA
export const headData = {
  title: 'Alpha Olomi // Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Alpha Olomi is a software developer with over 4 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alpha Olomi',
  subtitle: "I'm the Missing Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '/alpha.jpg',
  paragraphOne:
    'Hi there, My name is Alpha Olomi . A software developer based in Tanzania. Passionate about technology and open source software that have positive impact to the society. Also, constantly developing new skills and learning from other developers in the software development sphere. I’m interest in Full stack development and Cyber security.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://bit.ly/AlphaCV', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '/foodapp.png',
    title: 'FoodApp',
    info: 'Discover the best on-demand food delivery service apps that you must try today to get access to hundreds of amazing local restaurants foods and cuisines.',
    info2: 'Find Food Options For Your Budget. Hungry?',
    url: 'https://food-engine.herokuapp.com/',
    repo: 'https://github.com/alphaolomi/food-app', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alphaolomi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/alphaolomi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/alphaolomi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/alphaolomi',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alphaolomi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export default {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  githubButtons,
};
