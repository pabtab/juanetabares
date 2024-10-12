import React from "react";
import { MdEmail } from "react-icons/md";

import Phone from "../../components/Phone";
import Whatsapp from "../../components/Whatsapp";
import Carousel from "../../components/Carousel";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    img: "assets/images/dr1.JPG",
    alt: "Dr. Juan Tabares",
  },
  {
    img: "assets/images/cons.JPG",
    alt: "Consultorio",
  },
  {
    img: "assets/images/cons2.JPG",
    alt: "Consultorio",
  },
  {
    img: "assets/images/cons-outside2.JPG",
    alt: "Consultorio outside",
  },
];

const HomePage = () => {
  return (
    <section
      className='pt-[52px] flex w-full flex-col sm:flex-row-reverse h-[calc(100vh - 52px)] sm:h-full'
      id='home'
    >
      <aside className='h-[calc(100vh-340px)] sm:h-full w-full'>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </aside>
      <article className='w-full bg-white sm:h-full sm:w-3/5 sm:flex sm:min-w-[200px]'>
        <div className='w-full'>
          <div className='bg-green text-white flex items-center justify-center flex-col h-24 sm:h-1/3'>
            <div>Teléfono:</div>
            <div className='flex'>
              <Phone />
              <a href='tel:+5762503957' className='ml-2'>
                2 50 39 57
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col h-24 sm:h-1/3'>
            <p>Escríbenos a:</p>
            <Whatsapp />
          </div>
          <div className='bg-green text-white flex items-center justify-center flex-col h-24 sm:h-1/3'>
            <div>Correo:</div>
            <div className='flex items-center'>
              <MdEmail />
              <a href='mailto:juantab@hotmail.com' className='ml-2'>
                juantab@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomePage;
