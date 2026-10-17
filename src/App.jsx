import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import RightSidebarDock from './components/RightSidebarDock';
import SidebarDrawer from './components/SidebarDrawer';
import FloatingDock from './components/FloatingDock';
import ScrollProgress from './components/ScrollProgress';
import SiteBackdrop from './components/SiteBackdrop';
import MouseTracker from './components/MouseTracker';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OngoingProgressPage from './pages/OngoingProgressPage';
import InstagramDpModal from './components/InstagramDpModal';
import HackerIntroOverlay from './components/HackerIntroOverlay';
import './App.css';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('amaan_theme') || 'dark';
  });

  const [isDpModalOpen, setIsDpModalOpen] = useState(false);
  const [dpAvatarUrl, setDpAvatarUrl] = useState('/images/profile-avatar.svg');

  // Pre-cache avatar in memory for zero-latency, zero-blur modal display
  useEffect(() => {
    const preloader = new Image();
    preloader.src = '/images/profile-avatar.svg';
  }, []);

  const handleOpenDp = (avatar) => {
    setDpAvatarUrl(avatar || '/images/profile-avatar.svg');
    setIsDpModalOpen(true);
  };

  const isOngoingRoute = () => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    return hash.includes('ongoing') || path.includes('ongoing') || search.includes('ongoing') ||
           hash.includes('present') || path.includes('present') || search.includes('present') ||
           hash.includes('progress') || path.includes('progress') || search.includes('progress');
  };

  // Client-side router: 'home' | 'ongoing' with clean URL paths
  const [currentPage, setCurrentPage] = useState(() => {
    if (isOngoingRoute()) {
      // Clean up legacy hash if present (e.g. /#/ongoing -> /ongoing)
      if (window.location.hash) {
        window.history.replaceState(null, '', '/ongoing');
      }
      return 'ongoing';
    }
    return 'home';
  });

  const [activeSection, setActiveSection] = useState('top');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDockOpen, setIsDockOpen] = useState(false);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('amaan_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync routing with browser back & forward buttons
  useEffect(() => {
    const handleRouteChange = () => {
      if (isOngoingRoute()) {
        if (window.location.hash) {
          window.history.replaceState(null, '', '/ongoing');
        }
        setCurrentPage('ongoing');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigateTo = (page) => {
    setIsDrawerOpen(false);
    setIsDockOpen(false);
    setCurrentPage(page);
    if (page === 'ongoing' || page === 'present' || page === 'progress') {
      window.history.pushState(null, '', '/ongoing');
    } else {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scrollspy to detect active section on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionIds = ['top', 'work', 'experience', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Scroll reveal: elements smoothly come up into view as user wanders/scrolls through the site
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const selector = '.project-card, .samidev-project-card, .timeline-item, .skill-category-card, .contact-form-card, .section-header, .samidev-section-header, .bento-profile-cell';
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="portfolio-app">
      {/* Cyberpunk Terminal Decryption Hacker Intro Overlay */}
      {showIntro && (
        <HackerIntroOverlay onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Scroll Progress Slide Bar (samidev.work signature) */}
      <ScrollProgress />

      {/* Dynamic Animated Background with Dot Matrix & Spotlight */}
      <SiteBackdrop />

      {/* Interactive Mouse Trailer / Cursor Tracker */}
      <MouseTracker />

      {currentPage === 'ongoing' ? (
        /* ==================== DEDICATED ONGOING & GITHUB PROGRESS PAGE ==================== */
        <OngoingProgressPage 
          onBackToHome={() => navigateTo('home')} 
          theme={theme} 
          onOpenDp={handleOpenDp}
        />
      ) : (
        /* ==================== HOME PORTFOLIO PAGE ==================== */
        <>
          {/* Top Navigation Bar (matching Picture 2) */}
          <Navbar 
            theme={theme}
            toggleTheme={toggleTheme}
            onOpenMenu={() => setIsDrawerOpen(true)}
            onNavigateToProgress={() => navigateTo('ongoing')}
            activeSection={activeSection}
            currentPage={currentPage}
          />

          {/* Full Navigation Drawer for Mobile Header Menu */}
          <SidebarDrawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            activeSection={activeSection}
            onNavigateToProgress={() => navigateTo('ongoing')}
          />

          {/* Right Sidebar Dock with Slider Arrow matching Picture 1 & 2 */}
          <RightSidebarDock
            isOpen={isDockOpen}
            onToggle={() => setIsDockOpen(!isDockOpen)}
            activeSection={activeSection}
            onNavigateToProgress={() => navigateTo('ongoing')}
          />

          {/* Centered Main Content Feed: ONLY Work, Experience, Skills, Contact */}
          <main className="centered-main-layout">
            <div id="top">
              <Hero 
                theme={theme} 
                toggleTheme={toggleTheme} 
                onNavigateToProgress={() => navigateTo('ongoing')}
              />
            </div>

            <div id="work">
              <Projects />
            </div>

            <div id="experience">
              <Experience />
            </div>

            <div id="skills">
              <Skills />
            </div>

            <div id="contact">
              <Contact />
            </div>

            <Footer onNavigateToProgress={() => navigateTo('ongoing')} />
          </main>
        </>
      )}

      {/* Profile Picture Modal Viewer */}
      <InstagramDpModal 
        isOpen={isDpModalOpen} 
        onClose={() => setIsDpModalOpen(false)} 
        avatarUrl={dpAvatarUrl} 
      />
    </div>
  );
}
