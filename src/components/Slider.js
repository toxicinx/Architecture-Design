import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider() {
  return (
    <Swiper
      loop
      style={{ width: "80%" }}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={6}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/200/300?grayscale" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/200/300?grayscale" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
