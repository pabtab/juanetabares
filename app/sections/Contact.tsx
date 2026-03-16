import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdAccessTime, MdLocationOn } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURI(t.contact.whatsappMessage);
    window.open(`https://wa.me/573154723554?text=${message}`);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-800 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md h-[350px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2603.162499175621!2d-75.60089170639422!3d6.234585636370043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429f6ff2038b1%3A0x95ab81f47d3e5ac4!2sConsultorio%20odontol%C3%B3gico%20Juan%20Eugenio%20Tabares!5e0!3m2!1ses!2sus!4v1733501709630!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* WhatsApp */}
            <div
              className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl cursor-pointer hover:bg-teal-50 transition-colors"
              onClick={handleWhatsApp}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{t.contact.whatsapp}</h3>
                <p className="text-slate-500">+57 315 472 3554</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <MdEmail className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{t.contact.email}</h3>
                <a
                  href="mailto:juantab@hotmail.com"
                  className="text-slate-500 hover:text-teal-600 transition-colors"
                >
                  juantab@hotmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <MdAccessTime className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{t.contact.hours}</h3>
                <p className="text-slate-500 text-sm whitespace-pre-line">
                  {t.contact.hoursDetail}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 flex-shrink-0">
                <MdLocationOn className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{t.contact.address}</h3>
                <p className="text-slate-500 text-sm">{t.contact.addressDetail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
