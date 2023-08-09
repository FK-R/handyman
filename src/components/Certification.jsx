'use client'
import Image from 'next/image';
import certification from "../components/images/bca.png";
import certification3 from "../components/images/bizsafe.png";
import certification2 from "../components/images/iso.png";

const Certification = () => {
  return (
    <div className="p-8 rounded-xl bg-white lg:my-10 lg:w-9/12 mx-auto">
      <div className="mb-10">
        <h2 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pt-4">
          We are Certified by
        </h2>
      </div>
      <div className="flex gap-4 justify-around items-center">
        <div className="lg:w-1/6 flex justify-center items-center inset-0 transform  hover:scale-125 transition duration-300 drop-shadow-xl">
          <Image
            className="focus:outline-none rounded-lg"
            src={certification}
            alt="Toyota"
            width={300} // Set the desired width for the image
            height={200} // Set the desired height for the image
          />
        </div>
        <div className="lg:w-1/6 flex justify-center  items-center inset-0 transform  hover:scale-125 transition duration-300 drop-shadow-xl">
          <Image
            className="focus:outline-none rounded-lg"
            src={certification2}
            alt="Toyota"
            width={300} // Set the desired width for the image
            height={200} // Set the desired height for the image
          />
        </div>
        <div className="lg:w-1/6 flex justify-center items-center inset-0 transform  hover:scale-125 transition duration-300 drop-shadow-xl">
          <Image
            className="focus:outline-none rounded-lg"
            src={certification3}
            alt="Toyota"
            width={300} // Set the desired width for the image
            height={200} // Set the desired height for the image
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
