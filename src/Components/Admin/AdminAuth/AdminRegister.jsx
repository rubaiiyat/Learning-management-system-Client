import React from "react";

const AdminRegister = () => {
  return (
    <div className="mt-10 mb-20 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-base-100 shadow-xl rounded-2xl border border-base-300 p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">Add New User</h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name + Email */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                className="input input-bordered w-full rounded"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="input input-bordered w-full rounded"
                required
              />
            </div>
          </div>

          {/* Image + Gender */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Profile Image Link
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Paste image URL"
                className="input input-bordered w-full rounded"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <select
                name="gender"
                className="select select-bordered w-full rounded"
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Password + Confirm Password */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full rounded"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                className="input input-bordered w-full rounded"
                required
              />
            </div>
          </div>

          {/* Role Selection */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Role</span>
            </label>
            <select
              name="role"
              className="select select-bordered w-full rounded"
              defaultValue="admin"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
