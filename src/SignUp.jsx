import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabase';
import './SignUp.css';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role,
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      window.location.href = '/sessions';
    } else {
      setSuccess('Account created! Please check your email to verify your account before logging in.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <div className="signup-left">
          <div className="signup-logo">Ψ</div>
          <h1>Join Psych Tutor</h1>
          <p>Learn • Connect • Excel</p>
          <p className="signup-quote">
            Create an account to book sessions or become a tutor.
          </p>
        </div>

        <div className="signup-right">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <div className="role-selector">
              <label>I want to join as:</label>

              <div className="role-options">
                <button
                  type="button"
                  className={`role-btn ${role === 'Student' ? 'active' : ''}`}
                  onClick={() => setRole('Student')}
                >
                  🎓 Student
                </button>

                <button
                  type="button"
                  className={`role-btn ${role === 'Tutor' ? 'active' : ''}`}
                  onClick={() => setRole('Tutor')}
                >
                  👨‍🏫 Tutor
                </button>
              </div>
            </div>

            {error && (
              <p style={{ color: 'red' }}>{error}</p>
            )}

            {success && (
              <p style={{ color: 'green' }}>{success}</p>
            )}

            <button
              type="submit"
              className="signup-submit"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default SignUp;