import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Differentials from '../components/Differentials';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Portfolio />
      <Testimonials />
      <HowItWorks />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;

