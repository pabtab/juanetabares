import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const Location = () => {
  const isMobile = useIsMobile();

  return (
    <div className='w-full flex justify-center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1333.7652522462472!2d-75.60173479083052!3d6.235431520457679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429968390161f%3A0xa7b10e86461bd796!2sPlazoleta%20Villa%20de%20Aburr%C3%A1!5e0!3m2!1sen!2sus!4v1728685335578!5m2!1sen!2sus'
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
