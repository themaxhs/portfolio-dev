import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "white",
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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ECB365",
  color: "white",
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "1.5rem",
  "&:hover": {
    backgroundColor: "#CFAE56",
  },
  marginTop: "20px", // Ajusta la distancia entre el texto y el botón aquí
}));

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B1A17",
        padding: "40px",
        height: "100vh", // Ajusta la altura del contenedor aquí
      }}
    >
      <StyledTypography variant="body1" component="div">
        <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
          Hey👋, I'm <span className="name">Alberto Hermosillo</span>
        </Typography>
        <Typography variant="body2">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </Typography>
        <StyledButton variant="contained" size="large">
          Projects
        </StyledButton>
      </StyledTypography>
    </Box>
  );
};

export default Home;
