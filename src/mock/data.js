import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Serkan Algur | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Serkan Algur',
  subtitle: "I'm a WordPress Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'serkan-algur.jpeg',
  paragraphOne:
    "I'm currently working on WordPress, Go, Node JS. I'm currently learning Tensorflow, Artificial Intelligence",
  paragraphTwo: `I'm creating websites and Web Applications with; \nWordPress \nDjango \nNode JS`,
  paragraphThree: "I'm currently living in Baku, Azerbaijan",
  resume: 'https://www.linkedin.com/in/serkanalgur/', // if no resume, the button will not show up
};

// PORTFOLIO DATA
export const portfolioData = [
  {
    id: nanoid(),
    img: 'pgsestates.png',
    title: 'PGS Estates',
    info:
      'PGS Estates is PGS’s inhouse bespoke property agency, dealing with all aspects of real estate work, from sale and acquisition, through to property management. With a combined 35 years of in-office experience with London property markets, we are incredibly well positioned to assist clients with all of their property and administrative needs',
    info2: 'Built with WordPress. Custom Theme, Google Maps Api',
    url: 'https://pgsestates.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bebedu.com.png',
    title: 'Bebedu ',
    info:
      'Its a website for parents with a focus on early years (0-6 y.o.). Apart from providing informational and educational posts about child development and care, it also includes nursery/kindergarten listings in major cities and contains medical information about the most common diseases and sicknesses written by doctors.',
    info2: 'Built with WordPress. Custom Theme, Google Maps Api',
    url: 'https://bebedu.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smarketingsolutions.co.png',
    title: 'SMarketing Solutions',
    info: '',
    info2: '',
    url: '',
    repo: 'https://smarketingsolutions.co', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lokalplants.com.png',
    title: 'Lokal Plants',
    info: '',
    info2: '',
    url: '',
    repo: 'https://lokalplants.com', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'phpfuncs.png',
    title: 'PHP Functions for Golang',
    info:
      'PHP functions implementation to Golang. This package is for the Go beginners who have developed PHP code before.',
    info2: 'Golang',
    url: 'https://pkg.go.dev/github.com/serkanalgur/phpfuncs',
    repo: 'https://github.com/serkanalgur/phpfuncs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'istckimlik.png',
    title: 'isTCKimlik',
    info: 'A tool for validate Turkish Identification Number',
    info2: 'TypeScript, NodeJS',
    url: 'https://www.npmjs.com/package/istckimlik',
    repo: 'https://github.com/serkanalgur/istckimlik', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'slb.png',
    title: 'Search Limiter & Blocker',
    info: 'You can set a search limit for visitors via IP addresses.',
    info2: 'WordPress Plugin',
    url: 'https://wordpress.org/plugins/search-limiter-blocker/',
    repo: 'https://github.com/serkanalgur/search-limiter-blocker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cmb2fa.png',
    title: 'CMB2 Field Type: Font Awesome',
    info: 'Font Awesome icon selector for powerful custom metabox generator CMB2',
    info2: 'WordPress Plugin',
    url: 'https://wordpress.org/plugins/cmb2-field-type-font-awesome/',
    repo: 'https://github.com/serkanalgur/cmb2-field-faiconselect', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'selam@serkanalgur.com.tr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/serkanalgur',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://facebook.com/serkan.algur',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/serkanalgur/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/serkanalgur',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
