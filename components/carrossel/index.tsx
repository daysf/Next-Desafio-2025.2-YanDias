'use client';

import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from "@/components/card";

export default function Carrossel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) console.log(emblaApi.slideNodes());
  }, [emblaApi]);

  return (
    <div className="bg-rosa1 py-10 pt-40">
      <div className="grid grid-cols-12 items-center">

        <div className="hidden sm:flex justify-center">
          <button
            onClick={scrollPrev}
            className="bg-rosa4 text-white p-3 rounded-full shadow cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105"
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="col-span-12 sm:col-span-10">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    embla__slide
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_calc(100%/3)]
                    px-2
                  "
                >
                  <Card />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden sm:flex justify-center">
          <button
            onClick={scrollNext}
            className="bg-rosa4 text-white p-3 rounded-full shadow cursor-pointer transform transition-transform duration-200 ease-out hover:scale-105"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
