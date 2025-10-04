import React from "react";

const Join = () => {
  return (
    <div className="mb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">
        Want to join with us?
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch ">
        <div className="flex-1 bg-base-300 p-10 rounded-xl space-y-4">
          <p className="text-lg font-medium ">Join Webinar about</p>
          <h1 className="text-5xl text-error font-bold">Study in Canada</h1>
          <h1 className="text-3xl font-semibold ">
            Apply for 2025 December intakes
          </h1>
          <button className="btn bg-[#F16623] text-white text-base">
            Register Now
          </button>
        </div>

        <div className="flex-1  bg-base-300 p-10 rounded-xl  space-y-4">
          <p className="text-lg font-medium">Just started new</p>
          <h1 className="text-5xl text-info  font-bold">IELTS Batches</h1>
          <h1 className="text-md md:text-lg">
            Accepted in more than 10K institutions around the world.
          </h1>
          <button className="btn bg-[#F16623] text-white text-base">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
