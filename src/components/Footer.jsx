'use client'
import Link from "next/link";
import { FaTools, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-center bg-zinc-900 text-neutral-200 lg:text-left text-xs lg:text-base">
      <div className="flex items-center justify-end border-b-2 p-6 border-neutral-500 ">
        <div className="mr-3 lg:mr-12 ">
          <span className="font-semibold">Get connected with us :</span>
        </div>
        {/* Social network icons container */}
        <div className="flex justify-center">
          <Link
            target={"_blank"}
            href="https://www.facebook.com/profile.php?id=100072178856281"
            className="mr-6 text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>

          <Link
            href="https://web.whatsapp.com/send?phone=+6585966244"
            className="mr-6  text-neutral-200"
          >
            <FaWhatsapp className="w-[18px] h-[18px]"></FaWhatsapp>
          </Link>

          {/* <Link href="#!" className="mr-6  text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link> */}
        </div>
      </div>
      {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
      <div className="mx-6 py-10 text-left ">
        <div className="grid-1 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {/* Tailwind Elements section */}
          <div className="lg:ml-10">
            <h3 className="mb-4 lg:flex items-center font-semibold uppercase justify-start">
              <FaTools className="mr-3 mb-3 h-6 w-6 "></FaTools>
              Handyman Service
            </h3>
            <p>
              "Reliable Handyman Services in Singapore - Your Trusted Partner
              for Quality Repairs and Maintenance.{" "}
            </p>
          </div>
          {/* Products section */}
          <div className="lg:ml-20">
            <h4 className="mb-4 flex font-semibold uppercase justify-start">
              Services
            </h4>
            <p className="mb-4">
              <Link href="#!" className=" text-neutral-200">
                Home Renovation
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className=" text-neutral-200">
                Painting
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className=" text-neutral-200">
                Electrical
              </Link>
            </p>
            <p>
              <Link href="#!" className=" text-neutral-200">
                Plumbing
              </Link>
            </p>
          </div>
          {/* Useful links section */}
          <div className="">
            <h4 className="mb-4 flex  font-semibold uppercase justify-start">
              Useful links
            </h4>
            <p className="mb-4">
              <Link href="/about" className=" text-neutral-200">
                About Us
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/contact" className=" text-neutral-200">
                Contact
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/service" className=" text-neutral-200">
                Services
              </Link>
            </p>
            <p>
              <Link href="/contact" className=" text-neutral-200">
                FAQ
              </Link>
            </p>
          </div>
          {/* Contact section */}
          <div>
            <h4 className="mb-4 flex font-semibold uppercase justify-start">
              Contact
            </h4>
            <p className="mb-4 flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Singapore 209560
            </p>

            <p className="mb-4 flex items-center  justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              kazi2630mt@gmail.com
            </p>

            <p className="mb-4 flex items-center  justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              +65 8596 6244
            </p>
          </div>
        </div>
      </div>
      {/*Copyright section*/}
      <div className="bg-zinc-800 p-6 text-center ">
        <span>© 2023 Copyright: handymanahm </span>
        <Link
          href="https://www.linkedin.com/in/fkr-uddin/"
          className="font-semibold  text-neutral-400"
        >
          [ Developed By FKR ]
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
