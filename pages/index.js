import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Swaasth.ai - Intelligent Health, Empowered Lives</title>
        <meta name="description" content="Swaasth.ai provides comprehensive, AI-powered healthcare solutions for doctors, patients, and healthcare providers across India." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us */}
      <About />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Services & Features */}
      <Services />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}