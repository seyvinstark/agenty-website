import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header, Footer } from './components/layout';
import {
  Hero,
  DataAnalysis,
  ProblemStatement,
  Benefits,
  Services,
  Features,
  // Process, // kept in codebase; uncomment to show section
  Clients,
  Integrations,
  Reviews,
  Pricing,
  FAQ,
  // Comparison,
  // Team,
  CTA,
} from './components/sections';
import BookDemo from './pages/BookDemo';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';
import CookieConsentBanner from './components/CookieConsentBanner';
import { useClarityPageView } from './hooks/useClarityPageView';

function HomePage() {
  return (
    <>
      <Hero />
      <DataAnalysis />
      <ProblemStatement />
      <Benefits />
      <Services />
      {/* <Process /> - hidden; steps merged into Services "Our Platform" tab. Re-enable to show standalone section. */}
      <Features />
      
      <Clients />
      <Integrations />
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      <FAQ />
      {/* <Comparison /> */}
      {/* <Team /> */}
      <CTA />
    </>
  );
}

function AppContent() {
  const { theme } = useTheme();
  useClarityPageView();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
      <CookieConsentBanner />
    </ThemeProvider>
  );
}

export default App;
