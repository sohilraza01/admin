import './Dashboard.css';

const Dashboard = () => {


  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      // total: data?.totalTasks || 0,
      // icon: <FaNewspaper />,
      bg: "bg-[#1d4ed8]",
    },
    {
      _id: "2",
      label: "COMPLTED TASK",
      // total: totals["completed"] || 0,
      // icon: <MdAdminPanelSettings />,
      bg: "bg-[#0f766e]",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS ",
      // total: totals["in progress"] || 0,
      // icon: <LuClipboardEdit />,
      bg: "bg-[#f59e0b]",
    },
    {
      _id: "4",
      label: "TODOS",
      // total: totals["todo"],
      // icon: <FaArrowsToDot />,
      bg: "bg-[#be185d]" || 0,
    },
  ];

  const Card = ({ label, count }) => {
    return (
      <div>
        <div >
          <p>{label}</p>
          <span>{count}</span>

        </div>

       
      </div>
    );
  };


  return (
    
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Pending Donation</li>
          <li>Previous Donation</li>
          <li>Agents</li>
          <li>My Profile</li>
          <li>Logout</li>
        </ul>
      </div>
      <div classNamee='h-full py-4'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {stats.map(({ label, total }, index) => (
          <Card key={index} label={label}  />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
