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
        "A full stack web application, where users can track their books and reading progress, add friends, create groups, and more.",
      techStack: "Next.js, TypeScript, PrismaORM, Tailwind CSS, Supabase",
      imageSrc: "/Booknook-Screenshot.jpg",
      githubLink: "",
      siteLink: "",
      WIP: true,
    },
    {
      name: "Chroma Corps",
      description:
        "A website created for popular YouTuber 'Sinix' (1 million+ subscribers), used for organising and showcasing his annual Chroma Corps art contest.",
      techStack: "Next.js, TypeScript, Tailwind CSS, Cloudflare",
      imageSrc: "/Chroma-Corps-Screenshot.jpg",
      githubLink: "https://github.com/p4nthera115/chroma-corps-2.0",
      siteLink: "https://www.chroma-corps.com/",
      WIP: true,
    },
    {
      name: "Gibraltar Freemasonry Website",
      description:
        "Designed and developed the official website for Freemasonry in Gibraltar.",
      techStack: "HTML, CSS, Bootstrap, jQuery",
      imageSrc: "/Gib-Freemasonry-Website.jpg",
      githubLink: "",
      siteLink: "https://gibfreemasonry.gi/index.html",
      WIP: true,
    },
    {
      name: "Airbnb Clone",
      description: "A recreation of the Airbnb website with full functionality",
      techStack: "Next.js, TypeScript, MongoDB, Prisma ORM, Tailwind CSS",
      imageSrc: "/key-2114044_1280.webp",
      githubLink: "https://github.com/Lifguson/airbnb-clone",
      siteLink: "https://property-rental-clone.vercel.app/",
      WIP: false,
    },
    {
      name: "Task Tracker",
      description:
        "A simple fullstack CRUD application implementing user authentication",
      techStack: "React, Node.js, Express.js, MongoDB",
      imageSrc: "/task-tracker.png",
      githubLink: "",
      siteLink: "",
      WIP: false,
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
                    <p className="text-lg leading-7 mb-4 text-teal-500 font-semibold">
                      {project.techStack}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.githubLink !== "" && (
                        <Link href={project.githubLink} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.siteLink !== "" && (
                        <Link href={project.siteLink} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
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
