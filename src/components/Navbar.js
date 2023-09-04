import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
const pages = [
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/shah-masood/' },
  { icon: <MailOutlineIcon />, link: 'mailto:shahmasood.dev@gmail.com' },
  { icon: <GitHubIcon/>, link: 'https://github.com/ShahMasud' }, // An empty space
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For demonstration purposes, let's assume correct admin credentials are "admin" for both username and password
    if (username === 'admin' && password === 'admin') {
      alert('Admin logged in successfully!');
      setIsLoginFormOpen(false);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='app-bar' sx={{width:"80%", m:"0 auto", pt:2}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <h2 sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#e67e22',
              textDecoration: 'none',
            }}
          >
            Shah Masood
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                   component={page.link ? 'a' : 'div'} // Use 'a' for links, 'div' for empty space
                    href={page.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{color:"white"}}
                  >
                  {page.icon}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <h2 sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (
        <Button
          key={index}
          onClick={handleCloseNavMenu}
          sx={{
            mt: 1,
            color: 'white',
            display: 'block',
            cursor: page.link ? 'pointer' : 'default', // Show pointer cursor only if there's a link
          }}
          component={page.link ? 'a' : 'div'} // Use 'a' for links, 'div' for empty space
          href={page.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {page.icon}
        </Button>
      ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            <Tooltip title="Open form">
              <button className="login-button" onClick={() => setIsLoginFormOpen(true)}>
                Admin Login
              </button>

            </Tooltip>
          
            {isLoginFormOpen && (
        <div className="login-form-overlay">
          <div className="login-form-container">
          {/* <button style={{position:"absolute", right:"10px", top:"0"}} > */}
          <CloseIcon style={{position:"absolute", right:"10px", top:"10px", color:"#bd691f", cursor: "pointer", fontSize:"30px"}} onClick={() => setIsLoginFormOpen(false)} />
          {/* </button> */}
            <h2 style={{color:"black"}}>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
