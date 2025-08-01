
import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import { MailIcon, PhoneIcon } from './components/icons';

const VideoBackground: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10">
    <video
      className="w-full h-full object-cover"
      src="/7490436-hd_1920_1080_30fps.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
  </div>
);

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-black text-[#f8f5f2] font-sans antialiased">
      <VideoBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Section
            id="home"
            className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start text-left"
          >
            <div className="max-w-3xl ml-4 md:ml-12 lg:ml-24">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight">
                Elegance Meets Innovation.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
                Welcome to KASHICORE INTERIORS—where we transform spaces with modern aesthetics and lasting comfort, tailored just for you.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-block px-8 py-4 text-lg font-semibold text-black bg-[#f8f5f2] hover:bg-white/90 rounded-full transition-transform duration-300 hover:scale-105"
              >
                Begin Your Transformation
              </a>
            </div>
          </Section>

          <Section id="about" className="bg-black/30 backdrop-blur-sm">
            <h2 className="text-4xl font-serif font-bold text-center text-white mb-12">About Us</h2>
            <p className="text-center text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
              At KASHICORE INTERIORS, we believe that a well-designed space can elevate your daily life. Our philosophy blends timeless design principles with contemporary innovation to create environments that are not only beautiful but also deeply personal and functional. Our dedicated team of designers works collaboratively with you to bring your vision to life, ensuring every detail reflects your unique style and needs.
            </p>
          </Section>

          <Section id="services">
            <h2 className="text-4xl font-serif font-bold text-center text-white mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-white mb-3">Residential & Commercial</h3>
                <p className="text-gray-300">Tailored interior design for homes and businesses.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-white mb-3">Space Planning & 3D</h3>
                <p className="text-gray-300">Optimizing layouts with realistic 3D visualizations.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-white mb-3">Custom Furniture</h3>
                <p className="text-gray-300">Bespoke furniture and decor solutions for a unique touch.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold font-serif text-white mb-3">Project Management</h3>
                <p className="text-gray-300">Seamless execution from concept to completion.</p>
              </div>
            </div>
          </Section>

          <Section id="contact" className="bg-black/30 backdrop-blur-sm">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Contact Us</h2>
              <div className={`transition-all duration-500 ${showForm ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-screen opacity-100'}`}>
                <p className="text-lg text-gray-200 mb-8">Ready to elevate your space? Reach out to us.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 text-lg">
                  <a href="mailto:info@kashicoreinteriors.com" className="flex items-center gap-2 hover:text-[#b38b6d] transition-colors">
                    <MailIcon /> info@kashicoreinteriors.com
                  </a>
                  <a href="tel:+12345678901" className="flex items-center gap-2 hover:text-[#b38b6d] transition-colors">
                    <PhoneIcon /> +1 234 567 8901
                  </a>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-3 text-lg font-semibold text-black bg-[#b38b6d] hover:bg-[#a17c60] rounded-full transition-all duration-300 hover:scale-105"
                >
                  Book a Consultation
                </button>
              </div>

              <div className={`transition-all duration-500 ${showForm ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ConsultationForm onBack={() => setShowForm(false)} />
              </div>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
