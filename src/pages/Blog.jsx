import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import blogImage from "../assets/blogimg.jpg";

const blogEntries = [
  {
    title: "Renklerin Dansı",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "Sessizliğin İçinde",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "Doğanın Kalbi",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "Zamanın Ötesi",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "İzler",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    title: "Hayal Gücü",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

const blogPosts = [
  {
    title: "Renklerin Dansı",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus  ",
    align: "start",
  },
  {
    title: "Sessizliğin İçinde",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus...",
    align: "end",
  },
  {
    title: "Doğanın Kalbi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus.",
    align: "start",
  },
  {
    title: "Zamanın Ötesi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus..",
    align: "end",
  },
  {
    title: "İzler",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus.",
    align: "start",
  },
  {
    title: "Hayal Gücü",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisic elit. voluptate quis aspernatur iure soluta nesciunt delectus dolores numquam veniam, error architecto reiciendis? Delectus accusamus..",
    align: "end",
  },
];

const Blog = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="info-box" >
      <div className="flex flex-col md:flex-row gap-4 py-6 px-4 md:px-16">
        <div className="md:w-3/4 w-full relative text-start">
          <div
            className="relative mx-auto"
            data-aos="fade-in"
          >
            <img
              src={blogImage}
              alt="about"
              className="w-full h-64 rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 py-8 bg-black bg-opacity-10 rounded-lg">
              <p className="text-2xl md:text-4xl font-bold">
                Lorem ipsum <br /> dolor sit amet <br />
                consectetur adipisicing
              </p>
            </div>
          </div>
        </div>

        {/**/}
        <div className="md:w-1/4 w-full flex flex-col gap-4 max-h-[400px] md:max-h-[260px] overflow-y-auto">
          {blogEntries.map((entry, index) => (
            <div
              key={index}
              onClick={() => {
                const element = document.getElementById(`post-${index}`);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="p-4 rounded-lg shadow-md cursor-pointer bg-white hover:bg-gray-100 transition"
            >
              <h3 className="text-lg font-bold mb-1">{entry.title}</h3>
              <p className="text-sm text-gray-700 line-clamp-3">
                {entry.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Yazıları */}
      <div className="grid gap-14 px-4 md:px-16 py-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            id={`post-${index}`}
            className={`flex justify-${post.align}`}
            data-aos={post.align === "start" ? "fade-left" : "fade-right"}
          >
            <div className="p-6 shadow-md bg-white text-justify rounded-xl max-w-[1000px] w-full">
              <h2
                className={`text-2xl md:text-4xl font-bold mb-4 ${
                  post.align === "end" ? "text-end" : ""
                }`}
              >
                {post.title}
              </h2>
              <p className="text-md">{post.content.repeat(4)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
