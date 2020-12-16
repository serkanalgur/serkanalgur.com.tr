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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/serkanalgur/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://smarketingsolutions.co', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
