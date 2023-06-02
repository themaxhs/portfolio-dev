import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  backgroundColor: "#1B1A17",
  padding: "20px",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "white",
  fontSize: "14px",
}));

const Footer = () => {
  return (
    <StyledBox>
      <StyledTypography>
      Copyright @ 2023 Alberto Hermosillo. All rights reserved.
      </StyledTypography>
    </StyledBox>
  );
};

export default Footer;
