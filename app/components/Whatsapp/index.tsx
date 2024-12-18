import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// import "./styles.scss";

const Whatsapp = () => {
  const handleClick = () => {
    const message = "Buen día, vengo desde la página web y estoy interesado en los planes que tienen.";
    const encodedMessage = encodeURI(message);
    const numberWp = 573154723554;
    window.open(`https://wa.me/${numberWp}?text=${encodedMessage}`);
  };

  return <FaWhatsapp onClick={handleClick} className='cursor-pointer text-5xl text-green-grass' />;
};

export default Whatsapp;
