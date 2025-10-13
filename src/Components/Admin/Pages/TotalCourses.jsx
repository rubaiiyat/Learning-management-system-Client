import axios from "axios";
import { BookOpen } from "lucide-react";
import React, { useEffect, useState } from "react";

const TotalCourses = () => {
  const [totalCourse, setTotalCourse] = useState(0);

  useEffect(() => {
    const course = axios
      .get("https://lms-server-henna.vercel.app/courses")
      .then((res) => setTotalCourse(res.data.course));
  }, []);
  return (
    <div>
      <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
        <BookOpen className="text-[#F16623]" size={24} />
        <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
          Total Courses
        </h3>
        <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">
          {totalCourse.length}
        </p>
      </div>
    </div>
  );
};

export default TotalCourses;
