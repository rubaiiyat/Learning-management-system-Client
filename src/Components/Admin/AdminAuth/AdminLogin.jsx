const AdminLogin = () => {
  return (
    <div className="mt-10 flex items-center justify-center space-y-5">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl border border-base-300 p-8 sm:p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2 text-base-content">
          Admin Login
        </h2>
        <p className="text-center text-base-content/70 mb-6">
          Access the admin dashboard to manage users, courses, and settings.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              //   {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full rounded"
            />
            {/*  {errors.email && (
              <p className="text-error text-sm mt-1">Email is required</p>
            )} */}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              //   {...register("password", { required: true })}
              placeholder="Enter password"
              className="input input-bordered w-full rounded"
            />
            {/* {errors.password && (
              <p className="text-error text-sm mt-1">Password is required</p>
            )} */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90 transition"
          >
            {/* {loading ? "Login...." : "Login"} */}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
