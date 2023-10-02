import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t z-10 dark:border-zinc-700 text-white dark:bg-zinc-800">
      <div className="p-12 text-right">
        <Link href="https://www.linkedin.com/in/jun-young-park-220bb4229/">
          <p className="dark:text-white text-black">
            Jun
            <span className="text-teal-500">Park</span>
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
