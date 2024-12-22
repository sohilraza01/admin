import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Status.css";

const Pending = () => {
  const [pendingDonations, setPendingDonations] = useState([]);

  useEffect(() => {
    const fetchPendingDonations = async () => {
      try {
        const response = await fetch("http://localhost:8800/donations");
        if (!response.ok) {
          throw new Error("Failed to fetch pending donations");
        }

        const data = await response.json();
        const pending = data.filter((donation) => donation.status === "Pending"); // Filter for pending status
        setPendingDonations(pending);
      } catch (error) {
        console.error("Error fetching pending donations:", error);
      }
    };

    fetchPendingDonations();
  }, []); // Fetch data on mount

  return (
    <div className="status">
      <Sidebar />
      <div className="pending">
        <h2>Pending Donations</h2>
        {pendingDonations.length > 0 ? (
          <table className="pending-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Donor Name</th>
                <th>Food Type</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {pendingDonations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation._id}</td> {/* Display the ID */}
                  <td>{donation.donorName}</td>
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
