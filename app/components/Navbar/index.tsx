import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const NAV_LINKS = ["home", "services", "about", "gallery", "contact"] as const;

const Navbar = () => {
  const { lang, t, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center gap-2"
          >
            <span className="text-teal-600 text-2xl font-bold">&#9676;</span>
            <span className="font-heading font-bold text-slate-800 text-lg">
              Dr. Tabares
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((key) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className="text-slate-800 hover:text-teal-600 transition-colors text-sm font-medium capitalize"
              >
                {t.nav[key]}
              </button>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium border border-slate-200 rounded-full px-3 py-1 hover:border-teal-500 transition-colors"
            >
              <span className={lang === "es" ? "text-teal-600 font-bold" : "text-slate-400"}>
                ES
              </span>
              <span className="text-slate-300">|</span>
              <span className={lang === "en" ? "text-teal-600 font-bold" : "text-slate-400"}>
                EN
              </span>
            </button>

            {/* CTA */}
            <a
              href="https://wa.me/573154723554"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
            >
              <FaWhatsapp className="text-xs" />
              {t.nav.callNow}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-xs font-medium border border-slate-200 rounded-full px-2 py-1"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 p-2"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-slate-800 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-800 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-slate-800 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            {NAV_LINKS.map((key) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className="text-left text-slate-800 hover:text-teal-600 transition-colors py-2 px-2 text-sm font-medium capitalize"
              >
                {t.nav[key]}
              </button>
            ))}
            <a
              href="https://wa.me/573154723554"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium mt-2"
            >
              <FaWhatsapp className="text-xs" />
              {t.nav.callNow}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
