import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import { DarkModeContext } from "../../context/darkModeContext";
import { projectsContentStyle } from "./styles";
import { projects } from "../../data/projects";

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
          align="center"
          sx={
            darkMode
              ? { color: "white", marginBottom: "2rem" }
              : { color: "#004A55", marginBottom: "2rem" }
          }
        >
          Projects and freelance work
        </Typography>
        {projects.map(
          ({
            description,
            title,
            technologies,
            githubUrl,
            githubUrl2,
            websiteUrl,
          }, index) => (
            <ProjectCard
              key={`project_${index}`}
              title={title}
              description={description}
              technologies={technologies}
              githubUrl={githubUrl}
              githubUrl2={githubUrl2}
              websiteUrl={websiteUrl}
            />
          )
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Projects;
