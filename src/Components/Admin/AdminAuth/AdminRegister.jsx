import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const AdminRegister = () => {
  const { createAdmin, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (data.password != data.confirmPassword) {
        return toast.error("Password doesn't match");
      } else if (data.password.length < 6) {
        return toast.error("Password must contain at least 6 characters");
      }

      const userCreated = await createAdmin(data.email, data.password);
      if (!userCreated) return;
      const response = await axios.post("http://localhost:3000/users", data);
      toast.success("New admin created successfully!");
      navigate("/admin/dashboard");
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-10 mb-20 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-base-100 shadow-xl rounded-2xl border border-base-300 p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">Add New Admin</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("fullName", { required: true })}
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
                {...register("email", { required: true })}
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
                {...register("image", { required: true })}
                className="input input-bordered w-full rounded"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Gender</span>
              </label>
              <select
                name="gender"
                {...register("gender", { required: true })}
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
                {...register("password", { required: true })}
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
                {...register("confirmPassword", { required: true })}
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
              {...register("role", { required: true })}
              className="select select-bordered w-full rounded"
              defaultValue="Admin"
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
