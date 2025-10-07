import React, { useState } from "react";
import {
  Users,
  BookOpen,
  ClipboardList,
  UserPlus,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const admin = {
    name: "Abir Rubaiyat",
    role: "Super Admin",
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-base-100 border-r border-base-300 p-6 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#F16623]">Admin Panel</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-base-300"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="space-y-3">
          <Link
            to={"/admin/register"}
            className="flex items-center gap-3 p-2 rounded  transition text-sm md:text-base hover:bg-[#F16623]/10 hover:text-[#F16623]"
          >
            <UserPlus size={18} /> Add New Admin
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <BookOpen size={18} /> Add Course
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <ClipboardList size={18} /> Assignment Marks
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <Users size={18} /> Manage Students
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <Settings size={18} /> Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623]0 transition text-sm md:text-base"
          >
            <Settings size={18} /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 w-full">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg hover:bg-base-300"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-base-content">
              Dashboard Overview
            </h1>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src={admin.image}
              alt="Admin"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-base-300"
            />
            <div className="hidden sm:block">
              <h3 className="font-semibold text-sm md:text-base">
                {admin.name}
              </h3>
              <p className="text-xs md:text-sm text-base-content/60">
                {admin.role}
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
            <BookOpen className="text-[#F16623]" size={24} />
            <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
              Total Courses
            </h3>
            <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">12</p>
          </div>

          <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
            <Users className="text-[#F16623]" size={24} />
            <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
              Registered Students
            </h3>
            <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">240</p>
          </div>

          <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
            <ClipboardList className="text-[#F16623]" size={24} />
            <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
              Assignments Graded
            </h3>
            <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">180</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#F16623]">
            Admin Team
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-base-100 border border-base-300 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 1}`}
                  alt="Admin"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 md:mb-3"
                />
                <h3 className="font-semibold text-sm md:text-base">
                  Admin {i + 1}
                </h3>
                <p className="text-xs md:text-sm text-base-content/70">
                  Role: Instructor
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
