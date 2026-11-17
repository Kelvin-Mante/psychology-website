import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import TutorsSection from './TutorsSection.jsx';
import BecomeTutorBanner from './BecomeTutorBanner.jsx';
import Footer from './Footer.jsx';
import FindTutor from './FindTutor.jsx';
import Pricing from './Pricing.jsx';
import BecomeTutor from './BecomeTutor.jsx';
import MySessions from './MySessions.jsx';
import Login from './Login.jsx'; // We will build this next!

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TutorsSection />
      <BecomeTutorBanner />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-tutor" element={<FindTutor />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/sessions" element={<MySessions />} />
        <Route path="/login" element={<Login />} />{/* We'll add the login route once we create the file */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;