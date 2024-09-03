"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import AddNewProModal from "../components/AddNewProjectModal";
import UpdateProjectModal from "../components/Updates/UpdateModelForProject";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "@/app/helper/verifytoken";
import { useRouter } from "next/navigation";
import { ProjectsCount } from "../components/ShowApidatas/ShowUserAPiDatas";
import { API_URL_Projects } from "../components/ShowApidatas/apiUrls";
const ProjectTable = () => {
  const router = useRouter();
  const [showmodal, setShowModal] = useState(false);
  const [showProjectModel, setShowProjectModel] = useState(false);
  const [showAllPro, setShowAllPro] = useState([]);
  const [selectedProId, setSelectedProId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeam, setFilteredTeam] = useState([]);
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/AdminDashboard/Login");
      return;
    }
    fetchProjects();
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = showAllPro.filter((team) =>
      team.ProjectName.toLowerCase().includes(value)
    );
    setFilteredTeam(filtered);
  };
  const fetchProjects = () => {
    ProjectsCount()
      .then(({ admins }) => {
        setShowAllPro(admins);
      })
      .catch((error) => {
        console.log(`Failed to fetch projects: ${error}`);
        setShowAllPro([]);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL_Projects}/${id}`);
      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project.");
    }
  };

  const handleEdit = (id) => {
    setSelectedProId(id);
    setShowProjectModel(true);
  };

  return (
    <>
      <Header className="min-w-full" />
      <div className="flex gap-4">
        <Sidebar />
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowModal(true)}
            >
              Add New Project
            </button>
          </div>
          <div className="overflow-x-auto h-[500px]">
            <input
              type="text"
              placeholder="Search by Project Name"
              className="border border-gray-300 px-3 py-2 rounded-md mr-2 mb-3"
              value={searchTerm}
              onChange={handleSearch}
            />
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.no</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Project Name</th>
                  <th className="px-4 py-2">Project Category Name</th>
                  <th className="px-4 py-2">Project Description</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {showAllPro.length > 0 ? (
                  /* showAllPro.map((pro, idx) => ( */
                  (searchTerm !== "" ? filteredTeam : showAllPro).map(
                    (pro, idx) => (
                      <tr key={pro._id} className="border-2 border-b-gray-400">
                        <td className="px-4 py-2">{idx + 1}</td>
                        <td className="px-4 py-2">
                          <Image
                            src={`/uploads/${pro.Image}`}
                            alt="Project Image"
                            className="h-16 w-16 object-cover"
                            width={40}
                            height={40}
                          />
                        </td>
                        <td className="px-4 py-2">{pro.ProjectName}</td>
                        <td className="px-4 py-2">{pro.ProjectCategory}</td>
                        <td className="px-4 py-2">
                          <div className="overflow-y-scroll no-scrollbar max-h-[4rem] leading-[1.2rem]">
                            {pro.ProjectDescription}
                          </div>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-green-500 px-2 py-1 rounded hover:underline"
                            onClick={() => handleEdit(pro._id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button
                            className="text-red-500 hover:underline"
                            onClick={() => handleDelete(pro._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )
                ) : showAllPro.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      <p>No Project available.</p>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      <p>Please wait while loading...</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showmodal && (
            <AddNewProModal
              isclose={() => setShowModal(false)}
              getallprojects={fetchProjects}
            />
          )}
          {showProjectModel && (
            <UpdateProjectModal
              isclose={() => setShowProjectModel(false)}
              proId={selectedProId}
              getallprojects={fetchProjects}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectTable;
