import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { theme } from '../../utils';

const settings = ['Profile', 'Settings', 'Logout'];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.light }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Icon Left */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: theme.palette.primary.dark,
                textDecoration: 'none',
                alignItems: 'center'
              }}
            >
              <p style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light, paddingLeft: 10, paddingRight: 1, marginRight: 10 }}>News </p> Portal
            </Typography>
          </Box>

          {/* Icon Right */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search News">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // color="inherit"
                // onClick={handleOpenUserMenu}
                sx={{ p: 0, mr: 5, color: theme.palette.primary.dark }}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // color="inherit"
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: theme.palette.primary.dark }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;