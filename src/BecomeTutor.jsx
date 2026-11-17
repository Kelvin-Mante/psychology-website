import './BecomeTutor.css';

function BecomeTutor() {
  return (
    <div className="become-tutor-page">
      {/* Top Banner Section */}
      <div className="become-tutor-hero">
        <div className="become-text">
          <h1>Have knowledge worth sharing?</h1>
          <h2>Become a Psych Tutor.</h2>
          <p>Join our community of Psychology students and help others while earning.</p>
          
          <ul className="benefits-list">
            <li>✔️ Flexible schedule</li>
            <li>✔️ Fair compensation</li>
            <li>✔️ Supportive community</li>
          </ul>
          
          <button className="apply-now-btn">Apply Now &rarr;</button>
        </div>
        
        {/* Placeholder for the student photo */}
        <div className="become-image">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Tutor" />
        </div>
      </div>

      {/* The Application Form */}
      <div className="application-form-container">
        <h3>Tutor Application Form</h3>
        <form className="tutor-form" onSubmit={(e) => {
  e.preventDefault();
  alert("Application submitted successfully! We will review your application and get back to you soon.");
}}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Level</label>
            <select>
              <option>Select your level</option>
              <option>Level 100</option>
              <option>Level 200</option>
              <option>Level 300</option>
              <option>Level 400</option>
            </select>
          </div>

          <div className="form-group">
            <label>Courses You Can Teach</label>
            <input type="text" placeholder="e.g. Psychology of Personality" />
          </div>

          <div className="form-group">
            <label>Why do you want to tutor?</label>
            <textarea rows="4" placeholder="Tell us a bit about yourself..."></textarea>
          </div>

          <button type="submit" className="submit-form-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default BecomeTutor;