import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fixed categories
  const categories = [
    "All",
    "GRE",
    "SAT",
    "IELTS",
    "Duolingo",
    "PTE",
    "GMAT",
    "TOEFL",
  ];

  useEffect(() => {
    axios.get("https://lms-server-henna.vercel.app/courses").then((res) => {
      const allCourses = res.data.course;
      setCourses(allCourses);
      setFilteredCourses(allCourses);
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(
        courses.filter((course) => course.category === category)
      );
    }
  };

  return (
    <div className="py-12 px-6">
      {/* Total Course Count */}
      <h2 className="text-3xl font-bold text-center mb-6 text-[#F16623]">
        Available Courses: {filteredCourses.length}
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full hover:cursor-pointer font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-[#F16623] text-white"
                : "bg-gray-100 text-gray-800 hover:bg-[#F16623] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>

      {/* No Course Message */}
      {filteredCourses.length === 0 && (
        <p className="text-center text-base-content/60 text-lg mt-10">
          No courses available in this category.
        </p>
      )}
    </div>
  );
};

export default Courses;
