import React from "react";
import { useLanguage } from "../context/LanguageContext";

const IMAGES = [
  { src: "/assets/images/cons.JPG", alt: "Consultorio" },
  { src: "/assets/images/cons2.JPG", alt: "Consultorio interior" },
  { src: "/assets/images/cons-outside2.JPG", alt: "Consultorio exterior" },
  { src: "/assets/images/dr2.JPG", alt: "Dr. Tabares" },
];

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover ${
                  index === 0 ? "h-64 sm:h-full" : "h-64"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
