import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import { AuthContext } from "../Context/AuthProvider";

const LearnClass = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    if (!userEmail) return;
    async function fetchCourse() {
      try {
        const res = await axios.get(
          `https://lms-server-henna.vercel.app/course/${id}`
        );
        setCourse(res.data.result);
      } catch (err) {
        console.error("Error fetching course or enrollment:", err);
        setCourse(null);
      }
    }

    fetchCourse();
  }, [id, userEmail]);

  if (!course) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 text-base-content transition-colors duration-300">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* ===== LEFT SIDE : CLASS LIST ===== */}
        <div className="lg:w-1/3 w-full p-6">
          <div className="bg-base-200 rounded-2xl shadow-lg p-6 sticky top-6 border border-base-300">
            <div className="mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text text-transparent">
                {course.title}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-sm text-base-content/70">
                <span>📚</span>
                <span>{course.classes?.length || 0} classes available</span>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F16623] rounded-full"></span>
              Class List
            </h2>

            {/* ===== CLASS LIST ===== */}
            <div className="space-y-3">
              {course?.classes && course.classes.length > 0 ? (
                course.classes.map((cls, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedClass(cls)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] group ${
                      selectedClass?.title === cls.title
                        ? "border-[#F16623] bg-gradient-to-r from-[#F16623]/10 to-[#F16623]/5 shadow-lg shadow-[#F16623]/20"
                        : "border-base-300 bg-base-100 hover:border-base-300 hover:bg-base-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          selectedClass?.title === cls.title
                            ? "bg-[#F16623] text-white"
                            : "bg-base-300 group-hover:bg-base-300 group-hover:text-base-content"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <span
                          className={`font-semibold block transition-colors ${
                            selectedClass?.title === cls.title
                              ? "text-[#F16623]"
                              : "group-hover:text-base-content"
                          }`}
                        >
                          {cls.title}{" "}
                          {cls.duration && (
                            <span className="text-sm opacity-70 px-1">
                              ({cls.duration})
                            </span>
                          )}
                        </span>
                      </div>
                      {selectedClass?.title === cls.title && (
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-[#F16623] rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-base-content/70">
                    No classes available yet
                  </p>
                </div>
              )}

              {/* Submit Assignment Button */}

              <div className="pt-4">
                <button className="w-full py-3 bg-[#F16623] text-white font-semibold rounded-lg hover:bg-[#d6551f] transition-colors">
                  <Link
                    to={`/submit-assignment/${course._id}/${course.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Submit Assignment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE : VIDEO PLAYER ===== */}
        <div className="lg:w-2/3 w-full p-6">
          <div className="bg-base-200 rounded-2xl shadow-lg p-6 border border-base-300 min-h-[600px] flex items-center justify-center">
            {selectedClass ? (
              <div className="w-full max-w-4xl">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#F16623] to-[#ff8c42] bg-clip-text text-transparent">
                    {selectedClass.title}
                  </h2>
                  {selectedClass.time && (
                    <p className="text-base-content/70 mt-2 flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-[#F16623] rounded-full"></span>
                      🕒 {selectedClass.time}
                    </p>
                  )}
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-base-300 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedClass.youtube}
                    title={selectedClass.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="btn bg-[#F16623] border-[#F16623] text-white hover:bg-[#e55a1a] hover:border-[#e55a1a] transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Mark as Completed
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold mb-3">
                  Welcome to {course.title}
                </h3>
                <p className="text-base-content/70 text-lg mb-6 max-w-md">
                  Select a class from the list to start your learning journey
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    className="btn bg-[#F16623] border-[#F16623] text-white hover:bg-[#e55a1a] hover:border-[#e55a1a]"
                    onClick={() =>
                      course.classes?.[0] && setSelectedClass(course.classes[0])
                    }
                  >
                    Start First Class
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnClass;
