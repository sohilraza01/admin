import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav>
            
            <div className="nav-left">
                <h1><Link to='/'>Home</Link></h1>
            </div>
            <ul className="nav-right">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/mission">Our Mission</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>

        </nav>
     );
}
 
export default Navbar;