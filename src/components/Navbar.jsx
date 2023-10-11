import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> | 
            <Link to="/experience">Experience</Link> |
            <Link to="/skills">Skills</Link> |
            <Link to="/interest">Interest</Link> |
            <Link to="/awards">Awards</Link> 
        </nav>
    );
        
}

export default Navbar;