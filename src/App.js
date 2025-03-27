import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import Doctor from "./pages/Doctor";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register"; // ✅ Import the Register component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Add the Register route */}
      </Routes>
    </Router>
  );
}

export default App;
