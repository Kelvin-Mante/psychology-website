import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-icon">Ψ</div>
          <div>
            <h3>Psych Tutor</h3>
            <p>Learn • Connect • Excel</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Find a Tutor</a>
          <a href="#">My Sessions</a>
          <a href="#">Pricing</a>
          <a href="#">Become a Tutor</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-socials">
          {/* Simple text placeholders for socials */}
          <span>💬</span>
          <span>📸</span>
          <span>🐦</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Psych Tutor. All rights reserved. | UCC Psychology Students Association</p>
      </div>
    </footer>
  );
}

export default Footer;