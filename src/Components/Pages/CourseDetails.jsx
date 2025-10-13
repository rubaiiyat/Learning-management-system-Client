import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const course = data?.result;
  const { _id, title, image, description, category, price, classes } = course;
  const [enrolled, setEnrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Hardcoded code for enrollment
  const ENROLL_CODE = "ABC123";

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://lms-server-henna.vercel.app/myclasses?email=${user.email}`
        )
        .then((res) => {
          const enrolledCourse = res.data.courses.map((c) => c._id);
          if (enrolledCourse.includes(_id.toString())) {
            setEnrolled(true);
          }
        })
        .catch((err) => toast.error(err.message || err));
    }
  }, [user, _id]);

  if (!course) {
    return <div className="text-center py-20 text-lg">loading...</div>;
  }

  const handleEnrollClick = () => {
    if (!user) {
      toast.error("You need to login first!");
      navigate("/login", { state: { from: location } });
      return;
    }
    setShowModal(true);
  };

  const handleSubmitCode = async () => {
    if (inputCode === ENROLL_CODE) {
      try {
        const email = user.email;
        const res = await axios.post(
          "https://lms-server-henna.vercel.app/enroll",
          {
            email,
            courseId: _id,
          }
        );
        toast.success(res.data.message || "Enrolled Successfully!");
        setEnrolled(true);
        setShowModal(false);
        setInputCode("");
      } catch (error) {
        toast.error("Enroll Failed");
      }
    } else {
      toast.error("Wrong code! Try again.");
    }
  };

  return (
    <div className="py-12 px-6 flex justify-center">
      <div className="w-full max-w-5xl rounded-2xl shadow-xl border border-base-300 p-6 flex flex-col md:flex-row gap-6">
        {/* Left Image */}
        <div className="md:w-48 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-48 h-48 md:w-48 md:h-48 object-cover rounded-xl flex-shrink-0"
          />
        </div>

        {/* Right Details */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#F16623] mb-2">{title}</h1>
          <p className="text-base-content/80 mb-3">{description}</p>

          <div className="flex items-center justify-between mb-3">
            <span className="badge badge-outline capitalize">{category}</span>
            <span className="text-green-600 font-semibold text-lg">
              ${price}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#F16623]">
              Classes
            </h2>
            <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-3">
              <ol className="list-decimal list-inside space-y-1">
                {classes?.map((cls, idx) => (
                  <li key={idx} className="text-base-content/80">
                    {cls.title}{" "}
                    {cls.duration && (
                      <span className="text-sm text-gray-500">
                        ({cls.duration})
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Enroll Button */}
          <div className="mt-4 flex justify-start">
            {enrolled ? (
              <Link
                to={`/learn-class/${_id}/${title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="btn bg-[#F16623] text-white text-lg rounded-xl px-6 py-2 hover:opacity-90 transition"
              >
                Go to class
              </Link>
            ) : (
              <button
                onClick={handleEnrollClick}
                className="btn bg-[#F16623] text-white text-lg rounded-xl px-6 py-2 hover:opacity-90 transition"
              >
                Enroll Now
              </button>
            )}
          </div>

          {/* Back Link */}
          <div className="mt-2">
            <Link
              to="/courses"
              className="text-[#F16623] underline hover:text-[#c4551f]"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  flex justify-center items-center z-50">
          <div className="bg-base-300 p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              Enter Enrollment Code
            </h2>
            <p className="mb-4">
              Please enter the following code to enroll:{" "}
              <strong>{ENROLL_CODE}</strong>
            </p>
            <input
              type="text"
              placeholder="Enter code here"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="input input-bordered w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="btn bg-gray-400 hover:bg-gray-500 text-white"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-[#F16623] hover:bg-[#f97238] text-white"
                onClick={handleSubmitCode}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
