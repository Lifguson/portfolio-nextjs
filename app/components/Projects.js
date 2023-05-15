"use client";

import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Projects = () => {
  const myProjects = [
    {
      name: "Booknook",
      description:
        "An alternative to Goodreads, which attempts to improve aspects of that site which are lacking",
      techStack: "Next.js, TypeScript, PrismaORM, Tailwind CSS, Supabase",
      imageSrc: "/fantasy-1077863_1280.webp",
      githubLink: "",
      siteLink: "",
    },
    {
      name: "Task Tracker",
      description:
        "A simple fullstack CRUD application implementing user authentication",
      techStack: "Node.js, Express.js, React, MongoDB",
      imageSrc: "/task-tracker.png",
      githubLink: "",
      siteLink: "",
    },
    {
      name: "Airbnb Clone",
      description: "A recreation of the Airbnb website with full functionality",
      techStack: "Next.js, TypeScript, MongoDB, Prisma ORM, Tailwind CSS",
      imageSrc: "/key-2114044_1280.webp",
      githubLink: "",
      siteLink: "",
    },
  ];

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">Projects</h1>
      <hr className="w-6 h-1 mx-auto mt-6 mb-8 bg-teal-500 border-0 rounded" />

      <div className="flex flex-col space-y-28">
        {myProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.siteLink}>
                      <Image
                        src={project.imageSrc}
                        alt=""
                        height={1000}
                        width={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400 font-semibold">
                      {project.techStack}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.githubLink} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.siteLink} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
