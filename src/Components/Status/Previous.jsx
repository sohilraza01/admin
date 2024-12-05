import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Status.css";

const Previous = () => {
  const [donationHistory, setDonationHistory] = useState([]);

  // Simulate fetching donation history
  useEffect(() => {
    const fetchHistory = async () => {
      // Replace this with an API call to your backend
      const history = [
        { donor: "Sohil", foodType: "Grains", quantity: "50kg", status: "Delivered", date: "2024-12-01" },
        { donor: "Shivam", foodType: "Vegetables", quantity: "20kg", status: "Delivered", date: "2024-11-25" },
        { donor: "Sujal", foodType: "Fruits", quantity: "10kg", status: "Delivered", date: "2024-11-20" },
        { donor: "Shiv Kaushik", foodType: "Rice", quantity: "10kg", status: "Delivered", date: "2024-11-20" },
      ];
      setDonationHistory(history);
    };

    fetchHistory();
  }, []);

  return (
    <div className="previous">
      <Sidebar />
      <div className="previous-container">
        <h2>Previous Donations</h2>
        {donationHistory.length > 0 ? (
          <table className="donation-table">
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
              {donationHistory.map((donation, index) => (
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
          <p>No donation history available.</p>
        )}
      </div>
    </div>
  );
};

export default Previous;
