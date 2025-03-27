import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const doctorStats = [
    { specialization: "Cardiologist", count: 5 },
    { specialization: "Dermatologist", count: 3 },
    { specialization: "Orthopedic", count: 4 },
    { specialization: "Neurologist", count: 2 }
  ];

  const appointmentData = [
    { day: "Mon", count: 10 },
    { day: "Tue", count: 15 },
    { day: "Wed", count: 7 },
    { day: "Thu", count: 20 },
    { day: "Fri", count: 12 }
  ];

  const upcomingAppointments = [
    { patient: "John Doe", time: "10:00 AM" },
    { patient: "Jane Smith", time: "11:30 AM" },
    { patient: "Michael Johnson", time: "1:00 PM" },
    { patient: "Sarah Lee", time: "2:45 PM" },
    { patient: "David Brown", time: "4:00 PM" }
  ];

  const recentPatients = ["Emily Wilson", "Christopher Davis", "Olivia Martinez", "Daniel Harris", "Sophia Clark"];
  const totalEarnings = "$15,250";

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Hospital Dashboard</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total Doctors</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>14</p>
        </div>
        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total Patients</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>120</p>
        </div>
        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Appointments Today</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>25</p>
        </div>
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", gap: "20px" }}>
        <div style={{ width: "50%", background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Appointments per Week</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={appointmentData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: "50%", background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Doctor Specializations</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={doctorStats} dataKey="count" nameKey="specialization" cx="50%" cy="50%" outerRadius={80}>
                {doctorStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Upcoming Appointments</h3>
          <ul>
            {upcomingAppointments.map((appointment, index) => (
              <li key={index}>{appointment.patient} - {appointment.time}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Recent Patient Registrations</h3>
          <ul>
            {recentPatients.map((patient, index) => (
              <li key={index}>{patient}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>Total Earnings</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "green" }}>{totalEarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
