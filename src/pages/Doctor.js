import React from "react";

const doctors = [
  { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", time: "10:00 AM - 2:00 PM" },
  { id: 2, name: "Dr. Emily Johnson", specialization: "Dermatologist", time: "9:00 AM - 1:00 PM" },
  { id: 3, name: "Dr. Michael Brown", specialization: "Orthopedic", time: "2:00 PM - 6:00 PM" },
  { id: 4, name: "Dr. Sarah Lee", specialization: "Neurologist", time: "8:00 AM - 12:00 PM" },
  { id: 5, name: "Dr. David Miller", specialization: "Pediatrician", time: "1:00 PM - 5:00 PM" }
];

const Doctor = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Doctors</h2>
      <p style={styles.description}>Find the best specialists available at our hospital.</p>

      <div style={styles.grid}>
        {doctors.map((doctor) => (
          <div key={doctor.id} style={styles.card}>
            <h3 style={styles.name}>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Available Time:</strong> {doctor.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "left"
  },
  name: {
    color: "#007BFF"
  }
};

export default Doctor;
