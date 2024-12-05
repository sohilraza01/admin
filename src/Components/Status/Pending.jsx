import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Status.css';

const Pending = () => {
  const [pendingDonations, setPendingDonations] = useState([]);

  useEffect(() => {
    // Simulate fetching pending donations
    const fetchPendingDonations = async () => {
      const data = [
        { donor: "Sohil", foodType: "Grains", quantity: "50kg", status: "Pending", date: "2024-12-04" },
        { donor: "Shivam", foodType: "Vegetables", quantity: "20kg", status: "Pending", date: "2024-12-03" },
        { donor: "Shiv", foodType: "Fruits", quantity: "20kg", status: "Pending", date: "2024-12-03" },
        { donor: "Sujal", foodType: "Rice", quantity: "20kg", status: "Pending", date: "2024-12-03" },
      ];
      setPendingDonations(data);
    };

    fetchPendingDonations();
  }, []);

  return (
    <div className="status">
      <Sidebar />
      <div className="pending">
        <h2>Pending Donations</h2>
        {pendingDonations.length > 0 ? (
          <table className="pending-data">
            <thead>
              <tr>
                <th>Donor Name</th>
                <th>Food Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {pendingDonations.map((donation, index) => (
                <tr key={index}>
                  <td>{donation.donor}</td>
                  <td>{donation.foodType}</td>
                  <td>{donation.quantity}</td>
                  <td>{donation.status}</td>
                  <td>{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No pending donations available.</p>
        )}
      </div>
    </div>
  );
};

export default Pending;
