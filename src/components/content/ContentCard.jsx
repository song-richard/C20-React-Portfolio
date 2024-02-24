import { Routes, Route } from 'react-router-dom';

import AboutMe from '../header/Navbar/NavbarItems/AboutMe';
import Portfolio from '../header/Navbar/NavbarItems/Portfolio';
import Contact from '../header/Navbar/NavbarItems/Contact';
import Resume from '../header/Navbar/NavbarItems/Resume';

export default function ContentCard() {
    return (
        <>
            <h1>CONTENT CARD SECTION BELOW</h1>
            <Routes>
                <Route path='/about' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/resume' element={<Resume />}/>
            </Routes>
        </>
    )
}