import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURI(t.contact.whatsappMessage);
    window.open(`https://wa.me/573154723554?text=${message}`);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/images/cons2.JPG")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-teal-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-teal-300 font-medium text-sm sm:text-base tracking-widest uppercase mb-4">
          {t.hero.subtitle}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
          {t.hero.headline}
        </h1>
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3.5 rounded-lg font-medium transition-colors text-base"
          >
            <FaWhatsapp className="text-xl" />
            {t.hero.cta1}
          </button>
          <a
            href="tel:+5762503957"
            className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-lg font-medium transition-colors text-base"
          >
            <FaPhone className="text-sm" />
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
