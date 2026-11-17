import './Pricing.css';

function Pricing() {
  return (
    <div className="pricing-page">
      {/* Header */}
      <div className="pricing-header">
        <div>
          <h1>Our Pricing</h1>
          <p>Affordable support. Fair value.</p>
        </div>
        <div className="header-wallet">👛</div>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {/* Individual Session */}
        <div className="pricing-card">
          <div className="pricing-badge">Individual Session</div>
          <h2 className="price">GH₵40</h2>
          <p className="price-sub">per session</p>
          <p className="price-desc">Get help with your Psychology courses.</p>
          <button className="pricing-btn">Book Now &rarr;</button>
        </div>

        {/* Monthly Package */}
        <div className="pricing-card">
          <div className="pricing-badge">Monthly Package</div>
          <h2 className="price">GH₵120 – 160</h2>
          <p className="price-sub">Four sessions within a month</p>
          <p className="price-desc">A convenient option for regular support.</p>
          <button className="pricing-btn">Subscribe Now &rarr;</button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="pricing-features">
        <div className="feature">
          <span className="feature-icon">🛡️</span>
          <p>Flexible Options</p>
        </div>
        <div className="feature">
          <span className="feature-icon">👥</span>
          <p>Student Focused</p>
        </div>
        <div className="feature">
          <span className="feature-icon">💖</span>
          <p>Academic Support</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;