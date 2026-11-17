import { useState } from 'react';
import './TutorListItem.css';
import ProfileModal from './ProfileModal.jsx';

function TutorListItem({ name, level, rating, reviews, speciality, availability, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tutorData = { name, level, rating, reviews, speciality, availability, image };

  const handleBookNow = () => {
    alert(`Successfully requested a session with ${name}! Check "My Sessions" to view details.`);
  };

  return (
    <>
      <div className="tutor-list-item">
        <img src={image} alt={name} className="list-tutor-image" />
        
        <div className="list-tutor-info">
          <h3>{name}</h3>
          <p className="list-tutor-level">{level} • Psychology</p>
          <div className="list-tutor-rating">
            <span>⭐ {rating}</span> <span className="reviews">({reviews} reviews)</span>
          </div>
          <p className="list-tutor-speciality">{speciality}</p>
        </div>

        <div className="list-tutor-availability">
          <p><strong>Available:</strong></p>
          <p>🗓️ {availability}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="book-now-btn" onClick={handleBookNow}>
            Book Now
          </button>
          <button 
            className="view-profile-btn-list" 
            onClick={() => setIsModalOpen(true)}
            style={{
              background: 'transparent',
              color: '#a31b5d',
              border: '1.5px solid #a31b5d',
              padding: '8px 20px',
              borderRadius: '20px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            View Profile
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ProfileModal tutor={tutorData} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default TutorListItem;