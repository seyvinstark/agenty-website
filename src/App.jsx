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

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <DataAnalysis />
        <ProblemStatement />
        <Benefits />
        <Services />
        <Features />
        <Process />
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

export default App;
