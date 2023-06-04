import React from "react";
import { Typography, Box, Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import projects from "../utils/projects";
import linkgithub from '../images/icons/linkgithub.svg';
import linksource from '../images/icons/linksource.svg';

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  maxWidth: "900px",
  margin: "0 auto", // Centrar horizontalmente
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins, Arial, sans-serif",
  color: "black",
  marginBottom: theme.spacing(2),
}));

const StyledCard = styled(Card)({
  maxWidth: 300,
  textAlign: "center",
  borderRadius: 20,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
});

const StyledCardContent = styled(CardContent)({
  padding: "16px",
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

const Title = styled(Typography)({
  fontWeight: "500",
  marginBottom: "8px",
});

const Subtitle = styled(Typography)({
  marginBottom: "8px",
  fontWeight: "300",
});

const TechStack = styled(Typography)({
  marginBottom: "8px",
  fontWeight: "400",
});

const TechStackContent = styled(Typography)({
  marginBottom: "8px",
  fontWeight: "300",
});

const LivePreviewButton = styled(IconButton)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "underline",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: "400",
});

const ViewCodeButton = styled(IconButton)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "underline",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: "400",
});

const Projects = () => {
  return (
    <StyledBox>
      <StyledTypography variant="h4" fontFamily="Poppins, Arial, sans-serif" fontWeight="500">
        Projects
      </StyledTypography>
      <StyledTypography variant="h6" fontFamily="Poppins, Arial, sans-serif" fontWeight="300">
        Things I've built so far
      </StyledTypography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={4}>
            <StyledCard>
              <StyledCardMedia image={project.image} title={project.title} />
              <StyledCardContent>
                <Title variant="h6" fontFamily="Poppins, Arial, sans-serif" fontWeight="500">
                  {project.title}
                </Title>
                <Subtitle variant="subtitle1" fontFamily="Poppins, Arial, sans-serif" fontWeight="300">
                  {project.subtitle}
                </Subtitle>
                <TechStack variant="body2" fontFamily="Poppins, Arial, sans-serif" fontWeight="400">
                  Tech stack:
                </TechStack>
                <TechStackContent
                  variant="body2"
                  fontFamily="Poppins, Arial, sans-serif"
                  fontWeight="300"
                >
                  {project.stack}
                </TechStackContent>
                <Box display="flex" justifyContent="space-between">
                  <LivePreviewButton
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linksource} alt="Twitter" />
                    Live Preview
                  </LivePreviewButton>
                  <ViewCodeButton
                    size="small"
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkgithub} alt="Twitter" />
                    View Code
                  </ViewCodeButton>
                </Box>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default Projects;
