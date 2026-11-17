import { useState } from 'react';
import './FindTutor.css';
import TutorListItem from './TutorListItem.jsx';
import photo1 from './assets/tutor1.jpg';
import photo2 from './assets/tutor2.jpg';
import photo3 from './assets/tutor3.jpg';

// We move the tutor data into an array so we can filter it
const tutorsData = [
  {
    id: 1,
    name: "Fosua Ekuban",
    level: "Level 400",
    rating: "4.8",
    reviews: "24",
    speciality: "Specialises in Psychology of Personality & Research Methods.",
    availability: "Mon - Fri (2pm - 6pm)",
    image: photo1
  },
  {
    id: 2,
    name: "Awuitor Evelyn Esi",
    level: "Level 300",
    rating: "4.7",
    reviews: "18",
    speciality: "Helps with Statistics, Developmental Psychology and more.",
    availability: "Tue - Sat (1pm - 5pm)",
    image: photo2
  },
  {
    id: 3,
    name: "Angel Makafui Agboado",
    level: "Level 400",
    rating: "4.9",
    reviews: "30",
    speciality: "Expert in Cognitive Psychology and Research Methods.",
    availability: "Mon - Thu (3pm - 7pm)",
    image: photo3
  }
];

function FindTutor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  // This filters the tutors based on the search input and the level dropdown
  const filteredTutors = tutorsData.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tutor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All Levels" || tutor.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="find-tutor-page">
      <div className="find-tutor-header">
        <div>
          <h1>Find a Tutor</h1>
          <p>Get connected with qualified Psychology students who can help you succeed.</p>
        </div>
        <div className="header-brain">🧠</div>
      </div>

      <div className="search-bar-container">
        <input 
          type="text" 
          placeholder="Search by name or course..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          className="filter-dropdown"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option>All Levels</option>
          <option>Level 100</option>
          <option>Level 200</option>
          <option>Level 300</option>
          <option>Level 400</option>
        </select>
        <select className="filter-dropdown">
          <option>Availability</option>
          <option>Weekdays</option>
          <option>Weekends</option>
        </select>
        <button className="search-btn">Search</button>
      </div>

      <div className="tutor-list">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor) => (
            <TutorListItem 
              key={tutor.id}
              name={tutor.name} 
              level={tutor.level} 
              rating={tutor.rating} 
              reviews={tutor.reviews} 
              speciality={tutor.speciality}
              availability={tutor.availability}
              image={tutor.image} 
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '40px', fontSize: '18px' }}>
            No tutors found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default FindTutor;