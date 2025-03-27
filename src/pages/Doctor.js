import React, { useState } from "react";

const Doctor = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", availability: "10:00 AM - 2:00 PM" },
    { id: 2, name: "Dr. Emily Johnson", specialization: "Dermatologist", availability: "9:00 AM - 1:00 PM" },
    { id: 3, name: "Dr. Michael Brown", specialization: "Orthopedic", availability: "2:00 PM - 6:00 PM" },
    { id: 4, name: "Dr. Sarah Lee", specialization: "Neurologist", availability: "8:00 AM - 12:00 PM" },
    { id: 5, name: "Dr. David Miller", specialization: "Pediatrician", availability: "1:00 PM - 5:00 PM" }
  ]);

  const [formData, setFormData] = useState({ name: "", specialization: "", availability: "" });
  const [editingDoctor, setEditingDoctor] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingDoctor) {
      setDoctors(doctors.map((doc) => (doc.id === editingDoctor.id ? { ...editingDoctor, ...formData } : doc)));
    } else {
      setDoctors([...doctors, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", specialization: "", availability: "" });
    setEditingDoctor(null);
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    setFormData(doctor);
  };

  const handleDelete = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Our Doctors</h2>
      <p style={{ textAlign: "center", color: "#666" }}>Find the best specialists available at our hospital.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {doctors.map((doctor) => (
          <div key={doctor.id} style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", transition: "transform 0.2s", cursor: "pointer" }}>
            <h3 style={{ color: "#007bff" }}>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Available Time:</strong> {doctor.availability}</p>
            <div>
              <button onClick={() => handleEdit(doctor)} style={{ background: "#007bff", color: "#fff", border: "none", padding: "5px 10px", marginRight: "5px", borderRadius: "5px", cursor: "pointer" }}>Edit</button>
              <button onClick={() => handleDelete(doctor.id)} style={{ background: "#dc3545", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h3 style={{ textAlign: "center", marginTop: "20px" }}>{editingDoctor ? "Edit Doctor" : "Add Doctor"}</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Doctor Name" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="Available Time (e.g., 9:00 AM - 2:00 PM)" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
        <button type="submit" style={{ background: "#28a745", color: "#fff", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>{editingDoctor ? "Update Doctor" : "Add Doctor"}</button>
      </form>
    </div>
  );
};

export default Doctor;
