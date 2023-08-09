'use client'
import Link from "next/link";

import contactUs from '../components/images/contact.png';
const ContactBanner = () => {
    return (
        <section className="w-11/12 mx-auto">
        <div className="container px-4 mx-auto">
          <div className="px-7 py-6 rounded box">
            <div className="lg:flex  justify-around items-center">
              <div className="pt-6 mb-10 md:mb-0">
                <h3 className="mb-1 text-2xl lg:text-4xl font-bold text-white">
                  <span className="text-black">Reach us now!</span>
                </h3>
                <p className="mb-5 text-sm font-medium">
                Contact us for top-quality handyman services. We provide skilled professionals, prompt solutions, and exceptional customer service.
                </p>
                <Link href='/contact' className="flex justify-center btn btn-outline lg:w-1/2 items-center text-black rounded-md font-medium mb-4">
                  <span className='mr-2'>Contact us</span>
          
                </Link>
              </div>
              <div className="">
              
                <img src={contactUs}  className="mx-auto rounded-lg text-white h-[100px] grayscale" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default ContactBanner;