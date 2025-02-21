import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import WorkExperienceCard from "../../components/WorkExperienceCard";
import { DarkModeContext } from "../../context/darkModeContext";
import { experienceContentStyle } from "./styles";
import { workExperience } from "../../data/workExperience";

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
        {workExperience.map(
          ({
            title,
            company,
            location,
            startDate,
            endDate,
            description,
            technologies,
          }) => (
            <WorkExperienceCard
              title={title}
              company={company}
              location={location}
              startDate={startDate}
              endDate={endDate}
              description={description}
              technologies={technologies}
            />
          )
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Experience;
