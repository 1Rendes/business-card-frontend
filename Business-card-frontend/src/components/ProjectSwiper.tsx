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

const ProjectSwiper = () => {
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
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        <SwiperSlide>
          <ProjectCard order="first" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="second" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="third" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="fourth" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="fifth" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="sixth" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard order="seventh" />
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
