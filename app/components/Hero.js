"use client";

import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4">
        <div className="md:mt-2">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Leon
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">Fullstack Developer</p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={35}
            className="animate-bounce hover:cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
