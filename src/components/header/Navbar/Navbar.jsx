import { 
    BrowserRouter,
    Routes,
    Route,
    Link
}
from 'react-router-dom';

//MUI IMPORTS
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
            <nav className="bg-gray-900 py-4">
                <div className="max-w-4xl mx-auto flex justify-center">
                    <Link to='/about' className="text-white hover:text-gray-300 px-4">About Me</Link>
                    <Link to='/portfolio' className="text-white hover:text-gray-300 px-4">Portfolio</Link>
                    <Link to='/contact' className="text-white hover:text-gray-300 px-4">Contact</Link>
                    <Link to='/resume' className="text-white hover:text-gray-300 px-4">Resume</Link>
                </div>
            </nav>
        </>
    );
};

