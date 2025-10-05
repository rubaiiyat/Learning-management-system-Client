import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, loading, setLoading, OwnError, setOwnError } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
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

      const userCreated = await createUser(data.email, data.password);
      if (!userCreated) return;
      const response = await axios.post("http://localhost:3000/users", data);
      toast.success("Account created successfully! Please login to continue.");
      navigate("/login");
      data.reset();
    } catch (error) {
      setOwnError(error.message);
    }
  };

  return (
    <div className="mt-10 mb-20 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-base-100 shadow-xl rounded-2xl border border-base-300 p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-center text-base-content/70 mb-6">
          Join us today and explore endless possibilities!
        </p>

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
                {...register("fullName", { required: true })}
                placeholder="Enter your full name"
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
                {...register("email", { required: true })}
                placeholder="Enter your email"
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
                {...register("image", { required: true })}
                placeholder="Paste your image URL"
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
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
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
                {...register("confirmPassword", { required: true })}
                placeholder="Re-enter password"
                className="input input-bordered w-full rounded"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90"
          >
            {loading ? "Registering....." : "Register"}
          </button>

          {/* Login Link */}
          <p className="text-center mt-2 text-base-content/80">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#F16623] font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
