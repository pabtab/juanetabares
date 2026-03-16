import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/dr1.JPG"
                alt="Dr. Juan Eugenio Tabares"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-xl -z-10 hidden lg:block" />
          </div>

          {/* Info */}
          <div>
            <p className="text-teal-600 font-medium text-sm tracking-widest uppercase mb-3">
              {t.about.subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-6">
              {t.about.title}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              {t.about.bio}
            </p>

            {/* Credentials */}
            <ul className="space-y-3">
              {t.about.credentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
