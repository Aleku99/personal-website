import { Button, Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkillsItem from "../../components/SkillsItem";
import {
  cvButtonStyle,
  darkVspLinkStyle,
  githubButtonStyle,
  linkedInButtonStyle,
  profileButtonsWrapper,
  profileContentStyle,
  profilePictureStyle,
  vspLinkStyle,
} from "./styles";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Profile: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  const openCV = (): void => {
    window.open(
      "https://drive.google.com/file/d/1OX_LWVupCvU2wyg6zYBMO9k-vElzacu3/view?usp=sharing",
      "_blank"
    );
  };

  const openGitHub = (): void => {
    window.open("https://github.com/Aleku99", "_blank");
  };

  const openLinkedIn = (): void => {
    window.open(
      "https://www.linkedin.com/in/alexandru-loghin-449b70189/",
      "_blank"
    );
  };
  return (
    <Box display="flex" flexDirection={"column"}>
      <NavBar isProfilePage />
      <Box
        sx={
          darkMode
            ? { ...profileContentStyle, backgroundColor: "black" }
            : profileContentStyle
        }
      >
        <Box
          component="img"
          alt="logo"
          src="assets/profilePic.jpg"
          height={{ xs: "15rem", lg: "15rem" }}
          sx={profilePictureStyle}
        />

        <Typography
          variant="h4"
          align="center"
          sx={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          Hi! I'm Alex.
        </Typography>
        <Typography
          align="center"
          sx={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          I'm a Full Stack Web Developer who builds web applications that run
          across platforms and devices!
        </Typography>
        <Typography
          align="center"
          sx={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          Currently I'm working as a front-end developer&nbsp;
          <a
            href="https://victorysquarepartners.com/"
            target="_blank"
            rel="noreferrer"
            style={darkMode ? darkVspLinkStyle : vspLinkStyle}
          >
            @Victory Square Partners
          </a>
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          sx={profileButtonsWrapper}
        >
          <Button
            variant="contained"
            size="small"
            sx={cvButtonStyle}
            onClick={openCV}
          >
            <ContactPageIcon />
            &nbsp;Download my CV
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={githubButtonStyle}
            onClick={openGitHub}
          >
            <GitHubIcon />
            &nbsp;Check my Github
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={openLinkedIn}
            sx={linkedInButtonStyle}
          >
            <LinkedInIcon />
            &nbsp;Add me on LinkedIn
          </Button>
        </Box>
        <Divider flexItem light variant="middle" />
        <Typography
          variant="h4"
          align="center"
          sx={
            darkMode
              ? { color: "white", margin: "2rem auto" }
              : { color: "#004A55", margin: "2rem auto" }
          }
        >
          My skills
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent={{ xs: "flex-start", lg: "center" }}
          alignItems="stretch"
          spacing={{ xs: 2, lg: 0 }}
        >
          <Grid
            container
            item
            xs={6}
            lg={2}
            direction="row"
            justifyContent="center"
          >
            <Box>
              <Typography
                variant="h6"
                sx={
                  darkMode
                    ? { color: "white", margin: "2rem auto" }
                    : { color: "#004A55", marginBottom: "0.5rem" }
                }
              >
                Languages
              </Typography>
              <SkillsItem name="HTML" icon="assets/htmlLogo.png" />
              <SkillsItem name="CSS" icon="assets/cssLogo.png" />
              <SkillsItem name="Javascript" icon="assets/javascriptLogo.png" />
              <SkillsItem name="Typescript" icon="assets/typescriptLogo.png" />
              <SkillsItem name="SQL" icon="assets/sql.png" />
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={6}
            lg={2}
            direction="row"
            justifyContent="center"
          >
            <Box>
              <Typography
                variant="h6"
                sx={
                  darkMode
                    ? { color: "white", margin: "2rem auto" }
                    : { color: "#004A55", marginBottom: "0.5rem" }
                }
              >
                Frameworks
              </Typography>
              <SkillsItem name="React" icon="assets/reactLogo.png" />
              <SkillsItem name="NextJS" icon="assets/nextjs.png" />
              <SkillsItem name="Node" icon="assets/nodeLogo.png" />
              <SkillsItem name="Express" icon="assets/expressLogo.png" />
              <SkillsItem name="NestJS" icon="assets/nestjsLogo.png" />
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={6}
            lg={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ display: "inline-block" }}>
              <Typography
                variant="h6"
                sx={
                  darkMode
                    ? { color: "white", margin: "2rem auto" }
                    : { color: "#004A55", marginBottom: "0.5rem" }
                }
              >
                Tools
              </Typography>
              <SkillsItem name="VS Code" icon="assets/vscodeLogo.png" />
              <SkillsItem name="Git" icon="assets/git.png" />
              <SkillsItem name="Figma" icon="assets/figma.png" />
              <SkillsItem name="Netlify" icon="assets/netlifyLogo.png" />
              <SkillsItem name="Heroku" icon="assets/herokuLogo.png" />
              <SkillsItem name="DigitalOcean" icon="assets/digitalOcean.png" />
              <SkillsItem name="Vercel" icon="assets/vercel.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
