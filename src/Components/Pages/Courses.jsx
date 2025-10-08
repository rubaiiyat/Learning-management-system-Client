import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
        {courses.map((course, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:scale-[1.02] transition-all duration-300 border border-base-300 rounded-2xl"
          >
            <figure className="h-48 w-full overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold text-[#F16623]">
                {course.title}
              </h3>
              <p className="text-base-content/70 text-sm">
                {course.description.length > 100
                  ? course.description.slice(0, 100) + "..."
                  : course.description}
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="badge badge-outline text-sm capitalize">
                  {course.category}
                </span>
                <span className="text-sm text-base-content/60">
                  {course.classes?.length || 0} Classes
                </span>
              </div>
              <Link className="btn bg-[#F16623] w-full text-white text-lg rounded-xl mt-2">
                Details
              </Link>
            </div>
          </div>
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
