import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-lg mb-1">
              Dr. Juan Eugenio Tabares
            </h3>
            <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Divider on desktop */}
          <div className="hidden md:block h-12 w-px bg-slate-700" />

          {/* Contact summary */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center text-sm text-slate-400">
            <a href="tel:+5762503957" className="hover:text-teal-400 transition-colors">
              +57 (6) 250 3957
            </a>
            <a href="mailto:juantab@hotmail.com" className="hover:text-teal-400 transition-colors">
              juantab@hotmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Dr. Juan Eugenio Tabares. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
