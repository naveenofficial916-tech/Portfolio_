import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import CreativeTools from './components/CreativeTools';
import Freelance from './components/Freelance';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import SideNav from './components/SideNav';
import ClickRipple from './components/ClickRipple';
import CustomCursor from './components/CustomCursor';
import './index.css';

function Home() {
  return (
    <>
      {/* Global Scroll & Interaction Animations */}
      <ScrollProgressBar />
      <ClickRipple />
      <CustomCursor />
      <SideNav />
      <BackToTop />

      <Navbar />
      <main style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh' }}>
        <Hero />
        <Projects />
        <Education />
        <Achievements />
        <CreativeTools />
        <Freelance />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', textAlign: 'center' }}>
        <div>
          <h1 className="font-hero" style={{ fontSize: 'clamp(80px, 15vw, 160px)', lineHeight: 0.9, marginBottom: '24px', color: '#E50914' }}>
            404
          </h1>
          <p className="font-head" style={{ fontSize: 'clamp(18px, 3.5vw, 28px)', color: '#A0A0A0', marginBottom: '40px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            PAGE NOT FOUND
          </p>
          <Link to="/" className="btn-filled" style={{ textDecoration: 'none' }}>
            BACK TO PORTFOLIO
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
