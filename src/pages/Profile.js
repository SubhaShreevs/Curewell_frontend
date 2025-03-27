import React from "react";

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      <p style={styles.text}>
        Welcome to your profile page. Here, you can view and update your personal details, 
        check your medical history, and manage your appointments.
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

export default Profile;
