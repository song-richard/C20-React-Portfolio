import { 
    BrowserRouter,
    Routes,
    Route,
    Link
}
from 'react-router-dom';

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


import About from './NavbarItems/AboutMe';
import Portfolio from './NavbarItems/Portfolio';
import Contact from './NavbarItems/Contact';
import Resume from './NavbarItems/Resume';

export default function Navbar() {
    return (
        <>
            <AppBar position="static" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6' color="inherit">
                    <Link to='/about' style={{ marginRight: '10px' }}>About Me</Link>
                    <Link to='/portfolio' style={{ marginRight: '10px' }}>Portfolio</Link>
                    <Link to='/contact' style={{ marginRight: '10px' }}>Contact</Link>
                    <Link to='/resume'>Resume</Link>
                </Typography>
            </AppBar>
        </>
    );
};

