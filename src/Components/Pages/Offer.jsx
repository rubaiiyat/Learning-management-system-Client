import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  BookOpenCheck,
  GraduationCap,
  Globe,
  MessageSquare,
  Brain,
  PenTool,
  Compass,
} from "lucide-react";
import { Link } from "react-router";

const Offer = () => {
  const courses = [
    {
      id: 1,
      short: "GRE",
      full: "Graduate Record Examination",
      icon: <BookOpenCheck className="w-10 h-10 text-black" />,
      gradient: "from-[#FFF1E6] to-[#FFD6A5]",
    },
    {
      id: 2,
      short: "TOEFL",
      full: "Test of English as a Foreign Language",
      icon: <Globe className="w-10 h-10 text-black" />,
      gradient: "from-[#E0F7FA] to-[#B2EBF2]",
    },
    {
      id: 3,
      short: "IELTS",
      full: "International English Language Testing System",
      icon: <GraduationCap className="w-10 h-10 text-black" />,
      gradient: "from-[#FFE4E1] to-[#FFD1DC]",
    },
    {
      id: 4,
      short: "Duolingo",
      full: "Duolingo English Test Preparation",
      icon: <MessageSquare className="w-10 h-10 text-black" />,
      gradient: "from-[#E3FDFD] to-[#CBF1F5]",
    },
    {
      id: 5,
      short: "SAT",
      full: "Scholastic Assessment Test",
      icon: <Brain className="w-10 h-10 text-black" />,
      gradient: "from-[#FFF5E1] to-[#FFECB3]",
    },
    {
      id: 6,
      short: "PTE",
      full: "Pearson Test of English",
      icon: <PenTool className="w-10 h-10 text-black" />,
      gradient: "from-[#EDE7F6] to-[#D1C4E9]",
    },
    {
      id: 7,
      short: "GMAT",
      full: "Graduate Management Admission Test",
      icon: <Compass className="w-10 h-10 text-black" />,
      gradient: "from-[#FFF9E6] to-[#FFF3B0]",
    },
  ];

  const loopCourses = [...courses, ...courses];

  return (
    <div className=" bg-base-100 text-center py-20  px-5 overflow-hidden">
      {/* Title */}
      <div className="max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F16623] mb-4">
          What We Offer
        </h1>
        <p className="text-gray-500 text-lg">
          Prepare with confidence for global exams — our expert-led courses help
          you achieve your dream score.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        freeMode={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {loopCourses.map((course, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-[250px] flex flex-col justify-center items-center p-8 rounded-2xl bg-gradient-to-br ${course.gradient} shadow-md`}
            >
              <div className="flex justify-center mb-3">{course.icon}</div>
              <h2 className="text-2xl font-bold text-black mb-1">
                {course.short}
              </h2>
              <p className="text-sm text-black opacity-80 max-w-[180px] mx-auto">
                {course.full}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-16">
        <Link
          to={"/courses"}
          className="px-6 py-3 rounded-full bg-[#F16623] hover:bg-[#e3551c] text-white font-semibold shadow-md transition"
        >
          Explore All Courses
        </Link>
      </div>
    </div>
  );
};

export default Offer;
