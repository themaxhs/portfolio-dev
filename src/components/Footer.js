import React from "react";
import { Typography, Box, IconButton, Link } from "@mui/material";
import { styled } from "@mui/system";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, Arial, sans-serif",
  color: "#666666",
  fontSize: "14px",
}));

const StyledLinkContainer = styled(Box)({
  marginTop: "10px",
});

const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: "Poppins, Arial, sans-serif",
  color: "#666666",
  fontSize: "14px",
  marginRight: "10px",
  textDecoration: "none",
}));

const StyledIconContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "10px", // Espacio debajo de los íconos
});

const ContactContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
});

const Footer = () => {
  return (
    <StyledBox>
      <ContactContainer>
        <Box>
          <StyledTypography>+52 998 126 8560</StyledTypography>
          <StyledTypography>themaxhs@gmail.com</StyledTypography>
        </Box>
        <StyledIconContainer>
          <IconButton size="small">
            <img src={linkedin} alt="Twitter" />
          </IconButton>
          <IconButton size="small">
            <img src={github} alt="GitHub" />
          </IconButton>
        </StyledIconContainer>
      </ContactContainer>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ddd",
          margin: "10px 0",
        }}
      />
      <StyledLinkContainer>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">About</StyledLink>
        <StyledLink href="#">Technologies</StyledLink>
        <StyledLink href="#">Projects</StyledLink>
        <StyledLink href="#">Contact</StyledLink>
      </StyledLinkContainer>
      <StyledTypography align="center">
        Copyright @ 2023 Alberto Hermosillo. All rights reserved.
      </StyledTypography>
    </StyledBox>
  );
};

export default Footer;
