import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/myclasses?email=${user.email}`)
        .then((res) => {
          setCourses(res.data.courses || []);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [user]);

  if (courses.length === 0) {
    return (
      <div className="text-center py-20 text-lg">
        You haven’t enrolled in any courses yet.
      </div>
    );
  }

  return (
    <div className="py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#F16623] mb-8">My Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {courses.map((course) => (
          <div
            key={course._id}
            className="rounded-xl border border-base-300 shadow-md p-4 "
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold text-[#F16623] mb-2">
              {course.title}
            </h2>
            <p className=" mb-3">{course.description?.slice(0, 80)}...</p>
            <Link
              to={`/myclass/${course._id}/${course.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="btn bg-[#F16623] text-white rounded-lg w-full"
            >
              Go to Class
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
