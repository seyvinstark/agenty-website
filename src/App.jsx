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

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
    }`}>
      <Header />
      <main>
        <Hero />
        <DataAnalysis />
        <ProblemStatement />
        <Benefits />
        <Services />
        <Process />
        <Features />
        
        <Clients />
        <Integrations />
        <Reviews />
        <Pricing />
        <FAQ />
        <Comparison />
        <Team />
        <CTA />
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
