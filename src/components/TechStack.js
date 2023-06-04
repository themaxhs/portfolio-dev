import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import github from '../images/icons/github.svg';
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';
import javascript from '../images/icons/js.svg';
import react from '../images/icons/react.svg';
import redux from '../images/icons/redux.svg';
import tailwind from '../images/icons/tailwind.svg';
import linkedin from '../images/icons/bootstrap.svg';
import sass from '../images/icons/sass.svg';
import git from '../images/icons/git.svg';
import vscode from '../images/icons/vscode.svg';
import greensock from '../images/icons/greensock.svg';

const TechStackContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(6),
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '18px',
  marginBottom: theme.spacing(4),
}));

const ImageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: theme.spacing(4),
  margin: theme.spacing(4),
}));

const TechStack = () => {
  return (
    <TechStackContainer>
      <Title variant="h2">My Tech Stack</Title>
      <Subtitle variant="h4">Technologies I’ve been working with recently</Subtitle>
      <ImageGrid>
        <img src={github} alt="GitHub" />
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={javascript} alt="JavaScript" />
        <img src={react} alt="React" />
        <img src={redux} alt="Redux" />
        <img src={tailwind} alt="Tailwind CSS" />
        <img src={linkedin} alt="LinkedIn" />
        <img src={sass} alt="Sass" />
        <img src={git} alt="Git" />
        <img src={vscode} alt="VS Code" />
        <img src={greensock} alt="GreenSock" />
      </ImageGrid>
    </TechStackContainer>
  );
};

export default TechStack;
