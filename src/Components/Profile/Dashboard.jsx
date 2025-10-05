import React, { useState } from "react";
import { Edit3, BookOpen, Award } from "lucide-react";

const Dashboard = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.displayName || "Student Name",
    email: user?.email || "student@example.com",
    photo: user?.photoURL || "https://i.ibb.co/3yLqv0n/default-user.png",
  });

  const [assignments] = useState([
    { id: 1, title: "JavaScript Basics", mark: 85 },
    { id: 2, title: "React Components", mark: 92 },
    { id: 3, title: "Django Models", mark: 78 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setEditMode(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className=" bg-base-100 p-6 transition-colors duration-300">
      {/* Header */}
      <header className="shadow-md rounded-2xl bg-base-200 p-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-base-content">
          Welcome, <span className="text-[#F16623]">{profile.name}</span> 👋
        </h1>
      </header>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Profile Section */}
        <div className="rounded-2xl bg-base-200 shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={profile.photo}
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-[#F16623] object-cover"
            />
            <h2 className="text-xl font-semibold mt-3 text-base-content">
              {profile.name}
            </h2>
            <p className="text-base-content/70 text-sm">{profile.email}</p>

            <button
              onClick={() => setEditMode(!editMode)}
              className="mt-4 flex items-center gap-2 bg-[#F16623] text-white px-4 py-2 rounded-full hover:bg-[#d4551d] transition"
            >
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>

          {/* Edit Profile Form */}
          {editMode && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-base-content">
                Update Profile
              </h3>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-2 border border-base-300 bg-base-100 rounded-lg mb-2 focus:outline-none focus:border-[#F16623]"
                placeholder="Enter your name"
              />
              <input
                type="text"
                name="photo"
                value={profile.photo}
                onChange={handleChange}
                className="w-full p-2 border border-base-300 bg-base-100 rounded-lg mb-2 focus:outline-none focus:border-[#F16623]"
                placeholder="Enter photo URL"
              />
              <button
                onClick={handleSave}
                className="bg-[#F16623] text-white w-full py-2 rounded-lg hover:bg-[#d4551d] transition"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Middle: Assignments List */}
        <div className="lg:col-span-2 bg-base-200 rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-base-content flex items-center gap-2">
              <BookOpen className="text-[#F16623]" /> Assignment Marks
            </h2>
            <Award className="text-[#F16623]" />
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-[#F16623] text-white">
                  <th className="p-3 text-left rounded-tl-lg">#</th>
                  <th className="p-3 text-left">Assignment</th>
                  <th className="p-3 text-left rounded-tr-lg">Marks</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-base-300 hover:bg-base-100 transition text-base-content"
                  >
                    <td className="p-3">{a.id}</td>
                    <td className="p-3">{a.title}</td>
                    <td
                      className={`p-3 font-semibold ${
                        a.mark >= 80 ? "text-green-500" : "text-yellow-500"
                      }`}
                    >
                      {a.mark}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
