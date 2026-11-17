import './Hero.css';
import heroImage from './assets/woman-8601818_1280.jpg'; 

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find a Tutor</h1>
        <p>Get connected with qualified Psychology students who can help you succeed.</p>
        <button className="hero-btn" onClick={() => window.location.href = '/find-tutor'}>Find a Tutor &rarr;</button>
      </div>
      
      <div className="hero-image-container">
        <img src={heroImage} alt="Psychology Tutor" className="hero-image" />
        {/* Note: If hero.png is the brain graphic from the mockup, great! 
            If it's the photo of the two students, we'll adjust the CSS later. */}
      </div>
    </section>
  );
}

export default Hero;