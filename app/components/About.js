"use client";

const About = () => {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Framer Motion" },
    { skill: "Node.js" },
    { skill: "MongoDB" },
    { skill: "Express.js" },
    { skill: "PostgreSQL" },
    { skill: "Bootstrap" },
    { skill: "jQuery" },
    { skill: "Python" },
  ];

  return (
    <section id="about">
      <div className="my-16 pb-12 md:my-20 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About me</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded" />

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              I am a Fullstack Developer who switched career paths after
              graduating from Law School and discovering my passion for building
              software.
            </p>
            <br />
            <p>
              When I am not coding, I am probably working out, reading a good
              book, or playing chess.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-neutral-800 dark:bg-gray-100 px-4 py-4 mr-2 mt-2 dark:text-gray-800 text-gray-200 rounded font-semibold dark:shadow-gray-400 shadow-neutral-500 shadow-inner hover:opacity-80"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
