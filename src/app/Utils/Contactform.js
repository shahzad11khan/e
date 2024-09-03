"use client";
import React, { useState } from "react";
import { API_URL_GetInTouch } from "../AdminDashboard/components/ShowApidatas/apiUrls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contactform = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else {
      const wordCount = formData.message.trim().split(/\s+/).length;
      if (wordCount < 5 || wordCount > 100) {
        tempErrors.message = "Message must be between 5 and 100 words";
      }
    }
    setErrors(tempErrors);
    // toast.warning(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post(`${API_URL_GetInTouch}`, formData);
        toast.success("Message sent successfully!");
        setFormData({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("There was an error sending the message!", error);
        toast.success("There was an error sending the message!");
      }
    }
  };
  return (
    <div className="flex items-center justify-center" id="form">
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col my-20 bg-custom-color w-5/6 rounded-md">
        {/* <div className="flex items-center justify-center lg:w-1/2 md:w-1/2 sm:w-full">
          <div className="w-full py-12 px-10">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-b mb-4 px-4 py-2 focus:outline-none bg-transparent"
            />

            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col mb-4 pb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full lg:w-1/2 md:w-1/2 sm:w-full border-b px-4 py-2 focus:outline-none bg-transparent mb-2 md:mb-0 sm:mb-2 md:mr-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full lg:w-1/2 md:w-1/2 sm:w-full border-b px-4 py-2 focus:outline-none bg-transparent sm:ml-0 md:ml-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="9"
              className="w-full border-2 rounded-md mb-4 px-4 py-2 focus:outline-none bg-transparent"
            ></textarea>

            <button
              type="submit"
              className="w-full lg:w-2/6 bg-custom-blue text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </div> */}
        <div className="flex items-center justify-center lg:w-1/2 md:w-1/2 sm:w-full">
          <div className="w-full py-12 px-10">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border-b mb-4 px-4 py-2 focus:outline-none bg-transparent"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
              <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col mb-4 pb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full lg:w-1/2 md:w-1/2 sm:w-full border-b px-4 py-2 focus:outline-none bg-transparent mb-2 md:mb-0 sm:mb-2 md:mr-2"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full lg:w-1/2 md:w-1/2 sm:w-full border-b px-4 py-2 focus:outline-none bg-transparent sm:ml-0 md:ml-2"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="9"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 rounded-md mb-4 px-4 py-2 focus:outline-none bg-transparent"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
              <button
                type="submit"
                className="w-full lg:w-2/6 bg-custom-blue text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div
          className="lg:w-1/2 md:w-1/2 sm:w-full"
          style={{
            backgroundImage: "url('/backgrounds/Rectangle-17.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="py-10 px-3 flex flex-col gap-3">
            <div className="text-white font-bold text-3xl">
              <p>HAVE A PROJECT?</p>
              <p>GET IN TOUCH.</p>
            </div>
            <div className="font-bold text-2xl text-gray-900">
              THINK WE DO NEXT.
            </div>
            <div className="text-md text-white pl-4 text-xs">
              <ul className="list-disc text-md text-white" id="list">
                <li>
                  After reviewing your dropped text, we will contact you after
                  one working day.
                </li>
                <li className="py-2">
                  A 1-1 meeting with executives, virtual or onsite, will be
                  arranged to understand and discuss your project.
                </li>
                <li>
                  A team of analysts and lead developers will be constituted to
                  further clarify your project by designing the prototype.
                </li>
                <li className="py-2">
                  A final presentation meeting with the executives will be held
                  to discuss the outlook of your project with mutual
                  understanding and deliverables with proper sprint timeline
                  using up-to-date agile methodology of SDLC.
                </li>
                <li>
                  Delivery of the project within a predefined duration of time.
                </li>
                <li className="py-2">
                  A dedicated time for updating/maintaining your project if it
                  comes under the terms and conditions of the agreement.
                </li>
                <li>
                  To ensure credibility, all information exchange will be
                  protected via a mutual NDA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
