import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Switch } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Icon1 from '../images/linkedin.svg';
import Icon2 from '../images/twitter.svg';
import Icon3 from '../images/github.svg';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: 14,
  },
});

const HeaderAppBar = styled(AppBar)({
  backgroundColor: 'white',
  position: 'fixed',
  top: 0,
  zIndex: 100,
});

const Header = ({ darkMode, onToggleDarkMode }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderAppBar>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'normal', color: '#666666' }}>
              albertoherm<span style={{ color: '#ECB365' }}>.</span>dev
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="body1" component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '32px', color: '#666666' }}>
                <a href="#home" style={{ textDecoration: 'none', color: '#666666', marginRight: '32px' }}>Home</a>
              </Typography>
              <Typography variant="body1" component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '32px', color: '#666666' }}>
                <a href="#about" style={{ textDecoration: 'none', color: '#666666', marginRight: '32px' }}>About</a>
              </Typography>
              <Typography variant="body1" component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '32px', color: '#666666' }}>
                <a href="#techstack" style={{ textDecoration: 'none', color: '#666666', marginRight: '32px' }}>Tech Stack</a>
              </Typography>
              <Typography variant="body1" component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '32px', color: '#666666' }}>
                <a href="#projects" style={{ textDecoration: 'none', color: '#666666', marginRight: '32px' }}>Projects</a>
              </Typography>
              <Typography variant="body1" component="div" sx={{ display: { xs: 'none', sm: 'block' }, color: '#666666' }}>
                <a href="#contact" style={{ textDecoration: 'none', color: '#666666' }}>Contact</a>
              </Typography>
              <a href="https://github.com/themaxhs" target="_blank" rel="noopener noreferrer">
                <img src={Icon1} alt="LinkedIn" style={{ marginLeft: '32px' }} />
              </a>
              <a href="https://github.com/themaxhs" target="_blank" rel="noopener noreferrer">
                <img src={Icon2} alt="Twitter" style={{ marginLeft: '32px' }} />
              </a>
              <a href="https://github.com/themaxhs" target="_blank" rel="noopener noreferrer">
                <img src={Icon3} alt="GitHub" style={{ marginLeft: '32px' }} />
              </a>
              <Box sx={{ marginLeft: '32px' }}>
                <Switch checked={darkMode} onChange={onToggleDarkMode} color="primary" />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </HeaderAppBar>
    </ThemeProvider>
  );
};

export default Header;
