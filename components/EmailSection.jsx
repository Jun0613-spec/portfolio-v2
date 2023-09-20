"use client";

import React, { useState } from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function EmailSection() {
  const [success, setSuccess] = useState(null);
  const accessKey = process.env.EMAIL_ACCESS_KEY;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setSuccess(true);
    }
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold my-2">Get in touch</h5>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4  max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-4">
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

      {/* CONTACT FORM */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-zinc-100 border border-zinc-200 placeholder-zinc-400 dark:bg-zinc-600 dark:border-zinc-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="bg-zinc-100 border border-zinc-200 placeholder-zinc-400 dark:bg-zinc-600 dark:border-zinc-700 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="bg-zinc-100 border border-zinc-200 placeholder-zinc-400 dark:bg-zinc-600 dark:border-zinc-700 text-sm rounded-lg block w-full h-52 p-2.5"
              placeholder="Enter your message"
            />
          </div>
          <input type="hidden" name="redirect"></input>
          <button
            type="submit"
            className="text-white bg-teal-500 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Submit
          </button>
          {success && "Your email has been sent. I'll get back to you soon."}
        </form>
      </div>
    </section>
  );
}
