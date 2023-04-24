import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {
  darkProjectCardStyles,
  githubButtonStyle,
  githubButtonStyle2,
  projectCardContentButtonsStyling,
  projectCardContentStyling,
  projectCardIconStyling,
  projectCardStyles,
  websiteButtonStyle,
} from "./styles";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

interface Props {
  title: string;
  description: string;
  technologies: string;
  githubUrl: string;
  githubUrl2?: string;
  websiteUrl?: string;
}

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  technologies,
  githubUrl = "",
  githubUrl2 = "",
  websiteUrl = "",
}) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Grid container width={{ lg: "60vw" }}>
      <Card sx={darkMode ? darkProjectCardStyles : projectCardStyles} raised>
        <CardHeader title={title} />
        <CardContent>
          <Box sx={projectCardContentStyling}>
            <img
              style={projectCardIconStyling}
              src="assets/descriptionIcon.png"
              alt="description icon"
            ></img>
            <Typography>{description}</Typography>
          </Box>
          <Box sx={projectCardContentStyling}>
            <img
              style={projectCardIconStyling}
              src="assets/technologiesIcon.png"
              alt="technologies icon"
            ></img>
            <Typography>{technologies}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "row", lg: "row" }}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            alignItems="center"
            flexWrap="wrap"
            sx={projectCardContentButtonsStyling}
          >
            {githubUrl !== "" && (
              <Button
                variant="contained"
                size="small"
                sx={githubButtonStyle2}
                onClick={() => {
                  window.open(githubUrl, "_blank");
                }}
              >
                <GitHubIcon />
                &nbsp; Github
              </Button>
            )}
            {githubUrl2 !== "" && (
              <Button
                variant="contained"
                size="small"
                sx={githubButtonStyle}
                onClick={() => {
                  window.open(githubUrl2, "_blank");
                }}
              >
                <GitHubIcon />
                &nbsp; Github
              </Button>
            )}
            {websiteUrl !== "" && (
              <Button
                variant="contained"
                size="small"
                sx={websiteButtonStyle}
                onClick={() => {
                  window.open(websiteUrl, "_blank");
                }}
              >
                <LanguageIcon />
                &nbsp; Website
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
