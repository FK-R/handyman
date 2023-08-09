'use client'
import Link from "next/link";

const ErrorPage = () => {
    return (
       
        <section className="bg-navycs h-screen flex justify-center items-center">
          <div className=" mx-auto">
            <div className="flex">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[400px] text-center">
                  <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                    404
                  </h2>
                  <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                    Oops! That page can’t be found
                  </h4>
                  <p className="mb-8 text-lg text-white">
                    The page you are looking for it maybe deleted
                  </p>
                  <Link
                   to='/'
                    className="hover:text-primary inline-block border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white"
                  >
                    Go To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
      
        </section>
  
      
    );
};

export default ErrorPage;