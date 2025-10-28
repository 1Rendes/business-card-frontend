import { Navigation } from "swiper/modules";
import "./ProjectSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ProjectCard from "./ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const ProjectSwiper = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const handleSlideChange = (swiper: { activeIndex: number }): void => {
    setActiveSlideIndex(swiper.activeIndex);
  };
  return (
    <div className="projectSwiper">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation={{
          prevEl: ".swiperButtonPrev",
          nextEl: ".swiperButtonNext",
        }}
        className="swiperWraper"
        slidesPerView={1}
        spaceBetween={5}
        effect="coverflow"
        speed={1000}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <ProjectCard order="first" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="second" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="third" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="fourth" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="fifth" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="sixth" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="seventh" activeSlideIndex={activeSlideIndex} />
        </SwiperSlide>
        <div className="swiperButtons">
          <IoIosArrowBack className="swiperButtonPrev" />
          <IoIosArrowForward className="swiperButtonNext" />
        </div>
      </Swiper>
    </div>
  );
};
export default ProjectSwiper;
