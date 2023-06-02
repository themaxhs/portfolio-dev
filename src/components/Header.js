import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins/700.css';
import { Link as ScrollLink } from 'react-scroll';

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

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderAppBar>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
                albertoherm<span style={{ color: '#ECB365' }}>.</span>dev
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="body1" component="div">
                  <ScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ marginLeft: '24px', color: 'black', textDecoration: 'none' }}
                  >
                    Home
                  </ScrollLink>
                </Typography>
                <Typography variant="body1" component="div">
                  <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ marginLeft: '24px', color: 'black', textDecoration: 'none' }}
                  >
                    About
                  </ScrollLink>
                </Typography>
                <Typography variant="body1" component="div">
                  <ScrollLink
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ marginLeft: '24px', color: 'black', textDecoration: 'none' }}
                  >
                    Projects
                  </ScrollLink>
                </Typography>
                <Typography variant="body1" component="div">
                  <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ marginLeft: '24px', color: 'black', textDecoration: 'none' }}
                  >
                    Contact
                  </ScrollLink>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </HeaderAppBar>
    </ThemeProvider>
  );
};

export default Header;
