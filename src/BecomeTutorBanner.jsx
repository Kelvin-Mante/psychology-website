import './BecomeTutorBanner.css';

function BecomeTutorBanner() {
  return (
    <section className="become-tutor-banner">
      <div className="banner-content">
        <div className="banner-logo">Ψ</div>
        <div>
          <h2>Have knowledge worth sharing?</h2>
          <p>Become a Psych Tutor and help fellow students.</p>
        </div>
      </div>
      
      <button 
        className="banner-btn" 
        onClick={() => alert("This will eventually take you to the application page!")}
      >
        Apply to Become a Tutor &rarr;
      </button>
    </section>
  );
}

export default BecomeTutorBanner;