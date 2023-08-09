'use client'
import Link from "next/link";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SocialMedia = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="fixed bottom-36 cursor-pointer">
      <Link
        target={"_blank"}
        href="https://web.whatsapp.com/send?phone=+6585966244"
        className={`text-sm text-white hover:text-black hover:dark:text-white transition-all duration-200 w-7 h-7 flex justify-center items-center bg-gray-800 rounded-r-lg hover:bg-gray-600 my-1`}
      >
        <FaWhatsapp></FaWhatsapp>
      </Link>
      <Link
        target={"_blank"}
        href="https://www.facebook.com/profile.php?id=100072178856281"
        className={`text-sm text-white hover:text-black hover:dark:text-white transition-all duration-200 w-7 h-7 flex justify-center items-center bg-gray-800 rounded-r-lg hover:bg-gray-600 my-1`}
      >
        <FaFacebook></FaFacebook>
      </Link>
      <Link
        href="tel:+6585966244"
        className={`text-xs text-white hover:text-black hover:dark:text-white transition-all duration-200 w-7 h-7 flex justify-center items-center bg-gray-800 rounded-r-lg hover:bg-gray-600 my-1`}
      >
        <FaPhone></FaPhone>
      </Link>
    </div>
  );
};

export default SocialMedia;
