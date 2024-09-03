import axios from "axios";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL_Projects } from "../ShowApidatas/apiUrls";

const UpdateProjectModal = ({ isclose, proId, getallprojects }) => {
  console.log(proId);
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    ProCategory: "",
    ProName: "",
    ProDiscription: "",
    Image: "",
  });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Image: e.target.files[0],
    });
  };

  const showalladmins = () => {
    axios
      .get(`${API_URL_Projects}/${proId}`)
      .then((res) => {
        const adminData = res.data.Result;
        setFormData({
          ProName: adminData.ProjectName,
          ProCategory: adminData.ProjectCategory,
          ProDiscription: adminData.ProjectDescription,
          Image: adminData.Image,
        });
        setImagePreview(adminData.Image);
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };
  useEffect(() => {
    showalladmins();
  }, []);
  const sendMessage = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("ProjectName", formData.ProName);
    formDataToSend.append("ProjectCategory", formData.ProCategory);
    formDataToSend.append("ProjectDescription", formData.ProDiscription);
    if (formData.Image) {
      formDataToSend.append(
        "Image",
        formData.Image ? formData.Image : imagePreview
      );
    }
    console.log(
      formData.ProName,
      formData.ProCategory,
      formData.ProDiscription,
      formData.Image
    );
    try {
      const response = await axios.put(`${API_URL}/${proId}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      toast.success("project updated successfully");
      isclose();
      getallprojects();
      setFormData({
        ProName: "",
        ProCategory: "",
        ProDiscription: "",
        Image: "",
      });
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Error updating project");
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
        <h2 className="text-xl font-semibold text-gray-950">Update Project</h2>
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
        </section>
        <section className="w-5/6 m-auto flex pb-6 rounded-full">
          <div className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black">
            <label className="block">
              <span className="text-gray-950">Upload file</span>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="w-[200px] h-24 mb-4">
            {imagePreview ? (
              <img
                src={"/uploads/" + imagePreview}
                alt={`Profile Picture of ${formData.UserName}`}
                className="profile-picture"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                {/* <span className="text-gray-400">No Image</span> */}
                <img
                  src="https://static.thenounproject.com/png/363639-200.png"
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            )}
          </div>
        </section>
        <button
          className="border-2 bg-white text-black p-2 rounded-md hover:shadow-md hover:shadow-cyan-400"
          onClick={sendMessage}
        >
          Update Project
        </button>
      </div>
    </div>
  );
};

export default UpdateProjectModal;
