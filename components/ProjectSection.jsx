"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "AI service app",
    description: "AI platform app with using openAI API, Shadcn UI, Clerk, ",
    image: "/projects/AI.png",
    gitUrl: "https://github.com/Jun0613-spec/AI-platform-nextjs",
    previewUrl: "https://ai-platform-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Booking bnb",
    description:
      "Full stack Booking app  with Next.js App Router, Prisma, MongoDB, NextAuth",
    image: "/projects/airbnb.png",
    gitUrl: "https://github.com/Jun0613-spec/airbnb-clone-nextjs",
    previewUrl: "https://rent-clone-blush.vercel.app/",
  },
  {
    id: 3,
    title: "Realtime chat app",
    description:
      "Real-time chat app with using Next.js tailwindCSS, Pisma, MongoDB, Pusher",
    image: "/projects/messenger.png",
    gitUrl: "https://github.com/Jun0613-spec/messenger-nextjs",
    previewUrl: "https://messenger-nextjs-eight.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
        <hr className="w-40 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h2>

      <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
