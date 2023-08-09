'use client'
import Link from "next/link";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 lg:px-20 py-4 mx-auto z-40">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-lg font-semibold bg-base-100 rounded-box min-w-[calc(100vw-4vw)]  min-h-[calc(100vh-60vh)]"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold">
          Handyman<span className="ahm">AHM</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* <li><Link href='/contact'>Contact</Link></li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center invisible lg:visible">
          <a
            target={"_blank"}
            href="https://www.facebook.com/profile.php?id=100072178856281"
            className="text-2xl text-dark p-0 cursor-pointer rounded-full hover:bg-white hover:text-secondary transition-all duration-200 w-12 h-12 flex justify-center items-center my-1"
          >
            {" "}
            <FaFacebook></FaFacebook>{" "}
          </a>
          <Link
            href="https://web.whatsapp.com/send?phone=+6585966244"
            className="text-2xl text-dark p-0 cursor-pointer rounded-full hover:bg-white hover:text-secondary transition-all duration-200 w-12 h-12 flex justify-center items-center my-1"
          >
            {" "}
            <FaWhatsapp></FaWhatsapp>{" "}
          </Link>
          <Link
            href="tel:+6585966244"
            className="text-2xl text-dark p-0 cursor-pointer rounded-full hover:bg-white hover:text-secondary transition-all duration-200 w-12 h-12 flex justify-center items-center my-1 mr-10"
          >
            {" "}
            <FaPhone></FaPhone>{" "}
          </Link>
        </div>
        <Link
          href="/contact"
          className="btn text-black hover:text-neutral-50 hover:btn-dark btn-md rounded-md bg-white font-semibold invisible lg:visible"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
