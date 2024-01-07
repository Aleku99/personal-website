import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import WorkExperienceCard from "../../components/WorkExperienceCard";
import { DarkModeContext } from "../../context/darkModeContext";
import { experienceContentStyle } from "./styles";

const Experience: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box display="flex" flexDirection={"column"}>
      <NavBar isExperiencePage />
      <Box
        sx={
          darkMode
            ? { ...experienceContentStyle, backgroundColor: "black" }
            : experienceContentStyle
        }
      >
        <Typography
          variant="h4"
          align="center"
          sx={
            darkMode
              ? { color: "white", marginBottom: "2rem" }
              : { color: "#004A55", marginBottom: "2rem" }
          }
        >
          Work experience
        </Typography>
        <WorkExperienceCard
          title="Full Stack Developer"
          company="Doctari Group"
          location="Timisoara"
          startDate="03.01.2024"
          endDate="present"
          description="At Doctari Group I am working on a web app responsible for creating job matches between clinics/hospitals and different types of candidates. My main responsibilities include implementing new features based on JIRA requirements, writing unit tests, refactoring existing code and fixing bugs."
          technologies="React, TypeScript, NodeJS, AWS, MongoDB, Salesforce"
        />
        <WorkExperienceCard
          title="Full Stack Developer"
          company="Victory Square Partners"
          location="Timisoara"
          startDate="12.09.2022"
          endDate="29.11.2023"
          description="At Victory Square Partners I have worked for an external client. Our team is
          developing a web application that's responsible with data ingestion from different clients.
          My main responsabilities are to implement new features using React and update/create
          new features in the existing API using NodeJS."
          technologies="HTML, CSS, JavaScript, Typescript, React, ElasticUI, JIRA, Github, OpenSearch, OpenSearch Dashboards"
        />
        <WorkExperienceCard
          title="Junior Front-End Developer"
          company="Endava"
          location="Timisoara"
          startDate="10.01.2022"
          endDate="05.09.2022"
          description="During my time in Endava I've worked for an external client, on a chatbot that would interact with people in case they would like to claim their insurance in case of a car incident. My main responsibilities were to implement new features in React based on JIRA requirements, fixing bugs and creating unit tests using Jest and React Testing Library."
          technologies="HTML, CSS, JavaScript, Typescript, React, MaterialUI, MobX-state-tree, Jest, React Testing Library, JIRA, Github "
        />
        <WorkExperienceCard
          title="Software Tester"
          company="Hella"
          location="Timisoara"
          startDate="05.03.2020"
          endDate="07.01.2022"
          description="During my time in Hella I worked on RLS5 sensor. It was sending data regarding rain, light, solar load, humidity and was responsible for the visibility of the head-up display. My main responsibilities included unit testing using RT-Tester and VectorCast, blackbox and whitebox testing, functional and nonfunctional testing using CANoe/CAPL scripting and WinIdea/IAR, continous test integration in Gitlab, create error reports based on errors found in the SW and offer support for other colleagues."
          technologies="C,  Canoe, CAPL, Gitlab, DOORS, Gitlab "
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Experience;
