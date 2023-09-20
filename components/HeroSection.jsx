"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { ME } from "@/public/me.jpg";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src={ME}
            alt="me"
            width={350}
            height={350}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-5xl">
            Hello, I&#39;m Jun!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full-Stacl Developer{" "}
            </span>
            based in the UK. <br />I enjoy working towards creating software
            that makes life easier and more meaningful.
          </p>

          <div className="flex flex-row gap-4">
            <Link
              href="#contact"
              className="font-semibold px-4 py-2 rounded-xl  text-white bg-zinc-600 dark:bg-zinc-500 dark:hover:bg-zinc-600  hover:bg-zinc-500"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button>Contact me</button>
            </Link>
            <button className="rounded-xl px-4 py-2 text-white bg-teal-500 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500">
              <a href="/CV.pdf" download="Jun CV.pdf">
                Download CV
              </a>
            </button>
            <Link
              href="https://www.linkedin.com/in/jun-young-park-220bb4229/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer  bg-blue-500 text-white dark:bg-blue-600 shadow-zinc-500 dark:shadow-zinc-600 hover:scale-110 ease-in duration-30">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/Jun0613-spec"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer bg-black text-white  shadow-zinc-500 dark:shadow-zinc-600 hover:scale-110 ease-in duration-30">
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          href="#about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
