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
  Process,
  Clients,
  Integrations,
  Reviews,
  Pricing,
  FAQ,
  Comparison,
  Team,
  CTA,
} from './components/sections';
import BookDemo from './pages/BookDemo';
import ScrollToTop from './components/ScrollToTop';
import { useClarityPageView } from './hooks/useClarityPageView';

function HomePage() {
  return (
    <>
      <Hero />
      <DataAnalysis />
      <ProblemStatement />
      <Benefits />
      <Services />
      <Process />
      <Features />
      
      <Clients />
      <Integrations />
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      <FAQ />
      <Comparison />
      <Team />
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
    </ThemeProvider>
  );
}

export default App;
