'use client'
import Link from "next/link";
import Gallery from "../components/Gallery";


import ServiceCards from "../components/ServiceCards";
// import { FaHeadset, FaRocket, FaSistrix } from "react-icons/fa";

import paint1 from "../../components/images/paint_1.png";
import paint2 from "../../components/images/paint_2.png";

const Services = () => {
  return (
    <>
    
        <title>
          Top Handyman Services in Singapore | Comprehensive Home Repair
          Solutions
        </title>
        <meta
          name="description"
          content="Looking for top-notch handyman services in Singapore? Our skilled team offers a comprehensive range of expert solutions, from fixing water leakages and repairing sliding doors to handling plumbing issues, kitchen sink installations, furniture assembling, electrical repairs, cabinet installations, aircon services, house wiring, and home renovation projects. Contact us today for reliable and efficient handyman services, ensuring a well-maintained and functional home."
        />
        <link rel="canonical" href="/service" />
    
      <div>
        <section className=" text-gray-800 text-center w-5/6 mx-auto mt-10">
          {/* banner */}
          <div className="hero bg-gray-800 text-white text-start p-8 lg:p-16 rounded-2xl ">
            <div className="hero-content flex-col lg:flex-row justify-start">
              <div>
                <h1 className="text-3xl lg:text-5xl font-bold">
                  <span className="text-orange-600">|</span> Top Handyman
                  Services in Singapore for All Your Home Repair Needs
                </h1>
                <p className="py-6">
                  When it comes to reliable and efficient handyman services in
                  Singapore, our team stands out as the best choice. We take
                  pride in offering a comprehensive range of expert solutions,
                  ensuring that your home remains in optimal condition.
                </p>
                <Link href="/contact">
                  {" "}
                  <button className="rounded-md btn border-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* banner */}
        </section>
        <ServiceCards></ServiceCards>
        <div className="font-light text-gray-800 sm:text-lg text-center mt-20 w-5/6 mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Home Renovation
          </h2>
          <p className="text-justify">
            While some individuals like taking on challenging DIY home
            renovation tasks, others, like our many satisfied clients, prefer
            the labor of experts like us. Please let us know if you prefer to
            hire a professional or overdo it yourself. Since we made our firm
            known to the public, we have worked on innumerable projects and had
            a wide range of clientele. We have more than two years of expertise,
            put a premium on providing excellent services, charge reasonable
            prices, and offer all of our client's free labor estimates. Your
            entire pleasure is guaranteed{" "}
          </p>
        </div>
        <Gallery></Gallery>
      </div>

      {/* <div class="p-20 bg-gray-100 ">
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img src="https://i.ibb.co/SRscDh7/pexels-ivan-samkov-5799135.jpg" alt="Laptop on Desk" class="md:w-1/2 md:rounded-l-xl rounded-t-lg lg:rounded-r-none" />
          <div class="p-6 flex justify-center items-center">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">We also provide painting services</h2>

          </div>
        </div>
      </div> */}

      <div className="mt-8 lg:mt-16 lg:px-20">
        <h2 className="text-center text-4xl font-extrabold py-10">
          We also provide painting service
        </h2>
        <div className="grid grid-cols-2 gap-5 h-full ">
          <div className="border-none lg:pl-20">
            <div className="py-10 my-32 h-4/6 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
              <div>
                <img src={paint1} alt="painting service in singapore" />

                {/* <h2 className="mt-16 text-lg font-bold p-2 text-center text-gray-600">We also provide painting service</h2>
                 */}
              </div>
            </div>
          </div>
          <div className="border-none lg:pl-20">
            <div className="py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
              <div>
                <img src={paint2} alt="painting service in singapore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 lg:mt-16 lg:px-20">
        <h2 className="text-center text-4xl font-extrabold py-10">
          Why Choose Us?
        </h2>
        <div class="container ">
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div class="card-body">
                  <h5 class="card-title">Experienced and Skilled Team</h5>
                  <p class="card-text text-justify text-gray-600">
                    Our handymen are a team of experienced and skilled
                    professionals who are well-equipped to handle any repair or
                    maintenance task efficiently and precisely.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div class="card-body">
                  <h5 class="card-title">Comprehensive Services</h5>
                  <p class="card-text text-justify text-gray-600">
                    No matter the scale of the job, we provide a comprehensive
                    range of services to address all your home repair
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div class="card-body">
                  <h5 class="card-title">Reliable and Efficient</h5>
                  <p class="card-text text-justify text-gray-600">
                    We understand that a functional home is essential for your
                    comfort and peace of mind. Our team works diligently to
                    provide reliable and efficient services, ensuring that your
                    daily life is minimally disrupted.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div class="card-body">
                  <h5 class="card-title">Hassle-Free Experience</h5>
                  <p class="card-text text-justify text-gray-600">
                    Customer satisfaction is our priority. When you choose us,
                    expect a hassle-free experience from the moment you contact
                    us to the successful completion of the project.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-500 drop-shadow-x">
                <div class="card-body">
                  <h5 class="card-title">
                    Well-Maintained and Functional Home
                  </h5>
                  <p class="card-text text-justify text-gray-600">
                    Your home deserves the best care. With our handyman
                    services, you can be confident that your home will be
                    well-maintained and fully functional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
