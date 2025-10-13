import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios
      .get("https://lms-server-henna.vercel.app/users")
      .then((res) => {
        const adminUsers = res.data.result.filter(
          (user) => user.role === "Admin"
        );
        setAdmins(adminUsers);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold text-center text-[#F16623] mb-8">
        Admin List
      </h1>

      {admins.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No Admins Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3  gap-6">
          {admins.map((admin) => (
            <div
              key={admin._id}
              className=" rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={admin.image || "https://via.placeholder.com/150"}
                alt={admin.fullName}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[#F16623]"
              />
              <h2 className="text-xl font-semibold mb-1">{admin.fullName}</h2>
              <p className=" mb-2">{admin.email}</p>
              <span className="bg-[#F16623] text-white text-sm px-3 py-1 rounded-full">
                Admin
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminList;
