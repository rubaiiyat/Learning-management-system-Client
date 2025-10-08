import React from "react";
import { useLoaderData, Link } from "react-router";

const CourseDetails = () => {
  const data = useLoaderData();
  const course = data?.result;

  if (!course) {
    return <div className="text-center py-20 text-lg">loading...</div>;
  }

  const { title, image, description, category, price, classes } = course;

  return (
    <div className="py-12 px-6 flex justify-center">
      <div className="w-full max-w-5xl rounded-2xl shadow-xl border border-base-300 p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 md:w-full md:h-full object-cover rounded-xl"
          />
        </div>

        {/* Right: Course Details */}
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F16623] mb-3">{title}</h1>
            <p className="text-base-content/80 mb-4">{description}</p>

            {/* Category & Price */}
            <div className="flex items-center justify-between mb-4">
              <span className="badge badge-outline capitalize">{category}</span>
              <span className="text-green-600 font-semibold text-lg">
                ${price}
              </span>
            </div>

            {/* Classes List */}
            <h2 className="text-xl font-semibold mb-2 text-[#F16623]">
              Classes
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {classes?.map((cls, idx) => (
                <li key={idx} className="text-base-content/80">
                  {cls.title}
                </li>
              ))}
            </ol>
          </div>

          {/* Enroll Button */}
          <div className="mt-6 flex justify-start">
            <button className="btn bg-[#F16623] text-white text-lg rounded-xl px-6 py-2 hover:opacity-90 transition">
              Enroll Now
            </button>
          </div>

          {/* Back Link */}
          <div className="mt-4">
            <Link
              to="/courses"
              className="text-[#F16623] underline hover:text-[#c4551f]"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
