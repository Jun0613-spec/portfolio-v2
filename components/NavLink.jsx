import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-zinc-700 dark:text-zinc-300 sm:text-xl rounded md:p-0 hover:text-opacity-70 dark:hover:text-opacity-70"
    >
      {title}
    </Link>
  );
};

export default NavLink;
