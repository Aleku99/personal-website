import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { DarkModeContext } from "../../context/darkModeContext";
import {
  contactContentStyle,
  contactIconStyle,
  submitButtonDarkModeStyle,
  submitButtonStyle,
} from "./styles";
import "./styles.css";

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
          align="center"
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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="2rem"
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap="2rem"
            flexWrap="wrap"
          >
            <input
              className={darkMode ? "inputDarkMode" : "inputLightMode"}
              id="name"
              placeholder="Name"
            />
            <input
              className={darkMode ? "inputDarkMode" : "inputLightMode"}
              id="email"
              placeholder="E-mail address"
            />
          </Box>
          <textarea
            className={darkMode ? "textareaDarkMode" : "textareaLightMode"}
            id="message"
            placeholder="Message"
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={darkMode ? submitButtonDarkModeStyle : submitButtonStyle}
        >
          Submit
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
