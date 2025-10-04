import React from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    toast(
      "Your message has been successfully submitted! We will contact you very soon.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  };
  return (
    <div>
      <ToastContainer />
      <div className=" flex flex-col items-center px-5 py-10 mb-20">
        {/* Page Heading */}
        <h1 className="text-5xl font-bold mb-8 text-center text-[#F16623]">
          Contact Us
        </h1>

        {/* Contact Info + Form */}
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="bg-base-200 p-10 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p>
              We are here to answer your questions. Reach out to us via call or
              email.
            </p>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Toll Free:</span> +1234 568 963
              </p>
              <p>
                <span className="font-semibold">Working Hours:</span> 9:AM to
                8:PM IST
              </p>
              <p>
                <span className="font-semibold">Email:</span> eduport@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-base-300 bg-base-100 "
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-base-300 bg-base-100"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-base-300 bg-base-100 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#F16623] text-white font-semibold py-3 px-6 rounded-lg hover:cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
