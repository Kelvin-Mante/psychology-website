import './TutorsSection.css';
import TutorCard from './TutorCard.jsx';
import photo1 from './assets/tutor1.jpg';
import photo2 from './assets/tutor2.jpg';
import photo3 from './assets/tutor3.jpg';

function TutorsSection() {
  return (
    <section className="tutors-section">
      <div className="tutors-header">
        <h2>Meet Some of Our Tutors</h2>
        <a href="/find-tutor" className="view-all-link">View All &rarr;</a>
      </div>

      <div className="tutors-grid">
        <TutorCard 
          name="Fosua Ekuban" 
          level="Level 400" 
          rating="4.8" 
          reviews="24" 
          speciality="Specialises in Psychology of Personality & Research Methods."
          image={photo1} 
        />
        <TutorCard 
          name="Awuitor Evelyn Esi" 
          level="Level 300" 
          rating="4.7" 
          reviews="18" 
          speciality="Helps with Statistics, Developmental Psychology and more."
          image={photo2} 
        />
        <TutorCard 
          name="Angel Makafui Agboado" 
          level="Level 400" 
          rating="4.9" 
          reviews="30" 
          speciality="Expert in Cognitive Psychology and Research Methods."
          image={photo3} 
        />
      </div>
    </section>
  );
}

export default TutorsSection;