import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const pages = [
  { name: 'Home', id: 'header' },
  { name: 'About', id: 'about' },
  { name: 'Media', id: 'media' },
  { name: 'Live', id: 'live' },
  { name: 'Contact', id: 'contact' },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    handleCloseNavMenu();
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: '#ffffff00',
        backdropFilter: 'blur(16px)',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // background: '#ffffff00',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))',
          pointerEvents: 'none',
        }, 
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' }  }}>
          <IconButton style={{color: "#feeaea"}} onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                '& .MuiPaper-root': {
                // backgroundColor: '#1F090399',
                backdropFilter: 'blur(8px)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))',
                color: '#feeaea',
                },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.id} onClick={() => handleScrollTo(page.id)}>
                <Typography>{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page.id} color="inherit" style={{color: "#feeaea"}} onClick={() => handleScrollTo(page.id)}>
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
