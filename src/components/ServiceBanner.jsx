'use client'
import Link from "next/link";
import {
  FaBolt,
  FaBox,
  FaChair,
  FaDoorOpen,
  FaSink,
  FaWrench,
} from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <div className="rounded-xl bg-zinc-100 p-6 mb-16 lg:w-11/12 mx-auto">
      <div className="">
        <h2 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold py-10">
          Our Provided Services
        </h2>
      </div>
      <div className="lg:flex justify-center lg:gap-44 items-center lg:mr-36">
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-5 justify-center xl:pb-10   items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaDoorOpen className="focus:outline-none w-[35px] h-[50px] lg:w-[40px] lg:h-[80px] "></FaDoorOpen>
            <p>Door Repair</p>
          </div>

          <div className="flex flex-col gap-5 justify-center xl:pb-10   items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaWrench className="focus:outline-none w-[30px] h-[50px] lg:w-[35px] lg:h-[80px] "></FaWrench>
            <p>Plumbing </p>
          </div>
          <div className="flex flex-col gap-5 justify-center xl:pb-10  items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaBolt className="focus:outline-none w-[18px] h-[50px] lg:w-[21px] lg:h-[80px] "></FaBolt>
            <p>Electrical</p>
          </div>
          <div className="flex flex-col gap-5 justify-center xl:pb-10   items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaChair className="focus:outline-none w-[28px] h-[50px] lg:w-[31px] lg:h-[80px] "></FaChair>
            <p>Furniture</p>
          </div>
          <div className="flex flex-col gap-5 justify-center xl:pb-10   items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaSink className="focus:outline-none w-[30px] h-[50px] lg:w-[35px] lg:h-[80px] "></FaSink>
            <p>Kitchen Sink</p>
          </div>
          <div className="flex flex-col gap-5 justify-center xl:pb-10   items-center inset-0 transform  hover:scale-90 transition duration-300 contrast-75 hover:contrast-100 hover:drop-shadow-xl ">
            <FaBox className="focus:outline-none w-[23px] h-[50px] lg:w-[28px] lg:h-[80px] "></FaBox>
            <p>Cabinet </p>
          </div>
        </div>
        <div className="mt-8 sm:text-xs lg:mt-0 text-center">
          <p className="text-lg font-semibold mb-4">Click to explore more </p>

          <Link
            href="/service"
            className="btn border bg-white hover:text-white rounded-md normal-case text-lg text-gray-800"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
