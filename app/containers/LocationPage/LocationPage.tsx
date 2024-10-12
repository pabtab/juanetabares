import React from "react";
import Location from "../../components/Location";
import Title from "../../components/Title";

const LocationPage = () => {
  return (
    <section
      className='h-full w-full  my-0 px-auto relative flex flex-col items-start px-3 pt-20 sm:flex-row'
      style={{ background: 'url("/assets/images/background1.png") no-repeat', backgroundSize: "cover" }}
      id='location'
    >
      <span className='text-center sm:mr-10'>
        <Title text='Cómo llegar' />
        <img
          className='h-12 text-center w-full hidden sm:block'
          src='/assets/icons/tour.svg'
          alt='how to arrive icon'
        />
      </span>
      <Location />
    </section>
  );
};

export default LocationPage;
