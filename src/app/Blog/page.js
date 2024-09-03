"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { BlogsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const page = () => {
  const [blogs, setBlog] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

  const toggleContent = (blogId) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    try {
      const { admins } = await BlogsCount();
      setBlog(admins);
    } catch (error) {
      console.log(`Failed to fetch blog: ${error}`);
    }
  };

  return (
    <div className="bg-white">
      <Top />
      <div
        className="max-w-full h-auto flex justify-center items-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-36">
          <div className="text-custom-blue text-2xl md:text-6xl font-bold flex justify-center items-center">
            BLOGS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center text-md font-medium">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-14 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Blogs</span>
          </a>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-12/12 m-auto">
        <div className="flex justify-center items-center flex-wrap gap-7">
          {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> */}
          {blogs.map((blogData) => (
            <div
              className="relative my-5"
              style={{ width: "350px" }}
              key={blogData._id}
            >
              <Image
                src={`/uploads/${blogData.image}`}
                alt={blogData.image}
                width={468}
                height={358}
                className="h-60"
              />
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-3">
                  {blogData.blogtitle}
                </h2>

                <div className="w-11/12">
                  <div className="flex items-center justify-between">
                    <Image
                      src={`/uploads/${blogData.image}`}
                      alt="author Img"
                      width={31}
                      height={31}
                    />
                    <p className="text-base font-bold">{blogData.author}</p>
                    <div className=" w-6 border-1 border-gray-300"></div>
                    <p className="text-sm text-pClr">
                      {blogData.datetime
                        ? // Assuming blog.datetime is a string like "2024-06-28T00:00:00.000+00:00"
                          (() => {
                            let dt = new Date(blogData.datetime); // Convert to Date object

                            // Check if dt is a valid Date object before accessing its methods
                            return dt instanceof Date
                              ? `${dt.getDate()} ${dt.toLocaleString("en-US", {
                                  month: "long",
                                })} ${dt.getFullYear()}`
                              : "Invalid Date";
                          })()
                        : "No Date Available"}
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  </div>

                  <p className="my-5 text-pClr leading-6">
                    {expandedBlogs[blogData._id] ? (
                      blogData.description
                    ) : (
                      <>{blogData.description.substring(0, 70)}...</>
                    )}
                  </p>
                  <button
                    className="button-filled"
                    onClick={() => toggleContent(blogData._id)}
                  >
                    {expandedBlogs[blogData._id] ? "Show Less" : "Load More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
