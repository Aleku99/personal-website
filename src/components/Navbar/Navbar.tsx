import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  darkNavbarStyle,
  darkNavbarTextStyle,
  darkSwitchStyle,
  navbarLinkStyle,
  navbarStyle,
  navbarTextStyle,
  switchIconStyle,
  switchStyle,
} from "./styles";
import { useContext, useState } from "react";
import { Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../../context/darkModeContext";

interface Props {
  isProfilePage?: boolean;
  isExperiencePage?: boolean;
  isProjectsPage?: boolean;
}

const Navbar: React.FC<Props> = ({
  isProfilePage,
  isExperiencePage,
  isProjectsPage,
}) => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleNavbarMenu = (): void => {
    setIsNavbarMenuOpen((prevIsNavbarMenuOpen) => !prevIsNavbarMenuOpen);
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={darkMode ? darkNavbarStyle : navbarStyle}
    >
      <Grid
        container
        item
        xs={6}
        lg={1}
        direction="row"
        justifyContent={{
          xs: "center",
          lg: "flex-start",
        }}
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
        xs={6}
        display={{ lg: "none" }}
      >
        <IconButton size="large" onClick={toggleNavbarMenu}>
          <MenuIcon sx={darkMode ? { color: "#950740" } : {}} />
        </IconButton>
      </Grid>
      <Grid
        container
        item
        direction={{ xs: "column", lg: "row" }}
        xs={12}
        lg={10}
        justifyContent="center"
        alignItems="center"
        display={isNavbarMenuOpen ? "flex" : { xs: "none", lg: "flex" }}
        marginBottom={{ xs: "2rem", lg: "0" }}
      >
        <Grid item>
          <Link to="/" style={navbarLinkStyle}>
            <Typography
              variant="h5"
              component="div"
              sx={
                darkMode
                  ? {
                      ...darkNavbarTextStyle,
                      color: isProfilePage ? "#950740" : "white",
                    }
                  : {
                      ...navbarTextStyle,
                      color: isProfilePage ? "#004A55" : "white",
                    }
              }
            >
              Profile
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link to="/experience" style={navbarLinkStyle}>
            <Typography
              variant="h5"
              component="div"
              sx={
                darkMode
                  ? {
                      ...darkNavbarTextStyle,
                      color: isExperiencePage ? "#950740" : "white",
                    }
                  : {
                      ...navbarTextStyle,
                      color: isExperiencePage ? "#004A55" : "white",
                    }
              }
            >
              Experience
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link to="/projects" style={navbarLinkStyle}>
            <Typography
              variant="h5"
              component="div"
              sx={
                darkMode
                  ? {
                      ...darkNavbarTextStyle,
                      color: isProjectsPage ? "#950740" : "white",
                    }
                  : {
                      ...navbarTextStyle,
                      color: isProjectsPage ? "#004A55" : "white",
                    }
              }
            >
              Projects
            </Typography>
          </Link>
        </Grid>
        <Grid
          container
          item
          lg={1}
          display={{ xs: "flex", lg: "none" }}
          justifyContent="center"
          alignItems="center"
          marginTop="1rem"
        >
          <LightModeIcon sx={switchIconStyle} />
          <Switch
            checked={darkMode}
            size="medium"
            sx={darkMode ? darkSwitchStyle : switchStyle}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              localStorage.setItem("darkMode", event.target.checked.toString());
              setDarkMode(event.target.checked);
            }}
          />
          <DarkModeIcon sx={switchIconStyle} />
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={1}
        display={{ xs: "none", lg: "flex" }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <LightModeIcon sx={switchIconStyle} />
        <Switch
          size="medium"
          checked={darkMode}
          sx={darkMode ? darkSwitchStyle : switchStyle}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            localStorage.setItem("darkMode", event.target.checked.toString());
            setDarkMode(event.target.checked);
          }}
        />
        <DarkModeIcon sx={switchIconStyle} />
      </Grid>
    </Grid>
  );
};
export default Navbar;
