import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import { DarkModeContext } from "../../context/darkModeContext";
import { projectsContentStyle } from "./styles";

const Projects: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box display="flex" flexDirection={"column"}>
      <NavBar isProjectsPage />
      <Box
        sx={
          darkMode
            ? { ...projectsContentStyle, backgroundColor: "black" }
            : projectsContentStyle
        }
      >
        <Typography
          variant="h4"
          sx={
            darkMode
              ? { color: "white", marginBottom: "2rem" }
              : { color: "#004A55", marginBottom: "2rem" }
          }
        >
          My projects
        </Typography>
        <ProjectCard
          title="luxury-detailing"
          description="This project was done for an acquaintance that decided to open a car detailing business and needed a web app for it. Front-end was done in NextJS 13 beta and hosted on Vercel. For the backend I used Strapi CMS so that the client would be able to upload images and services that are displayed in the web app, and it is hosted on DigitalOcean App Platform. As for the database, I used Postgres, which is hosted on aiven.io "
          technologies="HTML, CSS, JavaScript, Typescript, NextJS, TailwindCSS, Strapi, PostgreSQL"
          githubUrl="https://github.com/Aleku99/luxury-detailing-fe"
          githubUrl2="https://github.com/Aleku99/luxury-detailing-be"
          websiteUrl="https://www.luxurydetailing.ro/"
        />
        <ProjectCard
          title="personal-website"
          description="You are currently looking at it. I decided to create this project at the moment I felt confident enough to take side projects, beside my main job. This is a work in progress."
          technologies="HTML, CSS, JavaScript, Typescript, React, MaterialUI"
          githubUrl="https://github.com/Aleku99/personal-website"
          websiteUrl="#"
        />
        <ProjectCard
          title="employee-management-app"
          description="This project was a collaboration with 2 other colleagues during my time in Endava. We had to provide only the front-end as the back-end was done by another team. It was supposed to be an internal tool for managing employees."
          technologies="HTML, CSS, JavaScript, React, MaterialUI"
          githubUrl="https://github.com/Aleku99/employee-manager"
        />
        <ProjectCard
          title="smart-drip"
          description="Smart-drip was my final university project. It is an automated irrigation system with the
          possibility of being configured from a web application. During the period I worked on this
          I've learned a lot technologies. Front-end was developed using ReactJS and Redux for
          state management. The back-end part was implemented using NodeJS and Express. For
          the database I chose not to use MongoDB, which I was familiar with, but Firebase, as I
          wanted to learn something new.
          "
          technologies="HTML, CSS, JavaScript, React, NodeJS, Express"
          githubUrl="https://github.com/Aleku99/smart-drip"
          githubUrl2="https://github.com/Aleku99/smart-drip-backend"
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
