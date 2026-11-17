import './ProfileModal.css';

function ProfileModal({ tutor, onClose }) {
  if (!tutor) return null;

  const handleBooking = () => {
    alert(`Successfully requested a session with ${tutor.name}! Check "My Sessions" to view details.`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img src={tutor.image} alt={tutor.name} className="modal-image" />
          <div>
            <h2>{tutor.name}</h2>
            <p className="modal-level">{tutor.level} • Psychology</p>
            <div className="modal-rating">⭐ {tutor.rating} ({tutor.reviews} reviews)</div>
          </div>
        </div>

        <div className="modal-body">
          <h3>About</h3>
          <p>{tutor.speciality}</p>
          
          <h3>Availability</h3>
          <p>🗓️ {tutor.availability}</p>
        </div>

        <div className="modal-footer">
          <button className="book-modal-btn" onClick={handleBooking}>
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;