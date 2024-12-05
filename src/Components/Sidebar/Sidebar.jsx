import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return ( 
        <div className='sidebar'>
            <div className="sidebar-container">
                
                <p><Link className='sidebar-links' to='/dashboard'>Dashboard</Link></p>
                <p><Link className='sidebar-links' to='/pending'>Pending Donation</Link></p>
                <p><Link className='sidebar-links' to='/previous'>Previous Donation</Link></p>
                
                <span className='sidebar-logout'>Logout</span>
            </div>
        </div>
     );
}
 
export default Sidebar;