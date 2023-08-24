export const technologies = [
  {
    name: 'JavaScript',
    icon: '/images/tech/javascript.png',
    color: '#F0DB4F',
    position: {
      x: 5,
      y: -7,
      z: -4,
    },
  },
  {
    name: 'TypeScript',
    icon: '/images/tech/typescript.png',
    color: '#007acc',
    position: {
      x: -5,
      y: 7,
      z: 4,
    },
  },
  {
    name: 'React JS',
    icon: '/images/tech/reactjs.png',
    color: '#61DBFB',
    position: {
      x: 0,
      y: 0,
      z: 10,
    },
  },
  {
    name: 'Redux Toolkit',
    icon: '/images/tech/redux.png',
    color: '#764abc',
    position: {
      x: 0,
      y: 0,
      z: -10,
    },
  },
  {
    name: 'Node JS',
    icon: '/images/tech/nodejs.png',
    color: '#68a063',
    position: {
      x: 10,
      y: 0,
      z: 0,
    },
  },
  {
    name: 'Three JS',
    icon: '/images/tech/threejs.png',
    color: '#ffffff',
    position: {
      x: -10,
      y: 0,
      z: 0,
    },
  },
  {
    name: 'HTML 5',
    icon: '/images/tech/html.png',
    color: '#e34c26',
    position: {
      x: 5,
      y: 7,
      z: -4,
    },
  },
  {
    name: 'CSS 3',
    icon: '/images/tech/css.png',
    color: '#264de4',
    position: {
      x: -5,
      y: -7,
      z: 4,
    },
  },
  {
    name: 'MongoDB',
    icon: '/images/tech/mongodb.png',
    color: '#3FA037',
    position: {
      x: -5,
      y: -9,
      z: -4,
    },
  },
]

export const experiences = [
  {
    title: 'Web Developer Bootcamp',
    company_name: 'Udemy',
    icon: '/images/portfolio.png',
    iconBg: 'rgb(170 166 195)',
    date: 'November 2021 - April 2022',
    points: [
      'Learning the fundamentals of HTML, CSS, and JavaScript to create webpages and applications.',
      'Developing a strong understanding of web development principles such as responsive design, accessibility, and cross-browser compatibility',
      'Learning how to use databases such as MongoDB to store data for web applications.',
      'Gaining experience with version control systems such as Git and GitHub for managing code changes.',
    ],
  },
  {
    title: 'Modern JavaScript Bootcamp',
    company_name: 'Udemy',
    icon: '/images/tech/javascript.png',
    iconBg: '#323330',
    date: 'March 2022 - May 2022',
    points: [
      'Understanding the fundamentals of JavaScript, including variables, functions, objects, and arrays.',
      'Working with the Document Object Model (DOM) to manipulate webpages.',
      'Using modern JavaScript libraries and frameworks such as React.js',
      'Building interactive web applications with AJAX and APIs. Writing clean, maintainable code with best practices in mind.',
    ],
  },
  {
    title: "Typescript: The Complete Developer's Guide",
    company_name: 'Udemy',
    icon: '/images/tech/typescript.png',
    iconBg: '	#ffffff',
    date: 'June 2022 - August 2022',
    points: [
      'Learning the fundamentals of TypeScript, including its syntax, data types, and classes.',
      'Developing a strong understanding of object-oriented programming principles and design patterns.',
      'Utilizing the latest features of TypeScript such as generics, decorators, and async/await functions.',
      "Creating robust applications with confidence using TypeScript's type safety and static analysis capabilities.",
    ],
  },
  {
    title: 'Freelance Web Developer',
    company_name: 'Wolfinger Company',
    icon: '/images/wolfpad.png',
    iconBg: '#fa6400',
    date: 'August 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js, Redux and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Udemy',
    icon: '/images/tech/nodejs.png',
    iconBg: '#303030',
    date: 'November 2022 - January 2023',
    points: [
      'Learning the fundamentals of Node.js, including its core concepts, syntax, and best practices.',
      'Becoming familiar with the Next.js framework for production apps and understand how to use it to create powerful web applications.',
      'Utilizing modern tools such as React, Redux, GraphQL, and Apollo to create dynamic user interfaces and powerful data management solutions.',
      'Staying up-to-date on the latest trends in web development and use them to create innovative solutions for the future of the web.',
    ],
  },
  {
    title: 'Cross-Platform P2P App Developer',
    company_name: 'Freelance - Socket Supply P2P Technology',
    icon: '/images/schoolLogo.png',
    iconBg: 'rgb(170 166 195)',
    date: 'January 2023 - present',
    points: [
      'Learning the fundamentals of computer networking and distributed systems.',
      'Becoming familiar with the different types of P2P architectures and protocols.',
      'Familiarizing with existing P2P applications and their source code.',
      'AI Programming Fundamentals.',
    ],
  },
]

import { questions } from '../questions'

export const LETTERS = ['a', 'b', 'c', 'd', 'e'] // it depends on how many options in answers []

export const INFO = {
  title: 'Informacje dotyczące platformy e-learningowej',
  content:
    'Testy nie są powiązane z CMKP, zostały przez mnie wykonane całkowicie dla potrzeb grupy i osób zainteresowanych egzaminem doskanalającym dla opiekuna medycznego na podstawie materiałów udostępnionych przez członków grupy. Platforma E-learningowa jest częścią mojej działalności jako programisty, którą rozwijam w formie open-source. Nie czerpię z tego żadnych korzyści finansowych, ale każdy chętny może mnie wesprzeć poprzez mój profil na LinkedIn lub kupując mi kawę:',
  links: [
    {
      title: 'Buy Me a coffee',
      url: 'https://www.buymeacoffee.com/grzegorzwolfinger',
    },
  ],
}

export const TEST = {
  title: 'Opiekun Medyczny - test, informacje ogólne',
  content: `Testy udostępnione dzięki uprzejmości członków grupy Opiekuna Medycznego na Facebooku. Łączna ilość pytań na
  chwilę obecną ${questions.length}/477. Test z odpowiedziami bazuje w 100% na zrzutach ekranu pytań
  umieszczonych na grupie. Oczywiście, w trakcie formułowania tego testu mogły się pojawić drobne błędy
  literowe lub niezgodności. Jeżeli ktoś zauważy jakiekolwiek błędy, proszę o wiadomość: `,
  links: [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/',
    },
  ],
}

export const MULTIMEDIA = {
  title: 'Opiekun Medyczny - linki do literatury dodatkowej i pliki do pobrania ',
  content:
    'W tym miejscu bedą zamieszczane wszystkie linki i pliki , które są zamieszczane na grupie lub ktoś wyśle je bezpośrednio do mnie, żebym je dołączył. Poniżej znajdziecie linki:',
  links: [
    {
      title: 'Procedury i algorytmy',
      url: 'https://drive.google.com/file/d/1BXNkqw6mL9F_Ami5gSmqNU7eU2FVUhHt/view?usp=drive_link',
    },
    {
      title: 'Skrypt-Opiekun Medyczny',
      url: 'https://drive.google.com/file/d/1jA7JxVKTdETIeU90Rb1fpUeiwMcGxVaC/view?usp=drive_link',
    },
    {
      title: 'Literatura dodatkowa',
      url: 'https://kidl.org.pl/book/category?id=1&fbclid=IwAR0LxLTredD4WnlBKa7sjFfez6BjXSECe7JGh86oWm6HK9qDyEfzIg3d9f8',
    },
    {
      title: 'Pytania-Medyczne',
      url: 'https://drive.google.com/file/d/1CbDT7ha5tK3B8K3QYYlh8JfQStZNiHkb/view?usp=drive_link',
    },
  ],
}
