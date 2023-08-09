'use client'
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollTop = (props) => {
  const location = useLocation()
  console.log(location.pathname)
  return (
      <div className='fixed bottom-10 right-6 cursor-pointer'>

          <Link href={`${location.pathname}#`} className={`text-2xl text-white hover:text-black hover:dark:text-white transition-all duration-200 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center bg-gray-800 rounded-xl  hover:bg-gray-600 my-1`}>
              <FaArrowUp></FaArrowUp>
          </Link>
        
      
      </div>
  );
  };
  export default ScrollTop;