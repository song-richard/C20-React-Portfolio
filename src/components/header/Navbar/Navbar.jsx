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


import About from './NavbarItems/AboutMe/AboutMeCard';
import Portfolio from './NavbarItems/Portfolio';
import Contact from './NavbarItems/Contact';
import Resume from './NavbarItems/Resume';

export default function Navbar() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h6' color="inherit">
                        <Link to='/about'>About Me </Link>
                        <Link to='/portfolio'>Portfolio </Link>
                        <Link to='/contact'>Contact </Link>
                        <Link to='/resume'>Resume </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

