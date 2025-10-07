import React from "react";

const AdminRegister = () => {
  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg border border-base-300 p-8 sm:p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[#F16623] mb-2">
          Add New Admin
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#F16623] text-white text-lg rounded hover:opacity-90 transition"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
