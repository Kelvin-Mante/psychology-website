import './MySessions.css';
import photo1 from './assets/tutor1.jpg';

function MySessions() {
  return (
    <div className="my-sessions-page">
      <div className="sessions-header">
        <div>
          <h1>My Sessions</h1>
          <p>View and manage your tutoring sessions.</p>
        </div>
        <div className="header-calendar">📅</div>
      </div>

      <div className="sessions-layout">
        {/* Sidebar */}
        <div className="sessions-sidebar">
          <div className="sidebar-item active">📅 Upcoming</div>
          <div className="sidebar-item">🕒 Past Sessions</div>
          <div className="sidebar-item">❌ Cancelled</div>
        </div>

        {/* Main Content */}
        <div className="sessions-content">
          <h2>Upcoming Sessions</h2>
          
          <div className="session-card">
            <img src={photo1} alt="Tutor" className="session-avatar" />
            <div className="session-info">
              <h3>Fosua Ekuban</h3>
              <p>Level 400 • Psychology</p>
              <span className="online-badge">⭐ Online</span>
            </div>
            
            <div className="session-time">
              <p>📅 Tue, Nov 12, 2025</p>
              <p>🕒 2:00 PM – 3:00 PM</p>
            </div>
            
            <button className="details-btn">View Details</button>
          </div>

          <div className="reschedule-box">
            <div className="reschedule-icon">✔️</div>
            <div>
              <h4>Need to reschedule or cancel?</h4>
              <p>Contact support or manage your booking.</p>
            </div>
            <span className="arrow-right">&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySessions;