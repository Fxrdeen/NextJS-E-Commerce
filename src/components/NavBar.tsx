"use client";
import React from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
interface Links {
  href: string;
  title: string;
}

const links: Links[] = [
  {
    href: "/products",
    title: "Products",
  },
  {
    href: "/register",
    title: "Register Your Product",
  },
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact Us",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="border-gray-200 dark:bg-gray-900 border-b-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src=""
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Shopro
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <li>
                <Link
                  className={`${
                    pathname === link.href && "text-blue-600"
                  } block py-2 px-3 rounded hover:text-blue-800 md:bg-transparent md:p-0`}
                  key={link.title}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <div className="flex flex-row m-1">
              <CiHeart size={22} className="mx-2" />
              <FaShoppingCart size={22} className="mx-2" />
              <RiUserAddFill size={22} className="mx-2" />
            </div>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="flex flex-row space-x-4 w-100">
    //   <Link href={"/"}>Logo</Link>
    //   <div>
    //     {links.map((link) => (
    //       <Link href={link.href}>{link.title}</Link>
    //     ))}
    //   </div>
    // </nav>
  );
};

export default NavBar;
