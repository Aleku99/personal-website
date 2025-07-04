interface Project {
  title: string;
  description: string;
  technologies: string;
  githubUrl?: string;
  githubUrl2?: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    title: "confectii-metalice",
    description:
      "I was contracted to build a presentation website for someone who opened a new business. The app is front-end only, has 4 pages: a home page, services page,  gallery page and contact page.",
    technologies: "Typescript, React, Tailwind, EmailJS, Netlify",
    githubUrl: "https://github.com/Aleku99/gelato-divino",
    websiteUrl: "https://confectiimetalicecs.ro/",
  },
  {
    title: "looties",
    description:
      "looties is a new Web3 game that offers a variety of NFT loot boxes that have the chance of dropping highly collectible NFTs. Users could enter the app, log in using one of their Solana Crypto Wallets, deposit Solana(SOL) and NFTs from their wallets, buy app tokens using SOL, and create their own lootboxes. I have mainly worked to the front-end, where I implemented the app from the ground using React. I have also contributed to the back-end, where i wrote a few endpoints in the newly-created NestJS REST API.",
    technologies:
      "Typescript, React, Tailwind, NestJS, Prisma ORM, Linear, Gitlab, Digital Ocean",
  },
  {
    title: "luxury-detailing",
    description:
      "This project was done for an acquaintance that decided to open a car detailing business and needed a website for it.",
    technologies: "HTML, CSS, JavaScript, Typescript, NextJS, TailwindCSS",
    githubUrl: "https://github.com/Aleku99/luxury-detailing-fe",
  },
  {
    title: "personal-website",
    description:
      "You are currently looking at it. I decided to create this project at the moment I felt confident enough to take side projects, beside my main job. This is a work in progress.",
    technologies: "HTML, CSS, JavaScript, Typescript, React, MaterialUI",
    githubUrl: "https://github.com/Aleku99/personal-website",
    websiteUrl: "#",
  },
  {
    title: "employee-management-app",
    description:
      "This project was a collaboration with 2 other colleagues during my time in Endava. We had to provide only the front-end as the back-end was done by another team. It was supposed to be an internal tool for managing employees.",
    technologies: "HTML, CSS, JavaScript, React, MaterialUI",
    githubUrl: "https://github.com/Aleku99/employee-manager",
  },
  {
    title: "smart-drip",
    description:
      "Smart-drip was my final university project. It is an automated irrigation system with the possibility of being configured from a web application. During the period I worked on this I've learned a lot technologies. Front-end was developed using ReactJS and Redux for state management. The back-end part was implemented using NodeJS and Express. For the database I chose not to use MongoDB, which I was familiar with, but Firebase, as I wanted to learn something new. ",
    technologies: "HTML, CSS, JavaScript, React, NodeJS, Express",
    githubUrl: "https://github.com/Aleku99/smart-drip",
    githubUrl2: "https://github.com/Aleku99/smart-drip-backend",
  },
];
