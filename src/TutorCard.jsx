import './TutorCard.css';

function TutorCard({ name, level, rating, reviews, image, speciality }) {
  return (
    <div className="tutor-card">
      <img src={image} alt={name} className="tutor-image" />
      
      <div className="tutor-info">
        <h3>{name}</h3>
        <p className="tutor-level">{level} • Psychology</p>
        
        <div className="tutor-rating">
          <span>⭐ {rating}</span>
          <span className="reviews">({reviews} reviews)</span>
        </div>

        <div className="available-badge">
          ⭐ Available
        </div>

        {/* NEW: Added the speciality text so it doesn't get cut off */}
        <p className="tutor-speciality-text">
          {speciality || "Specialises in various Psychology courses."}
        </p>
      </div>
      
      <button className="view-profile-btn">View Profile</button>
    </div>
  );
}

export default TutorCard;