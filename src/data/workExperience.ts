interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string;
}

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Typescript Developer",
    company: "Banqup",
    location: "Timisoara",
    startDate: "12.01.2026",
    endDate: "Present",
    description: "-",
    technologies: "Typescript, React, Express, AWS, Docker, SQL",
  },
  {
    title: "Full Stack Developer",
    company: "Doctari Group",
    location: "Timisoara",
    startDate: "03.01.2024",
    endDate: "10.12.2025",
    description:
      "At Doctari Group I have worked on a web application that is responsible for helping customers (clinics or hospitals) with personnel placement (doctors, caregivers and psychotherapists) and shift planning. My role involved delivering end-to-end features based on product and user needs, with a strong focus on code quality, maintainability, and user impact.",
    technologies:
      "React, TypeScript, NodeJS, AWS, MongoDB, Salesforce, Usersnap, d.velop",
  },
  {
    title: "Full Stack Developer",
    company: "Victory Square Partners",
    location: "Timisoara",
    startDate: "12.09.2022",
    endDate: "29.11.2023",
    description:
      "At Victory Square Partners I have worked for an external client. Our team was developing a web application that was responsible with data ingestion. The application we worked on was an OpenSearch Dashboards fork, which we customized after our client's requirements. My main responsabilities were to implement new features with React for the front-end app and using NodeJS for the existing API.",
    technologies:
      "HTML, CSS, JavaScript, Typescript, React, ElasticUI, JIRA, Github, OpenSearch, OpenSearch Dashboards",
  },
  {
    title: "Junior Front-End Developer",
    company: "Endava",
    location: "Timisoara",
    startDate: "10.01.2022",
    endDate: "05.09.2022",
    description:
      "During my time in Endava I've worked for an external client, on a chatbot that would interact with people in case they would like to claim their insurance in case of a car incident. My main responsibilities were to implement new features in React based on JIRA requirements, fixing bugs and creating unit tests using Jest and React Testing Library.",
    technologies:
      "HTML, CSS, JavaScript, Typescript, React, MaterialUI, MobX-state-tree, Jest, React Testing Library, JIRA, Github ",
  },
  {
    title: "Software Test Engineer",
    company: "Hella",
    location: "Timisoara",
    startDate: "05.03.2020",
    endDate: "07.01.2022",
    description:
      "During my time in Hella I worked on RLS5 sensor. It was sending data regarding rain, light, solar load, humidity and was responsible for the visibility of the head-up display. My main responsibilities included unit testing using RT-Tester and VectorCast, blackbox and whitebox testing, functional and nonfunctional testing using CANoe/CAPL scripting and WinIdea/IAR, continuous test integration in Gitlab, create error reports based on errors found in the SW and offer support for other colleagues.",
    technologies: "C,  Canoe, CAPL, Gitlab, DOORS, Gitlab ",
  },
];
