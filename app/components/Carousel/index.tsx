import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ options, slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  return (
    <section className='embla h-full'>
      <div className='embla__viewport h-full' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>
                <img src={slide.img} alt={slide.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla {
          max-width: 80rem;
          margin: auto;
          --slide-height: 19rem;
          --slide-spacing: 1rem;
          --slide-size: 100%;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y pinch-zoom;
          margin-left: calc(var(--slide-spacing) * -1);
        }
        .embla__slide {
          transform: translate3d(0, 0, 0);
          flex: 0 0 var(--slide-size);
          min-width: 0;
          padding-left: var(--slide-spacing);
        }
        .embla__slide__number {
          box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
          border-radius: 1.8rem;
          font-size: 4rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default Carousel;
