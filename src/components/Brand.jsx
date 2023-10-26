import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import cashe from "../assets/logos/cashe.png";
import pocketly from "../assets/logos/pocketly.png";
import protium from "../assets/logos/protium.png";
import tatacapital from "../assets/logos/tatacapital.png";
import bharatx from "../assets/logos/bharatx.svg";
import flexi from "../assets/logos/flexi.svg";
import kreditbee from "../assets/logos/kreditbee.svg";
import payme from "../assets/logos/payme.png";
import snapmint from "../assets/logos/snapmint.svg";
import lazypay from "../assets/logos/lazypay.svg";

import "swiper/css";

export const Brand = () => {
  return (
    <section className="sm:bg-[url('/src/assets/features/s2.svg')] bg-hidden bg-cover  bg-blend-normal bg-no-repeat sm:h-[370px] sm:-mt-36 mb-30 :h-3">
      <div className="w-full sm:pt-36 pt-12  flex flex-row justify-center items-center text-center">
        <div className="container text-center">
          <div className="brands-title md:!text-xl lg:!text-2xl pb-7 tracking-[0.0225rem]">
            Trusted by the ones
            <br className="md:hidden" /> democratising credit
          </div>
          <div className="flex flex-row lg:px-32 xl:px-64 2xl:px-72 px-2">
            <Swiper
              spaceBetween={15}
              slidesPerView={"2"}
              breakpoints={{
                // when window width is >= 640px
                350: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              rewind={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay]}
            >
              <div className="flex flex-row justify-center dark:text-gray-400">
                <SwiperSlide>
                  <img
                    alt="Logo 1"
                    className="flex-shrink-0 w-full"
                    src={cashe}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 5"
                    className="flex-shrink-0 w-full "
                    src={protium}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img alt="Logo 2" className="flex-shrink-0 " src={pocketly} />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 3"
                    className="flex-shrink-0 w-full"
                    src={tatacapital}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={bharatx}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={payme}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={snapmint}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={lazypay}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={kreditbee}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    alt="Logo 4"
                    className="flex-shrink-0 w-full"
                    src={flexi}
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
