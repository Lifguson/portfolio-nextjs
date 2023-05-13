"use client";

import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
  const myProjects = [
    {
      name: "Task Tracker",
      description:
        "A simple CRUD application with User Authentication. Created with MongoDB, Express.js, React, Node.js",
      imageSrc: "/tasks-4026398_1280.jpg",
      githubLink: "",
      siteLink: "",
    },
    {
      name: "Airbnb Clone",
      description: "A recreation of Airbnb, using TypeScript",
      imageSrc: "/key-2114044_1280.webp",
      githubLink: "",
      siteLink: "",
    },
    {
      name: "Booknook",
      description:
        "An alternative to Goodreads, which attempts to improve aspects of that site which are lacking",
      imageSrc: "/fantasy-1077863_1280.webp",
      githubLink: "",
      siteLink: "",
    },
  ];

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">Projects</h1>
      <hr />

      <div>
        {myProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    src={project.imageSrc}
                    alt=""
                    height={1000}
                    width={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-60">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
