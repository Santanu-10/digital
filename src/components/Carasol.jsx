// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="main-swiper-div">
        <Swiper className="ttt"
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          // className="mySwiper"
        >
          <div className="slider-img-section"> 
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swipe-img "
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              alt=""
            />
          </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
