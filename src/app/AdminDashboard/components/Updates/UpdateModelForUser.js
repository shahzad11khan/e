"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAdminModal = ({ isclose, adminId, getadmins }) => {
  console.log(adminId);
  const [imagePreview, setImagePreview] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConformPassword: "",
    Image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const API_URL = "/api/Users";

  const showalladmins = () => {
    axios
      .get(`${API_URL}/${adminId}`)
      .then((res) => {
        const adminData = res.data.Result;
        setFormData({
          UserName: adminData.username,
          Email: adminData.email,
          Password: adminData.confirmpassword,
          ConformPassword: adminData.confirmpassword,
          Image: adminData.Image,
        });
        setImagePreview(adminData.Image);
      })
      .catch((error) => {
        console.log(`error : ${error}`);
      });
  };

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
    showalladmins();
  }, []);

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

  const updateAdmin = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.UserName);
    formDataToSend.append("email", formData.Email);
    formDataToSend.append("password", formData.Password);
    formDataToSend.append("confirmpassword", formData.ConformPassword);
    if (formData.Image) {
      formDataToSend.append(
        "Image",
        formData.Image ? formData.Image : imagePreview
      );
    }

    if (formData.Password !== formData.ConformPassword) {
      toast.warn("Password and ConfirmPassword is not match");
      return;
    }
    console.log(
      formData.UserName,
      formData.Email,
      formData.Password,
      formData.ConformPassword,
      formData.Image
    );
    try {
      const response = await axios.put(
        `${API_URL}/${adminId}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      toast.success("Admin updated successfully");
      getadmins();
      isclose();
      setFormData({
        UserName: "",
        Email: "",
        Password: "",
        ConformPassword: "",
        Image: "",
      });
      router.push("/AdminDashboard/RegisterAdmin");
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Error updating admin");
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
        <h2 className="text-xl font-semibold text-gray-950">
          Update Admin Record
        </h2>

        <section className="grid grid-cols-2 gap-4">
          {/* image */}

          {/* end image */}
          <div>
            <label htmlFor="UserName" className="text-gray-950">
              UserName :
            </label>
            <br />
            <input
              type="text"
              id="UserName"
              name="UserName"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.UserName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Email" className="text-gray-950">
              Email :
            </label>
            <br />
            <input
              type="email"
              id="Email"
              name="Email"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative">
            <label htmlFor="Password" className="text-gray-950">
              Password :
            </label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              name="Password"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.Password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8 0-1.05.202-2.052.567-2.971m4.243 10.908A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M20.426 9.54A9.978 9.978 0 0119 12c0 4.418-3.582 8-8 8-2.019 0-3.884-.597-5.433-1.625M12 5c2.019 0 3.884.597 5.433 1.625m1.64 8.86a9.978 9.978 0 001.393-5.485c0-4.418-3.582-8-8-8-2.019 0-3.884.597-5.433 1.625m4.242 10.907A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M3.5 3.5L20.5 20.5"
                  />
                </svg>
              ) : (
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c2.045 0 3.974.623 5.56 1.688M20.542 12C19.268 16.057 15.478 19 11 19c-2.045 0-3.974-.623-5.56-1.688M12 5v.01"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="relative">
            <label htmlFor="ConformPassword" className="text-gray-950">
              ConformPassword :
            </label>
            <br />
            <input
              type={showConformPassword ? "text" : "password"}
              id="ConformPassword"
              name="ConformPassword"
              className="mt-1 px-3 py-1.5 w-full rounded-md border-gray-400 border focus:outline-none focus:border-indigo-500 text-black"
              value={formData.ConformPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="absolute inset-y-12 right-0 pr-3 flex items-center text-sm leading-5 text-black"
              onClick={() => setShowConformPassword(!showConformPassword)}
            >
              {showConformPassword ? (
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8 0-1.05.202-2.052.567-2.971m4.243 10.908A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M20.426 9.54A9.978 9.978 0 0119 12c0 4.418-3.582 8-8 8-2.019 0-3.884-.597-5.433-1.625M12 5c2.019 0 3.884.597 5.433 1.625m1.64 8.86a9.978 9.978 0 001.393-5.485c0-4.418-3.582-8-8-8-2.019 0-3.884.597-5.433 1.625m4.242 10.907A9.977 9.977 0 0112 17c2.019 0 3.884-.597 5.433-1.625M3.5 3.5L20.5 20.5"
                  />
                </svg>
              ) : (
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c2.045 0 3.974.623 5.56 1.688M20.542 12C19.268 16.057 15.478 19 11 19c-2.045 0-3.974-.623-5.56-1.688M12 5v.01"
                  />
                </svg>
              )}
            </button>
          </div>

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
          <div className="w-24 h-24 mb-4">
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
          onClick={updateAdmin}
        >
          Update Admin
        </button>
      </div>
    </div>
  );
};

export default UpdateAdminModal;
