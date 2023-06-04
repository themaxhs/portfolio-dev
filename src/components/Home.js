import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import PDF from "../assets/HESA CV 2024.pdf";

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "black",
  "& h6": {
    fontSize: "36px",
    fontWeight: "bold",
    margin: 0,
  },
  "& .name": {
    color: "#ECB365",
    margin: "0",
  },
  "& .extraordinaire": {
    margin: "0",
  },
  "& p": {
    fontSize: "1.2rem",
    fontFamily: "Poppins Regular, Arial, sans-serif",
    textJustify: "inter-word",
    margin: "1rem 0 0 0",
  },
  "& > *:not(:last-child)": {
    marginBottom: "8px",
  },
}));

const StyledButtonContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ECB365",
  color: "white",
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: "#CFAE56",
  },
  marginTop: "20px",
}));

const handleDownloadCV = () => {
  // Crear un enlace temporal
  const link = document.createElement("a");
  link.href = PDF;
  link.target = "_blank";
  link.download = "HESA CV 2023.pdf";
  link.click();
};

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <StyledTypography variant="body1" component="div">
            <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
              Hey👋, I'm <span className="name">Alberto Hermosillo</span>
            </Typography>
            <Typography variant="body2">
              A Frontend focused Web Developer building the Frontend of Websites and
              Web Applications that leads to the success of the overall product
            </Typography>
          </StyledTypography>
        </Grid>
        <Grid item xs={12}>
          <StyledButtonContainer>
            <StyledButton variant="contained" size="large" onClick={handleDownloadCV}>
              Download CV
            </StyledButton>
          </StyledButtonContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
