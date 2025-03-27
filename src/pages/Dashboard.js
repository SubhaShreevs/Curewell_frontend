import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <p style={styles.text}>
        Welcome to your dashboard. Here, you can manage your appointments, view doctor schedules, 
        and access medical records all in one place.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "auto",
  },
};

export default Dashboard;
