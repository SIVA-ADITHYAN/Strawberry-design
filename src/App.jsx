import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import About from './sections/About';
import Products from './sections/Products';
import Benefits from './sections/Benefits';
import Process from './sections/Process';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Products />
        <Benefits />
        <Process />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
