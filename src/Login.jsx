import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-logo">Ψ</div>
          <h1>Psych Tutor</h1>
          <p>Learn • Connect • Excel</p>
          <p className="login-quote">Your academic support is just a login away.</p>
        </div>
        
        <div className="login-right">
          <h2>Log In</h2>
          <form onSubmit={(e) => {
  e.preventDefault();
  alert("Login successful! Redirecting to your dashboard...");
  window.location.href = "/sessions";
}}>
            <div className="input-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="login-options">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-submit">Log In</button>
          </form>
          <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;