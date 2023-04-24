import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { footerWrapperStyling } from "./styles";

const Footer: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box
      sx={
        darkMode
          ? { ...footerWrapperStyling, backgroundColor: "#1a1a1d" }
          : footerWrapperStyling
      }
    >
      <Divider
        flexItem
        light
        variant="middle"
        sx={darkMode ? { color: "white" } : {}}
      />
      <Grid container justifyContent="flex-start" alignItems="center">
        <Grid
          container
          item
          xs={12}
          lg={1}
          justifyContent={{ xs: "center", lg: "flex-start" }}
          alignItems="center"
        >
          <Link to="/">
            <Box
              component="img"
              height="8rem"
              alt="logo"
              src={darkMode ? "assets/darkLogo.png" : "assets/logo.png"}
            />
          </Link>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
          lg={10}
          marginBottom={{ xs: "1rem", lg: 0 }}
        >
          <Typography
            align="center"
            sx={darkMode ? { color: "white" } : { color: "#004A55" }}
          >
            Copyright &#169; 2023 Alexandru Loghin
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
