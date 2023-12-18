import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { DarkModeContext } from "../../context/darkModeContext";
import { contactContentStyle, contactIconStyle } from "./styles";

const Contact: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box display="flex" flexDirection={"column"}>
      <NavBar isContactPage />
      <Box
        sx={
          darkMode
            ? { ...contactContentStyle, backgroundColor: "black" }
            : contactContentStyle
        }
      >
        <Typography
          variant="h4"
          sx={
            darkMode
              ? {
                  color: "white",
                }
              : {
                  color: "#004A55",
                }
          }
        >
          Get in touch for work collaborations{" "}
          <img
            style={contactIconStyle}
            src="assets/helloHand.png"
            alt="hello icon"
          ></img>
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
