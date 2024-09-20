"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Teammate",
    description:
      "Teammate is Full stack team messenger application using with React, Next.js, Auth.js, TailwindCSS, Convex, React hook, test user test@test.com | test1234",
    image: "/projects/teammate.png",
    gitUrl: "https://github.com/Jun0613-spec/teammate",
    previewUrl: "https://teammate-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Graphy",
    description:
      "Graphy is Full stack graphic design SaaS web application using with React, Next.js, next auth, TailwindCSS, Drizzle ORM, PostgreSQL,Uploadthing, Stripe, Fabric.js, Hono, Replicate for AI image generating. for subscription test card  [ 4242 4242 4242 4242 | 12 / 34 ]",
    image: "/projects/graphy.png",
    gitUrl: "https://github.com/Jun0613-spec/graphy",
    previewUrl: "https://graphy-design.vercel.app/",
  },
  {
    id: 3,
    title: "Blog App",
    description:
      "Blog app using with React, Typescirpt, Tailwind Css, Spring boot, MySQL",
    image: "/projects/blogfy.png",
    gitUrl: "https://github.com/Jun0613-spec/blog-frontend",
    previewUrl: "https://blog-frontend-one-hazel.vercel.app/",
  },
  {
    id: 4,
    title: "Food Ordering App Tap",
    description:
      "Food ordering app with React,typescript, cloudinary, stripe, mongoDB, express, nodejs, tailwindCss",
    image: "/projects/tap.png",
    gitUrl: "https://github.com/Jun0613-spec/tap-frontend",
    previewUrl: "https://tap-food-ordering.onrender.com/",
  },
  {
    id: 5,
    title: "Bitcoin Currency App",
    description:
      "Bitcoin Currency App using with React, Firebase, Bitcoin currenty Api, tailwind css",
    image: "/projects/crypto.png",
    gitUrl: "https://github.com/Jun0613-spec/cryptoapp-clone",
    previewUrl: "https://cryptobase-73222.web.app/",
  },
  {
    id: 6,
    title: "Booking bnb",
    description:
      "Full stack Booking app  with Next.js App Router, Prisma, MongoDB, NextAuth",
    image: "/projects/airbnb.png",
    gitUrl: "https://github.com/Jun0613-spec/airbnb-clone-nextjs",
    previewUrl: "https://rent-clone-blush.vercel.app/",
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
