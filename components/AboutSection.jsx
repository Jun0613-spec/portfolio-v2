import React from "react";

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "TypeScript" },
//   { skill: "Java" },
//   { skill: "React" },
//   { skill: "Next.js" },
//   { skill: "Express.js" },
//   { skill: "Prisma ORM" },
//   { skill: "Drizzle ORM" },
//   { skill: "Tailwind CSS" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "Spring Boot" },
//   { skill: "MySQL" },
//   { skill: "React-query" },
//   { skill: "Zustand" },
//   { skill: "NodeJS" },
//   { skill: "MongoDB" },
//   { skill: "Postgresql" },
//   { skill: "Debugging" }
// ];

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java"]
  },
  {
    category: "Front-End",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },
  { category: "Back-End", items: ["Node.js", "Express.js", "Spring Boot"] },
  {
    category: "State Management & Data Fetching",
    items: ["Zustand", "React Query"]
  },
  {
    category: "Database & Tools",
    items: [
      "Prisma ORM",
      "Drizzle ORM",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Git",
      "GitHub",
      "Firebase",
      "Docker",
      "Postman"
    ]
  }
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-40 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              Hi, my name is Jun and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Full-Stack
              Developer based in the UK.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, wathcing, traveling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((section, idx) => (
                <div key={idx}>
                  <h2 className="font-semibold text-lg text-teal-500">
                    {section.category}
                  </h2>
                  <div className="flex flex-wrap justify-center md:justify-start">
                    {section.items.map((skill, index) => (
                      <p
                        key={index}
                        className="bg-zinc-200 px-4 py-2 mr-2 mt-2 text-zinc-500 rounded font-semibold"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
