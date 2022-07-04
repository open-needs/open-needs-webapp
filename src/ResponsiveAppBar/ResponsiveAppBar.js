import * as React from 'react';

import { useIsAuthenticated, useSignOut } from 'react-auth-kit';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ColorModeSwitch from './ColorModeSwitch';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OpenNeedsIcon from './OpenNeedsIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

// map page names in the title bar to React Router target names
const pages = { Query: '/QueryNeeds' };
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

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

  const handleRightMenuClick = (event) => {
    if (event.target.textContent === 'Profile') {
      console.log('Clicked on Profile');
    }
    if (event.target.textContent === 'Logout') {
      signOut();
    }
    handleCloseUserMenu();
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar variant="dense" disableGutters>
          <OpenNeedsIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              height: 40
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Open-Needs
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
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {Object.entries(pages).map(([text, target]) => (
                <MenuItem key={text} component={Link} to={target} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <OpenNeedsIcon sx={{ display: { xs: 'flex', md: 'none' }, height: 30, width: 30 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Open-Needs
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(pages).map(([page, target]) => (
              <Button
                key={page}
                component={Link}
                to={target}
                // onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton component={Link} to="/Settings">
              <SettingsIcon sx={{ color: grey[50] }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ColorModeSwitch />
          </Box>
          <Box sx={{ ml: 2, flexGrow: 0 }}>
            {isAuthenticated() ? (
              <>
                <IconButton onClick={handleOpenUserMenu} size="small" sx={{ p: 0 }}>
                  <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleRightMenuClick}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                component={Link}
                to="/Auth"
              >
                Sign in
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
