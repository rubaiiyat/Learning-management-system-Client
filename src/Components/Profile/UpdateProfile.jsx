import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ArrowBigLeft } from "lucide-react";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    gender: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://lms-server-henna.vercel.app/users?email=${user.email}`)
        .then((res) => {
          const userData = res.data.result[0];
          setFormData({
            fullName: userData.fullName,
            image: userData.image,
            gender: userData.gender,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure you want to save these changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://lms-server-henna.vercel.app/user/update/${user.email}`,
            formData
          )
          .then((res) => {
            Swal.fire("Saved!", "", "success");
            navigate("/user/dashboard");
          })
          .catch((err) => {
            Swal.fire("Error!", "Something went wrong", "error");
            console.log(err);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate("/user/dashboard");
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-10 px-4 md:px-0">
        <div className="bg-base-200 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="image"
              placeholder="Profile Image URL"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
            />

            <button
              type="submit"
              className="btn bg-[#F16623] text-white hover:bg-[#f97238] w-full md:w-auto"
            >
              Save Changes
            </button>

            <Link
              to="/user/dashboard"
              className="btn bg-[#F16623] text-white hover:bg-[#f97238] w-full md:w-auto flex items-center justify-center gap-2"
            >
              <ArrowBigLeft /> Back to dashboard
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
