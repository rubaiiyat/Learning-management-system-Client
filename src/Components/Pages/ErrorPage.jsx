import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen px-5">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-red-600 dark:text-red-400">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl md:text-3xl mt-5 text-center">
          Oops! Page not found.
        </p>

        <p className="mt-2 text-center">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="mt-8 bg-[#F16623] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
