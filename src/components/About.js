import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#1B1A17",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "white",
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

const About = () => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">
        ABOUT ME
      </StyledTypography>
      <StyledTypography variant="body1">
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </StyledTypography>
    </StyledBox>
  );
};

export default About;
