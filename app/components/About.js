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
  ];

  return (
    <section id="about">
      <div className="my-16 pb-12 md:my-20 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              A little more about me:
            </h1>
            <p>
              Hi, my name is Leon and I am a Fullstack Developer who switched
              career path after graduating from Law School.
            </p>
            <br />
            <p>
              When I'm not coding, I'm probably either working out, reading a
              good book, or playing chess. I am also interested in art, music
              and languages, among other things.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, id) => {
                return (
                  <p
                    key={id}
                    className="bg-gray-200 px-4 py-4 mr-2 mt-2 text-gray-500 rounded font-semibold"
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
