import React, { useContext, useEffect, useState } from "react";
import { Edit3, BookOpen, Award } from "lucide-react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import { Link } from "react-router";
import UserAssignmentMarks from "./UserAssignmentMarks";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/users?email=${user.email}`)
        .then((res) => {
          setUserData(res.data.result[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <div className=" bg-base-100 p-6 transition-colors duration-300">
      {/* Header */}
      <header className="shadow-md rounded-2xl bg-base-200 p-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-base-content">
          Welcome, <span className="text-[#F16623]">{userData?.fullName}</span>{" "}
          👋
        </h1>
      </header>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile Section */}
        <div className="rounded-2xl bg-base-200 shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={userData?.image}
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-[#F16623] object-cover"
            />
            <h2 className="text-xl font-semibold mt-3 text-base-content">
              {userData?.fullName}
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-base-content/70">
              <p>{userData?.email}</p>
              <span className="text-gray-400">•</span>
              <p className="capitalize">{userData?.gender}</p>
            </div>

            <Link
              to={"/user/update-profile"}
              className="mt-4 flex items-center gap-2 bg-[#F16623] text-white px-4 py-2 rounded-full hover:bg-[#f97238] transition hover:cursor-pointer"
            >
              <Edit3 size={18} /> Edit Profile
            </Link>
          </div>
        </div>

        {/* Middle: Assignments List */}
        <div className="lg:col-span-2 bg-base-200 rounded-2xl shadow-md p-6">
          <UserAssignmentMarks></UserAssignmentMarks>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
