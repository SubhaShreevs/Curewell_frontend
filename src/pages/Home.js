import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Cure-Well Hospital</h1>
      <p style={styles.description}>
        At Cure-Well Hospital, we believe in delivering world-class healthcare with a focus on patient well-being, 
        innovation, and compassion. With state-of-the-art facilities and a team of dedicated professionals, 
        we are committed to providing the best medical treatment and personalized care.
      </p>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.text}>
          Established in 2005, Cure-Well Hospital has emerged as a leading medical institution, recognized for 
          cutting-edge treatments, experienced doctors, and patient-centric care. Our hospital is equipped with 
          modern operation theaters, intensive care units (ICUs), and advanced diagnostic laboratories.
        </p>
        <p style={styles.text}>
          We prioritize affordable healthcare, ensuring that high-quality treatment is accessible to everyone. 
          Our medical staff is available 24/7, providing expert guidance and emergency assistance when needed.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Specialties & Services</h2>
        <ul style={styles.list}>
          <li>Cardiology – Advanced heart care and surgeries</li>
          <li>Neurology – Brain and nervous system treatments</li>
          <li>Orthopedics – Bone, joint, and sports injury care</li>
          <li>Pediatrics – Specialized care for infants and children</li>
          <li>Emergency & Trauma – 24/7 critical care for urgent needs</li>
          <li>General Medicine – Comprehensive treatment for all ages</li>
          <li>Oncology – Cancer care with chemotherapy and radiation therapy</li>
          <li>Gynecology & Obstetrics – Women’s health and maternity services</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>State-of-the-Art Facilities</h2>
        <p style={styles.text}>
          Cure-Well Hospital is equipped with modern infrastructure and technology to provide top-tier medical care. 
          Some of our advanced facilities include:
        </p>
        <ul style={styles.list}>
          <li>24/7 Emergency Care & ICU</li>
          <li>Advanced Diagnostic & Imaging Center (MRI, CT Scan, X-Ray, Ultrasound)</li>
          <li>Fully Equipped Laboratories for Quick Testing & Reports</li>
          <li>Ambulance Services for Rapid Patient Transport</li>
          <li>Spacious Patient Rooms with Comfortable Amenities</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Patient-Centric Approach</h2>
        <p style={styles.text}>
          At Cure-Well Hospital, we follow a holistic approach to patient care, ensuring that every individual 
          receives personalized treatment. Our philosophy revolves around:
        </p>
        <ul style={styles.list}>
          <li>Compassionate Care – Treating patients with empathy and kindness</li>
          <li>Evidence-Based Treatments – Backed by medical research and innovation</li>
          <li>Expert Medical Staff – Highly qualified and experienced specialists</li>
          <li>24/7 Helpline – Always available for patient support</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What Our Patients Say</h2>
        <p style={styles.text}>"Cure-Well Hospital saved my life! The doctors and nurses were extremely professional 
        and caring. Highly recommend!" - John Doe</p>
        <p style={styles.text}>"Best hospital experience ever! The facilities were excellent, and I felt at home 
        during my treatment." - Sarah Williams</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  section: {
    backgroundColor: "#F8F9FA",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
    marginBottom: "20px",
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
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.6",
  },
};

export default Home;
