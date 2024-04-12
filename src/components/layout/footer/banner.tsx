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

export default function Banner({ phone }: { phone: string }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: Swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="bg-primary py-0">
      <div className="container relative">
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
              spaceBetween: 20,
            },
          }}
        >
          {!isBeginning && <LeftNav />}
          <SwiperSlide className="my-auto flex-grow cursor-grab py-3 md:py-5">
            <Link
              href="/"
              className="group/cta transition-300 mx-7 flex h-full items-center justify-center gap-5 no-underline group-hover/cta:stroke-secondary md:px-0 xl:mx-0"
            >
              {icons["truck"]}
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary">
                  Free Shipping
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary">
                  Enjoy free shipping on all orders in the United States
                </span>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="my-auto flex-grow cursor-grab py-3 md:py-5">
            <Link
              href="/"
              className="group/cta transition-300 mx-7 flex h-full items-center justify-center gap-5 no-underline group-hover/cta:stroke-secondary md:px-0 xl:mx-0"
            >
              <BoxIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
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
          <SwiperSlide className="my-auto flex-grow cursor-grab py-3 md:py-5">
            <Link
              href="/"
              className="group/cta transition-300 mx-7 flex h-full items-center justify-center gap-5 no-underline group-hover/cta:stroke-secondary md:px-0 xl:mx-0"
            >
              <ReturnIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
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
          <SwiperSlide className="my-auto flex-grow cursor-grab py-3 md:py-5">
            <Link
              href={`tel:${phone}`}
              className="group/cta transition-300 mx-7 flex h-full items-center justify-center gap-5 no-underline group-hover/cta:stroke-secondary md:px-0 xl:mx-0"
            >
              <PhoneIcon className="transition-300 flex-shrink-0 group-hover/cta:stroke-secondary" />
              <div className="flex flex-col">
                <span className="transition-300 font-semibold text-white group-hover/cta:text-secondary ">
                  Customer Service
                </span>
                <span className="transition-300 text-sm text-gray-200 group-hover/cta:text-secondary ">
                  Need help? Call us at {phone}
                </span>
              </div>
            </Link>
          </SwiperSlide>
          {!isEnd && <RightNav />}
        </Swipe>
      </div>
    </div>
  );
}

const LeftNav = () => {
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
        className="transition-300 fill-lavender -translate-x-[1px] rotate-90 opacity-50 hover:fill-white hover:opacity-100"
      />
    </button>
  );
};

const RightNav = () => {
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
        className="transition-300 fill-lavender translate-x-[1px] -rotate-90 opacity-50 hover:fill-white hover:opacity-100"
      />
    </button>
  );
};

const icons = {
  truck: (
    <TruckIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
  phone: (
    <PhoneIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
  return: (
    <ReturnIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
  box: (
    <BoxIcon className="transition-300 flex-shrink-0 group-hover/cta:fill-secondary" />
  ),
};
