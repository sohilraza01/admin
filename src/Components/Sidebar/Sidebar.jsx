import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';
const Sidebar = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [role,setRole] = useState('');
    const navigate = useNavigate();
      // Logout Handler
    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setRole('');
        navigate('/');
    };
    return ( 
        <div className='sidebar'>
            <div className="sidebar-container">
                
                <p><Link className='sidebar-links' to='/dashboard'>Dashboard</Link></p>
                <p><Link className='sidebar-links' to='/pending'>Pending Donation</Link></p>
                <p><Link className='sidebar-links' to='/previous'>Previous Donation</Link></p>
                
                <span className='sidebar-logout' onClick={handleLogout}>Logout</span>
            </div>
        </div>
     );
}
 
export default Sidebar;