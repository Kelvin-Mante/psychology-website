import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Could not log out. Please try again.');
    }
  };

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

      {user ? (
        <button onClick={handleLogout} className="login-btn">
          Log Out
        </button>
      ) : (
        <Link to="/login" className="login-btn">
          Log In
        </Link>
      )}
    </nav>
  );
}

export default Navbar;