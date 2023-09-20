import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t z-10 dark:border-zinc-700 text-white dark:bg-zinc-800">
      <div className="p-12 flex items-center justify-between">
        <p className="dark:text-white text-black">
          Jun <span className="text-teal-500">Park</span>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          Made by{" "}
          <Link href="https://www.linkedin.com/in/jun-young-park-220bb4229/">
            Jun
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
