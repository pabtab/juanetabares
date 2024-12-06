import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const Location = () => {
  const isMobile = useIsMobile();

  return (
    <div className='w-full flex justify-center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2603.162499175621!2d-75.60089170639422!3d6.234585636370043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429f6ff2038b1%3A0x95ab81f47d3e5ac4!2sConsultorio%20odontol%C3%B3gico%20Juan%20Eugenio%20Tabares!5e0!3m2!1ses!2sus!4v1733501709630!5m2!1ses!2sus'
        width={isMobile ? 300 : 750}
        height='450'
        className='border-8 border-solid border-olivergreen shadow-xl'
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Location;
