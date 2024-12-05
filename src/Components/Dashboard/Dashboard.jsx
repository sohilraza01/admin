import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Dashboard.css';
const Dashboard = () => {
  const [adminCount, setAdminCount] = useState(0)
  const [agentCount, setAgentCount] = useState(0)
  return ( 
    <div className="sidebar-link">
    <Sidebar/> 
    <div className="sidebar-main">
      <div className="sidebar-admin">
        <p className="count">Admin <span>{adminCount}</span></p>
      </div>
      <div className="sidebar-agent">
        <p className="count">Agent <span>{agentCount}</span></p>
      </div><div className="sidebar-not-complete">
        <p className="count">Donation not completed yet <span>{adminCount}</span></p>
      </div>
      <div className="sidebar-completed">
        <p className="count">Completed <span>{agentCount}</span></p>
      </div>
    </div>
    </div>
   );
}
 
export default Dashboard;