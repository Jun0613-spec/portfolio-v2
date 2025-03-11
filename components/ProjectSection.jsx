"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Planit",
    description:
      "Planit is Full stack project & task management web application using with React, Next.js, Typescript, NextAuth, TailwindCSS, Drizzle ORM, PostgreSQL, React-query, Hono.js, Cloudinary, Zustand, Shadcn-ui ",
    subdescription:
      "Join workspace URL - planit-project.vercel.app/workspaces/7bb0f70c-c439-40f5-b3df-f5ed130cf209/join/O3qt9h",
    image: "/projects/planit.png",
    gitUrl: "https://github.com/Jun0613-spec/planit",
    previewUrl: "https://planit-project.vercel.app/"
  },
  {
    title: "Graphy",
    description:
      "Graphy is Full stack graphic design SaaS web application using with React, Next.js, next auth, TailwindCSS, Drizzle ORM, PostgreSQL,Uploadthing, Stripe, Fabric.js, Hono, Replicate for AI image generating. ",
    subdescription: "Subscription test card  [ 4242 4242 4242 4242 | 12 / 34 ]",
    image: "/projects/graphy.png",
    gitUrl: "https://github.com/Jun0613-spec/graphy",
    previewUrl: "https://graphy-design.vercel.app/"
  },
  {
    title: "Blog App",
    description:
      "Blog app using with React, Typescirpt, Tailwind Css, Spring boot, MySQL",
    image: "/projects/blogfy.png",
    gitUrl: "https://github.com/Jun0613-spec/blog-frontend",
    previewUrl: "https://blog-frontend-one-hazel.vercel.app/"
  },
  {
    title: "Food Ordering App Tap",
    description:
      "Food ordering app with React,typescript, cloudinary, stripe, mongoDB, express, nodejs, tailwindCss",
    image: "/projects/tap.png",
    subdescription: "Test card  [ 4242 4242 4242 4242 | 12 / 34 ]",
    gitUrl: "https://github.com/Jun0613-spec/tap-frontend",
    previewUrl: "https://tap-food-ordering.onrender.com/"
  },
  {
    title: "Bitcoin Currency App",
    description:
      "Bitcoin Currency App using with React, Firebase, Bitcoin currenty Api, tailwind css",
    image: "/projects/crypto.png",
    gitUrl: "https://github.com/Jun0613-spec/cryptoapp-clone",
    previewUrl: "https://cryptobase-73222.web.app/"
  },
  {
    title: "Booking bnb",
    description:
      "Full stack Booking app  with Next.js App Router, Prisma, MongoDB, NextAuth",
    image: "/projects/airbnb.png",
    gitUrl: "https://github.com/Jun0613-spec/airbnb-clone-nextjs",
    previewUrl: "https://rent-clone-blush.vercel.app/"
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
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
              title={project.title}
              description={project.description}
              subdescription={project.subdescription}
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
