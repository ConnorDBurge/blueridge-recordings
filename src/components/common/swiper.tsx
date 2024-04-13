"use client";

import { ChevronDownIcon } from "@/components/icons";
import React, { useState } from "react";

import SwiperType from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper as _Swiper, useSwiper } from "swiper/react";

export function Swiper({
  children,
  breakpoints,
  prevIcon,
  nextIcon,
}: {
  children: React.ReactNode[];
  breakpoints?: Record<string, any>;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
}) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <_Swiper
      className="z-0"
      modules={[Navigation]}
      onSlideChange={handleSlideChange}
      onInit={handleSlideChange}
      breakpoints={
        breakpoints || {
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }
      }
    >
      {!isBeginning && <LeftNav icon={prevIcon} />}
      {children.map((child, index) => (
        <SwiperSlide key={index} className="my-auto">
          {child}
        </SwiperSlide>
      ))}
      {!isEnd && <RightNav icon={nextIcon} />}
    </_Swiper>
  );
}

const LeftNav = ({ icon }: { icon: React.ReactNode }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute -left-3 top-1/2 z-10 flex -translate-y-1/2"
      aria-label="Prev"
    >
      {icon || (
        <ChevronDownIcon
          width="40px"
          height="40px"
          className="transition-300 fill-lavender -translate-x-[1px] rotate-90 opacity-50 hover:fill-white hover:opacity-100"
        />
      )}
    </button>
  );
};

const RightNav = ({ icon }: { icon: React.ReactNode }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute -right-3 top-1/2 z-10 flex -translate-y-1/2"
      aria-label="Next"
    >
      {icon || (
        <ChevronDownIcon
          width="40px"
          height="40px"
          className="transition-300 fill-lavender translate-x-[1px] -rotate-90 opacity-50 hover:fill-white hover:opacity-100"
        />
      )}
    </button>
  );
};
