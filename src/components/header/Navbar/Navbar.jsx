import { 
    BrowserRouter,
    Routes,
    Route,
    Link
}
from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';

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
                <Route path='/contact'/>
                <Route path='/resume'/>
            </Routes>
        </BrowserRouter>
    );
};

