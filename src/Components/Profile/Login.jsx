import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const { loading, setLoading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
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
            {loading ? "Logging in..." : "Login"}
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
