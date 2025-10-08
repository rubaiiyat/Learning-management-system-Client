import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/courses").then((res) => {
      setCourses(res.data.course);
    });
  }, []);

  return (
    <div className="py-12 px-6">
      {/* Total Course Count */}
      <h2 className="text-3xl font-bold text-center mb-10 text-[#F16623]">
        Available Courses: {courses.length}
      </h2>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>

      {/* No Course Message */}
      {courses.length === 0 && (
        <p className="text-center text-base-content/60 text-lg mt-10">
          No courses available yet.
        </p>
      )}
    </div>
  );
};

export default Courses;
