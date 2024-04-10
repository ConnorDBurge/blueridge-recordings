"use client";

import {
  BoxIcon,
  ChevronDownIcon,
  PhoneIcon,
  ReturnIcon,
  TruckIcon,
} from "@/components/icons";
import Link from "next/link";
import { useState } from "react";
import Swiper from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper as Swipe, SwiperSlide, useSwiper } from "swiper/react";

export function Footer() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: Swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="z-0 bg-primary py-0">
      <div className="container relative py-3 md:py-5">
        <Swipe
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
          onInit={handleSlideChange}
          breakpoints={{
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
            },
          }}
        >
          {!isBeginning && <LeftNav />}
          <SwiperSlide className="my-auto flex-grow bg-primary px-6 text-white">
            <Link
              href="/"
              className="group/cta transition-300 flex items-center justify-center gap-6 px-4 no-underline group-hover/cta:stroke-secondary md:px-0"
            >
              <TruckIcon
                width="65px"
                height="65px"
                className="transition-300 group-hover/cta:stroke-secondary"
              />
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary">
                  Free Shipping
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary">
                  Enjoy free shipping on all orders
                </span>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="my-auto flex-grow bg-primary px-6 text-white">
            <Link
              href="/"
              className="group/cta transition-300 flex items-center justify-center gap-6 px-4 no-underline group-hover/cta:stroke-secondary md:px-0"
            >
              <BoxIcon
                width="70px"
                height="70px"
                className="transition-300 group-hover/cta:fill-secondary"
              />
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary ">
                  Ready to Ship
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary ">
                  All orders process within 1-2 days, on their way to you
                </span>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="my-auto flex-grow bg-primary px-6 text-white">
            <Link
              href="/"
              className="group/cta transition-300 flex items-center justify-center gap-6 px-4 no-underline group-hover/cta:stroke-secondary md:px-0"
            >
              <ReturnIcon
                width="60px"
                height="60px"
                className="transition-300 group-hover/cta:stroke-secondary"
              />
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary ">
                  Hassle Free Returns
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary ">
                  Free returns on all orders within 30 days
                </span>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="my-auto flex-grow bg-primary px-6 text-white">
            <Link
              href="/"
              className="group/cta transition-300 flex items-center justify-center gap-6 px-4 no-underline group-hover/cta:stroke-secondary md:px-0"
            >
              <PhoneIcon
                width="60px"
                height="60px"
                className="transition-300 group-hover/cta:fill-secondary"
              />
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary ">
                  Customer Service
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary ">
                  Need help? Call us at 1-800-555-5555
                </span>
              </div>
            </Link>
          </SwiperSlide>
          {!isEnd && <RightNav />}
        </Swipe>
      </div>
    </section>
  );
}

export const LeftNav = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute -left-3 top-1/2 z-10 flex -translate-y-1/2"
      aria-label="Prev"
    >
      <ChevronDownIcon
        width="40px"
        height="40px"
        className="-translate-x-[1px] rotate-90 fill-white"
      />
    </button>
  );
};

export const RightNav = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute -right-3 top-1/2 z-10 flex -translate-y-1/2"
      aria-label="Next"
    >
      <ChevronDownIcon
        width="40px"
        height="40px"
        className="translate-x-[1px] -rotate-90 fill-white"
      />
    </button>
  );
};
