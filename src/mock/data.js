import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kozmo | Web Graphic/Designer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kozmo',
  subtitle: 'Web/graphic Designer based in Morelia, Mexico.',
  cta: 'more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I have a bachelor’s degree in Journalism and Communication and more than ten years of experience in Visual Communication; for the past nine years I have developed my skills in graphic and web design working both in private and government companies and also abroad.',
  paragraphTwo:
    'As an aspiring visual artist and whimsical wavemaker, I enjoy working with multimedia tools to communicate ideas that later become marketing tools for successful products and services. As a leader I’ve had the pleasure of managing small groups and creating special and caring collaborations through Agile methodologies that build excellent results.',
  paragraphThree:
    'As a journalism enthusiast I’m fond of the art of the written word. I enjoy writing as much as I enjoy reading. A few years ago I worked as an English language instructor for top-notch companies',
  resume: 'https://drive.google.com/file/d/1P7Utl5ZTGq17xFkT3_PxOCt36yZL6nok/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cdaproject1.jpg',
    title: 'La Casa del Aguacate',
    info: 'The latest project created with "Karnak", my very own HTML/CSS framework. Designed in Adobe XD. Coded in Visual Studio Code & managed through Filezilla, I´m very proud of this product since I was the only designer/developer to build it from the ground up.',
    info2: '',
    url: 'https://casadelaguacate.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'karnakproject1.jpg',
    title: 'Karnak. Temple of the gods',
    info: 'A simple, fast & responsive CSS framework. Karnak is an easy way to create landing pages that includes a semantic, responsive and light-weight css framework. Easy to install and easy to use, Karnak is constructed with W3 compliances while the css is optimized with Less language. ',
    info2: 'Code faster, better and cleaner using Karnak for your small web-design projects.',
    url: 'https://ko2m0.github.io/karnak-XII-grid/',
    repo: 'https://github.com/ko2m0/karnak', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fwtbtproject1.jpg',
    title: 'For Whom the Bell Tolls',
    info: 'A Karnak framework-based landing page with some Metallica inspiration.',
    info2: '',
    url: 'https://ko2m0.github.io/fwtbt_bykarnak/',
    repo: 'https://github.com/ko2m0/fwtbt_bykarnak', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'kozmopimp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/kozmo_',
    },
    /*
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/kozmoromero',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ko2m0',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
