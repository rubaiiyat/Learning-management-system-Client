import axios from "axios";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router";

const AddCourse = () => {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      image: "",
      category: "",
      level: "",
      classes: [{ title: "", youtube: "", duration: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "classes",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/courses", data);

      if (response.status === 200) {
        toast.success(`Course "${data.title}" added successfully!`);
        reset();
      } else {
        toast.error("Failed to add course. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the course.");
    }
  };

  return (
    <div className="mt-10 mb-20 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl border border-base-300 p-10">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#F16623]">
          Add New Course
        </h2>
        <p className="text-center text-base-content/70 mb-6">
          Fill the details below to create a new course for students
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Course Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Course Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter course title"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Course Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Course Description</span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter course description"
              className="textarea textarea-bordered w-full rounded"
              rows={4}
            ></textarea>
          </div>

          {/* Course Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Course Price ($)</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true, min: 0 })}
              placeholder="Enter course price"
              className="input input-bordered w-full rounded"
            />
          </div>

          {/* Image + Category + Level */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Cover Image Link</span>
              </label>
              <input
                type="url"
                {...register("image", { required: true })}
                placeholder="Paste your image URL"
                className="input input-bordered w-full rounded"
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full rounded"
              >
                <option value="">Select category</option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="GRE">GRE</option>
                <option value="GMAT">GMAT</option>
                <option value="PTE">PTE</option>
                <option value="SAT">SAT</option>
                <option value="Duolingo">DUOLINGO</option>
              </select>
            </div>

            {/* Level */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Course Level</span>
              </label>
              <select
                {...register("level", { required: true })}
                className="select select-bordered w-full rounded"
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Dynamic Classes */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#F16623]">
              Classes
            </h3>
            {fields.map((cls, index) => (
              <div
                key={cls.id}
                className="bg-base-100 p-4 rounded-2xl border border-base-300 mb-4 shadow-md"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    {...register(`classes.${index}.title`, { required: true })}
                    type="text"
                    placeholder="Class Title"
                    className="input input-bordered w-full rounded"
                  />
                  <input
                    {...register(`classes.${index}.youtube`)}
                    type="url"
                    placeholder="YouTube Link"
                    className="input input-bordered w-full rounded"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <input
                    {...register(`classes.${index}.duration`)}
                    type="text"
                    placeholder="Duration (e.g., 3 weeks)"
                    className="input input-bordered w-full rounded"
                  />
                </div>

                {fields.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-error btn-sm mt-3"
                    onClick={() => remove(index)}
                  >
                    Remove Class
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              className="btn w-48 text-base lg:text-lg rounded bg-success text-white hover:opacity-90 mb-4"
              onClick={() => append({ title: "", youtube: "", duration: "" })}
            >
              + Add New Class
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-lg rounded bg-[#F16623] text-white hover:opacity-90"
          >
            Add Course
          </button>

          <Link
            to={"/admin/dashboard"}
            className="btn w-full text-lg rounded bg-base-300 text-[#F16623] hover:opacity-90"
          >
            Back To Dashboard
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
