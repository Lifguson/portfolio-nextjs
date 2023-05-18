"use client";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbarView, setNavbarView] = useState(false);
  const pathname = usePathname();

  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const navItems = [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
    {
      label: "Projects",
      page: "projects",
    },
  ];

  return (
    <header className="w-full mx-auto py-3 px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div className="">
          {/* <div className="flex items-center justify-between py-3 md:py-5 md:block"> */}
          <Link to="home" className="flex align-center">
            {/* <motion.div className="flex align-center justify-center"> */}
            <motion.svg
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              viewBox="-50 -20 100 100"
              className="h-20 left-20 overflow-visible dark:stroke-white stroke-2 hover:opacity-70 hover:cursor-pointer stroke-black"
            >
              <motion.path
                fill="none"
                variants={pathVariants}
                d="M 0 0 M 0 0 L 7.5 56.25 L 18.75 30 L 30 56.25 L 37.5 0 M -7.5 56.25 H -37.5 V 0"
              ></motion.path>
              <motion.path
                fill="none"
                variants={pathVariants}
                d="M 0 -15 L -52.5 -15 V 71.25 H 52.5 V -15 H 0"
              ></motion.path>
            </motion.svg>
            {/* </motion.div> */}
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbarView(!navbarView)}
            >
              {navbarView ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
          {/* </div> */}
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbarView ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, id) => {
                return (
                  <Link
                    key={id}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:opacity-70 dark:text-neutral-100 hover:cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbarView(!navbarView)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-800 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
