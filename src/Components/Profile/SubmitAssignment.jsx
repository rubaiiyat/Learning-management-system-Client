import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SubmitAssignment = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const assignmentNumber = "01";
  const { register, handleSubmit, reset } = useForm();

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  useEffect(() => {
    const checkSubmission = async () => {
      try {
        const res = await axios.get("http://localhost:3000/submit-assignment");
        const existing = res.data.result.find(
          (item) =>
            item.courseId === data.result._id && item.userEmail === user.email
        );
        if (existing) {
          setAlreadySubmitted(true);
        }
      } catch (error) {
        console.error("Error checking submission:", error);
      }
    };

    if (user && data?.result?._id) {
      checkSubmission();
    }
  }, [user, data?.result?._id]);

  const onSubmit = async (formData) => {
    if (alreadySubmitted) {
      toast.error(
        `You have already submitted ${data.result.title} assignment!`
      );
      return;
    }

    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You can submit this assignment only once. Make sure your link is correct.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, submit",
        cancelButtonText: "Cancel",
      });

      if (!confirm.isConfirmed) return;

      const submissionData = {
        courseId: data.result._id,
        assignmentName: data.result.title,
        userEmail: user.email,
        assignmentLink: formData.assignmentLink,
        mark: 0,
        status: "Pending",
      };

      const res = await axios.post(
        "http://localhost:3000/submit-assignment",
        submissionData
      );

      toast.success(
        `${data.result.title} - Assignment submitted successfully!`
      );
      reset();
      setAlreadySubmitted(true);
    } catch (error) {
      console.error(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
        if (error.response.data.message.includes("already submitted")) {
          setAlreadySubmitted(true);
        }
      } else {
        toast.error("Failed to submit assignment!");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-base-100 text-base-content">
      <div className="bg-base-200 p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#F16623]">
          Submit Assignment
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Course Name</label>
            <input
              type="text"
              value={data.result.title}
              readOnly
              className="input input-bordered w-full bg-base-300 text-base-content"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Assignment Number
            </label>
            <input
              type="text"
              value={assignmentNumber}
              readOnly
              className="input input-bordered w-full bg-base-300 text-base-content"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Assignment Link{" "}
              <span className="text-sm text-warning">(Required)</span>
            </label>
            <textarea
              placeholder="Paste your assignment link here (Google Docs, Drive, or GitHub). Must include screenshot, writing, or file."
              {...register("assignmentLink", { required: true })}
              className="textarea textarea-bordered w-full h-32 bg-base-100 text-base-content resize-none"
            />
            <p className="text-sm text-base-content/70 mt-1">
              Example: Google Docs link, Drive link, or screenshot upload link.
            </p>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#F16623] hover:bg-primary-focus text-white"
          >
            Submit Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignment;
