import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">Ψ</div>
        <div className="logo-text">
          <h1>Psych Tutor</h1>
          <p>Learn • Connect • Excel</p>
        </div>
      </div>

      <ul className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/find-tutor" className="nav-item">Find a Tutor</Link>
        <Link to="/sessions" className="nav-item">My Sessions</Link>
        <Link to="/pricing" className="nav-item">Pricing</Link>
        <Link to="/become-tutor" className="nav-item">Become a Tutor</Link>
      </ul>

      <Link to="/login" className="login-btn">Log In</Link>
    </nav>
  );
}

export default Navbar;