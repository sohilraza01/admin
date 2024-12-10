import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Dashboard.css';

const Dashboard = () => {
  const [adminCount, setAdminCount] = useState(0);
  const [agentCount, setAgentCount] = useState(0);
  const [notCompletedCount, setNotCompletedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);


  

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch("http://localhost:8800/dashboard");
        const data = await response.json();
        setAdminCount(data.adminCount);
        setAgentCount(data.ngoCount);
        setNotCompletedCount(data.notCompletedCount);
        setCompletedCount(data.completedCount);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return ( 
    <div className="sidebar-link">
      <Sidebar/> 
      <div className="sidebar-main">
        <div className="sidebar-admin">
          <p className="count">Donor <span>{adminCount}</span></p>
        </div>
        <div className="sidebar-agent">
          <p className="count">NGO <span>{agentCount}</span></p>
        </div>
        <div className="sidebar-not-complete">
          <p className="count">Donation not completed yet <span>{notCompletedCount}</span></p>
        </div>
        <div className="sidebar-completed">
          <p className="count">Completed <span>{completedCount}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
