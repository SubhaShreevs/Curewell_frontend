import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to Cure-Well Hospital</h1>
        <p style={styles.heroSubtitle}>
          Compassionate Care, Advanced Technology, and Expert Medical Staff.
        </p>
      </div>

      {/* Grid Layout for Sections */}
      <div style={styles.gridContainer}>
        {/* About Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.text}>
            Cure-Well Hospital is a leading multi-specialty hospital dedicated to 
            providing world-class healthcare with advanced technology, expert doctors, 
            and a compassionate approach. 
          </p>
        </div>

        {/* Specialties Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Specialties</h2>
          <ul style={styles.list}>
            <li>🏥 Cardiology - Advanced heart care</li>
            <li>🧠 Neurology - Brain & nervous system treatments</li>
            <li>🦴 Orthopedics - Bone & sports injury care</li>
            <li>🎗️ Oncology - Cancer treatment & chemotherapy</li>
          </ul>
        </div>

        {/* Facilities Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>State-of-the-Art Facilities</h2>
          <ul style={styles.list}>
            <li>✅ 24/7 Emergency & Intensive Care Unit</li>
            <li>✅ Advanced MRI, CT Scan, and X-Ray</li>
            <li>✅ Fully Equipped Operation Theaters</li>
            <li>✅ Dedicated Pediatric & Maternity Ward</li>
          </ul>
        </div>

        {/* Patient-Centric Care */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Patient-Centric Approach</h2>
          <p style={styles.text}>
            At Cure-Well, we put our patients first. From evidence-based treatments 
            to 24/7 support, we ensure a smooth and comfortable healing journey.
          </p>
        </div>

        {/* Testimonials */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
          <blockquote style={styles.quote}>
            "The doctors at Cure-Well Hospital are lifesavers! The facilities 
            are top-notch, and the staff is incredibly caring."
          </blockquote>
          <blockquote style={styles.quote}>
            "I received world-class treatment at Cure-Well. The technology and 
            expertise made my recovery faster than I expected."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

// Modern UI Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    maxWidth: "1200px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  heroSection: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "60px 20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    marginBottom: "40px",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "bold",
  },
  heroSubtitle: {
    fontSize: "18px",
    marginTop: "10px",
    opacity: 0.9,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  section: {
    backgroundColor: "#F8F9FA",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease-in-out",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.8",
  },
  quote: {
    fontSize: "16px",
    fontStyle: "italic",
    backgroundColor: "#eef5ff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    textAlign: "left",
  },
};

export default Home;
