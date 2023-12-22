import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
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
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const validateInputs = (): boolean => {
    // empty fields checks
    if (name.trim() === "") {
      toast.error("Numele trebuie introdus inainte de a ne trmite un mesaj");
      return false;
    }
    if (email.trim() === "") {
      toast.error(
        "Email-ul dumneavoastra trebuie introdus inainte de a ne trmite un mesaj"
      );
      return false;
    }

    //message minimum length check
    if (message.trim() === "" || message.length < 30) {
      toast.error("Mesajul trebuie sa aibe lungimea minima de 30 de caractere");
      return false;
    }

    // email check
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
      toast.error("Email-ul introdus este invalid");
      return false;
    }

    return true;
  };

  const sendEmail = () => {
    const isMailValid = validateInputs();
    if (isMailValid) {
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              toast.success("Mesajul a fost trimis cu succes");
              setEmail("");
              setMessage("");
              setName("");
            } else {
              toast.error("Eroare trimitere mesaj");
            }
          },
          () => {
            toast.error("Eroare trimitere mesaj");
          }
        );
    }
  };

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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className={darkMode ? "inputDarkMode" : "inputLightMode"}
              id="email"
              placeholder="E-mail address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Box>
          <textarea
            className={darkMode ? "textareaDarkMode" : "textareaLightMode"}
            id="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={darkMode ? submitButtonDarkModeStyle : submitButtonStyle}
          onClick={sendEmail}
        >
          Submit
        </Button>
      </Box>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{ style: { fontSize: "1.2rem", textAlign: "center" } }}
      />
      <Footer />
    </Box>
  );
};

export default Contact;
