import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, loading, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data.email, data.password);
      if (!res) {
        toast.error("Email or password not match!");
        return;
      }
      toast.success("Login successful! Welcome back!");
      navigate(from, { replace: true });
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center space-y-5">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl border border-base-300 p-8 sm:p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2 text-base-content">
          Welcome Back 👋
        </h2>
        <p className="text-center text-base-content/70 mb-6">
          Log in to your account and continue your journey!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full rounded"
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
              className="input input-bordered w-full rounded"
            />
            {errors.password && (
              <p className="text-error text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90 transition"
          >
            {loading ? "Login...." : "Login"}
          </button>

          <button
            onClick={loginWithGoogle}
            type="button"
            className="flex items-center justify-center w-full gap-3 px-4 py-3 rounded-lg border border-gray-300 bg-base-100 hover:bg-base-200 transition shadow-sm hover:cursor-pointer font-medium"
          >
            <FcGoogle size={24} />
            Login with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-4 text-base-content/80">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="text-[#F16623] font-semibold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
