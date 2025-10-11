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
import { Link, useNavigate } from "react-router";
import TotalCourses from "../Pages/TotalCourses";
import RegisterdStudents from "../Pages/RegisterdStudents";
import AssignmentGrades from "../Pages/AssignmentGrades";
import AdminList from "../AdminList/AdminList";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AdminDashboard = () => {
  const { userLogout } = useContext(AuthContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <Link
            to={"/admin/add-course"}
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <BookOpen size={18} /> Add Course
          </Link>
          <Link
            to={"/assignment-marks"}
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] transition text-sm md:text-base"
          >
            <ClipboardList size={18} /> Assignment Marks
          </Link>
          <button
            onClick={userLogout}
            className="flex items-center gap-3 p-2 rounded hover:bg-[#F16623]/10 hover:text-[#F16623] hover:cursor-pointer transition text-sm md:text-base"
          >
            <Settings size={18} /> Logout
          </button>
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
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <TotalCourses></TotalCourses>

          <RegisterdStudents></RegisterdStudents>

          <AssignmentGrades></AssignmentGrades>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <AdminList></AdminList>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
