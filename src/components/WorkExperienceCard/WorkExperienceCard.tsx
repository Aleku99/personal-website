import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import {
  darkWorkCardStyles,
  workCardContentStyling,
  workCardIconStyling,
  workCardStyles,
} from "./styles";

interface Props {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string;
}

const WorkExperienceCard: React.FC<Props> = ({
  title,
  company,
  startDate,
  endDate,
  description,
  technologies,
  location,
}) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Grid container width={{ lg: "60vw" }}>
      <Card sx={darkMode ? darkWorkCardStyles : workCardStyles} raised>
        <CardHeader title={`${title} - ${company}`} />
        <CardContent>
          <Box sx={workCardContentStyling}>
            <img
              style={workCardIconStyling}
              src="assets/calendarIcon.png"
              alt="calendar icon"
            ></img>
            <Typography>{`${startDate} - ${endDate}`}</Typography>
          </Box>
          <Box sx={workCardContentStyling}>
            <img
              style={workCardIconStyling}
              src="assets/locationIcon.png"
              alt="location icon"
            ></img>
            <Typography>{location}</Typography>
          </Box>
          <Box sx={workCardContentStyling}>
            <img
              style={workCardIconStyling}
              src="assets/descriptionIcon.png"
              alt="description icon"
            ></img>
            <Typography>{description}</Typography>
          </Box>
          <Box sx={workCardContentStyling}>
            <img
              style={workCardIconStyling}
              src="assets/technologiesIcon.png"
              alt="technologies icon"
            ></img>
            <Typography>{technologies}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WorkExperienceCard;
