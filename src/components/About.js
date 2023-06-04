import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import experienceData from "../utils/experience";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  minHeight: "100vh",
  backgroundColor: "#fafafa",
  padding: "2rem",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontFamily: "Poppins, Arial, sans-serif",
  color: "black",
  fontSize: "14px",
}));

const WorkExperienceCard = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "705px",
  height: "75px",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "1rem",
  fontFamily: "Poppins, Arial, sans-serif",  // usa la fuente Poppins
});

const CardColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const CardColumnRight = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

const CardRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const About = () => {
  return (
    <StyledBox id="about">
      <StyledTypography variant="h4">
        ABOUT ME
      </StyledTypography>
      <StyledTypography variant="body2">
        Get to know me! I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
      </StyledTypography>
      <StyledTypography variant="body2">
        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
      </StyledTypography>
      <StyledTypography variant="body2">
        I'm open to Job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.
      </StyledTypography>
      <StyledTypography variant="body2" className="section-heading">
        <strong>CONTACT</strong>
      </StyledTypography>
      <StyledTypography variant="body2" className="section-heading">
        Work Experience
      </StyledTypography>
      {experienceData.map((item) => (
        <WorkExperienceCard key={item.id}>
          <CardColumn>
            <Typography variant="h5">{item.title}</Typography>
            <CardRow>
              <Typography variant="body2">{item.enterprise}</Typography>
              <Typography variant="body2">{item.city}</Typography>
            </CardRow>
          </CardColumn>
          <CardColumnRight>
            <Typography variant="body2" sx={{ bgcolor: "#D7FFE0", color: "#018C0F", borderRadius: "100px", textAlign: "center", width: "84px", height: "24px" }}>
              {item.type}
            </Typography>
            <Typography variant="body2">
              {item.date1} - {item.date2}
            </Typography>
          </CardColumnRight>
        </WorkExperienceCard>
      ))}
      <StyledTypography variant="body2" className="section-heading">
        Education
      </StyledTypography>
      {/* Render education items here */}
    </StyledBox>
  );
};

export default About;
