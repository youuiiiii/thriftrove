import React from 'react';
// import images
import WomanImg from '../img/woman_hero.png';

const HeroSlider = () => {
  return (
    <section className='h-[800px] bg-gray-200 mb-12 py-24'>
      <div className='container mx-auto h-full flex justify-around'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <span className='text-sm font-medium'>NEW TREND</span>
          <h1 className='text-[70px] leading-[1.1] font-light'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
        </div>
        {/* image */}
        <div className=''>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
