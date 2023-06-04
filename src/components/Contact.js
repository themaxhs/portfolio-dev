import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#FFFFFF", // Cambié el color de fondo a blanco
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "#000000", // Cambié el color de texto a negro
  "& h6": {
    fontSize: "36px",
    fontWeight: "bold",
    margin: 0,
  },
  "& p": {
    fontSize: "1.2rem",
    fontFamily: "Poppins Regular, Arial, sans-serif",
    textJustify: "inter-word",
    margin: "1rem 0 0 0",
  },
}));

const Contact = () => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">
        CONTACT
      </StyledTypography>
      <StyledTypography variant="body1">
        Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
      </StyledTypography>
    </StyledBox>
  );
};

export default Contact;
