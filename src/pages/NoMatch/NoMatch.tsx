import { Box, Typography } from "@mui/material";
import NavBar from "../../components/Navbar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const NoMatch: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box display="flex" flexDirection={"column"}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "90vh",
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <ErrorOutlineIcon
          fontSize="large"
          sx={darkMode ? { color: "white" } : { color: "#004A55" }}
        />
        <Typography
          variant="h3"
          style={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          Error 404
        </Typography>
        <Typography
          variant="h6"
          style={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          Lost?
        </Typography>
        <Typography
          variant="h6"
          style={darkMode ? { color: "white" } : { color: "#004A55" }}
        >
          There's no place like{" "}
          <a
            href="/"
            style={
              darkMode
                ? { textDecoration: "underline", color: "white" }
                : { textDecoration: "underline", color: "#004A55" }
            }
          >
            home
          </a>
          .
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default NoMatch;
