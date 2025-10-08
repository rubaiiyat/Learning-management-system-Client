import React from "react";
import { Link } from "react-router";

const Course = ({ course }) => {
  const { _id, title, image, price, category, description, classes } = course;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
      {/* Course Thumbnail */}
      <figure className="h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Course Body */}
      <div className="card-body p-5">
        {/* Title */}
        <h3 className="card-title text-lg font-semibold text-[#F16623] line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-base-content/70 line-clamp-2">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        )}

        {/* Category & Classes */}
        <div className="mt-3 flex justify-between items-center">
          <span className="badge badge-outline capitalize">{category}</span>
          <span className="text-sm text-base-content/60">
            {classes?.length || 0} Classes
          </span>
        </div>

        {/* Price */}
        {price && (
          <p className="mt-2 text-lg font-semibold text-[#F16623]">${price}</p>
        )}

        {/* Button */}
        <Link
          to={`/courses/${_id}/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="btn bg-[#F16623] hover:opacity-90 text-white rounded-xl mt-3 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Course;
