import { 
    BrowserRouter,
    Routes,
    Route,
    Link
}
from 'react-router-dom';

import About from './NavbarItems/About';
import Portfolio from './NavbarItems/Portfolio';
import Contact from './NavbarItems/Contact';
import Resume from './NavbarItems/Resume';

export default function Navbar() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/about'>About Me</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/resume'>Resume</Link>
            </nav>

            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/resume' element={<Resume />}/>
            </Routes>
        </BrowserRouter>
    );
};

