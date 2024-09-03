"use client";
import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewProModal = ({ isclose, getallprojects }) => {
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      isclose();
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        isclose();
      }
    },
    [isclose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const [formData, setFormData] = useState({
    ProName: "",
    ProCategory: "",
    ProDiscription: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file || null,
    }));
  };

  const sendMessage = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("ProjectName", formData.ProName);
      formDataToSend.append("ProjectCategory", formData.ProCategory);
      formDataToSend.append("ProjectDescription", formData.ProDiscription);
      if (formData.file) {
        formDataToSend.append("Image", formData.file);
      }

      const response = await axios.post("/api/Project", formDataToSend);

      if (!response.data.success) {
        throw new Error(
          response.data.message || "Failed to create team member"
        );
      } else {
        getallprojects();
        isclose(); // Close the popup window
        toast.success("Project created successfully!");
      }
    } catch (error) {
      toast.error(error.message || "Failed to create admin");
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-4 text-white bg-slate-400 rounded-md p-8 w-[600px]">
        <button className="self-end" onClick={isclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-950">Add New Project</h2>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="ProName" className="text-gray-950">
              Project Name :
            </label>
            <br />
            <input
              type="text"
              id="ProName"
              name="ProName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="ProCategory" className="text-gray-950">
              Category :
            </label>
            <br />
            <input
              type="text"
              id="ProCategory"
              name="ProCategory"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProCategory}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="ProDiscription" className="text-gray-950">
              Discription :
            </label>
            <br />
            <textarea
              type="text"
              id="ProDiscription"
              name="ProDiscription"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ProDiscription}
              onChange={handleInputChange}
            />
          </div>
          <div class="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
            <label class="block">
              <span className="text-gray-950">Upload file</span>
              <input
                onChange={handleFileChange}
                name="file"
                type="file"
                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
          </div>
        </section>

        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default AddNewProModal;
