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
    info: ' ',
    info2: 'Built with WordPress, Used Elementor',
    url: 'https://smarketingsolutions.co',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lokalplants.com.png',
    title: 'Lokal Plants',
    info: ' ',
    info2: 'Built with WordPress, WooCommerce, PayTR',
    url: 'https://lokalplants.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nazimhikmet.org.tr.png',
    title: 'Nazim Hikmet Culture and Art Foundation',
    info:
      'The Nâzım Hikmet Culture and Art Foundation, was established by the poet’s sister, Samiye Yaltırım, who became its first President. The founders completed all legal formalities and initiated activities on May 22, 1991.',
    info2: 'Built with WordPress, Kallyas Theme, WooCommerce, Custom Coded Pages',
    url: 'https://www.nazimhikmet.org.tr/en/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'publiciti.com.tr.png',
    title: 'Digital Media Agency - Publi Citi',
    info:
      'Publi Citi is a Los Angeles based digital media agency. Their services will bring your brand to the world and introduce you to them.',
    info2: 'Built with WordPress, Custom Theme',
    url: 'https://publiciti.com.tr',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ongcenter.com.png',
    title: 'ONG Center',
    info: ' ',
    info2: 'Built with WordPress, WooCommerce, LearnPress',
    url: 'https://lokalplants.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wpadami.com.png',
    title: 'WpAdamı',
    info: 'My WordPress related blog. Turkish',
    info2: 'Built with WordPress',
    url: 'https://wpadami.com.com',
    repo: '', // if no repo, the button will not show up
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
      name: 'instagram',
      url: 'https://instagram.com/serkanalgur',
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
    {
      id: nanoid(),
      name: 'globe',
      url: 'https://wpadami.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
