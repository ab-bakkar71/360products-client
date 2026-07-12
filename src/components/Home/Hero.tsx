"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [
  {
    id: 1,
    title: "Next-Gen Smart Gadgets",
    subtitle: "Experience Innovation Like Never Before",
    description:
      "Discover the premium ecosystem of 360Products built to redefine efficiency.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    cta: "Explore Now",
    link: "/explore",
  },
  {
    id: 2,
    title: "Premium Clothing Architecture",
    subtitle: "Elevate Your Style with Cutting-Edge Designs",
    description:
      "Active noise cancellation with ergonomic fit designed for creators and professionals.",
    image:
      "https://i.pinimg.com/736x/22/b3/4d/22b34d2ee7def7b9e9dbdac6d9f027eb.jpg?q=80&w=1200&auto=format&fit=crop",
    cta: "View Collection",
    link: "/explore?category=audio",
  },
  {
    id: 3,
    title: "Pro Workspace Essentials",
    subtitle: "Boost Your Daily Productivity",
    description:
      "Minimalist mechanical keyboards, trackpads, and smart desks curated for your needs.",
    image:
      "https://i.pinimg.com/736x/85/c1/3e/85c13e77741b870377c289396b6ff72b.jpg",
    cta: "Shop Workspace",
    link: "/explore?category=workspace",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-neutral-bg">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />{" "}

            </div>


            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white md:px-16 lg:px-24">
              <span className="mb-2 text-sm font-semibold tracking-wider text-accent uppercase">
                {slide.subtitle}
              </span>
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl max-w-2xl">
                {slide.title}
              </h1>
              <p className="mb-8 max-w-lg text-base text-gray-200 md:text-lg">
                {slide.description}
              </p>


              <div>
                <Link href={slide.link}>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center bg-secondary hover:bg-opacity-90 text-white font-medium px-8 h-12 rounded-global shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    {slide.cta}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffffff !important;
          transform: scale(0.7);
        }
        .swiper-pagination-bullet-active {
          background: var(--color-secondary, #0d9488) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
