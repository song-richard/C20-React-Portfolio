import { BrowserRouter, Routes, Route, Link }  from 'react-router-dom'

export default function Navbar() {
    return (
        <BrowserRouter>
            <Link to='/about'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </BrowserRouter>
    )
}

