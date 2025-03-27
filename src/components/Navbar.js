import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cure-Well Admin</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        </li>
        <li>
          <Link to="/appointment" className="hover:text-gray-200">Appointments</Link>
        </li>
        <li>
          <Link to="/doctor" className="hover:text-gray-200">Doctors</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        </li>
        <li>
            <Link to="/login" className="hover:text-gray-200">Login</Link>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
