import React from "react";
import Link from "next/link";

import { BsCodeSlash, BsEye } from "react-icons/bs";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <>
      <div
        className="flex h-52 md:h-72 rounded-xl  group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-zinc-600 bg-opacity-10 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-xl">
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-zinc-300 hover:border-white group/link"
          >
            <BsCodeSlash className="h-6 w-6 text-zinc-300 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-zinc-300 hover:border-white group/link"
          >
            <BsEye className="h-6 w-6 text-zinc-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-zinc-400 dark:text-zinc-500">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
