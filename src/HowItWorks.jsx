import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step">
          <div className="step-icon">🔍</div>
          <h3>1. Find</h3>
          <p>Browse our verified tutors.</p>
        </div>

        <div className="arrow">&rarr;</div>

        {/* Step 2 */}
        <div className="step">
          <div className="step-icon">📅</div>
          <h3>2. Book</h3>
          <p>Choose a convenient time.</p>
        </div>

        <div className="arrow">&rarr;</div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-icon">✔️</div>
          <h3>3. Learn</h3>
          <p>Get the academic support you need.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;