import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CreativeTools from './components/CreativeTools';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Freelance from './components/Freelance';
import Achievements from './components/Achievements';
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
      <main>
        <Hero />
        <About />
        <Skills />
        <CreativeTools />
        <Projects />
        <Freelance />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--white)' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', textAlign: 'center' }}>
        <div>
          <h1 className="font-hero" style={{ fontSize: 'clamp(80px, 15vw, 160px)', lineHeight: 0.9, marginBottom: '24px' }}>
            404
          </h1>
          <p className="font-head" style={{ fontSize: 'clamp(20px, 4vw, 32px)', color: 'var(--gray-text)', marginBottom: '48px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            PAGE NOT FOUND
          </p>
          <Link to="/" className="btn-filled">
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
