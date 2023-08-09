'use client'
import Link from "next/link";
import {
  FaAngleRight,
  FaHeadset,
  FaRegHandPointRight,
  FaRocket,
  FaSistrix,
} from "react-icons/fa";
import Certification from "../components/Certification";
import ContactBanner from "../components/ContactBanner";
const About = () => {
  return (
    <>
    
        <title>
          About Our Trusted Handyman Services in Singapore: Expertise and
          Reliability You Can Count On
        </title>
        <meta
          name="description"
          content="About Our Expert Handyman Services in Singapore: Find out how our years of experience and expertise in various trades enable us to handle a wide range of projects, from plumbing and electrical repairs to furniture assembly and home renovations. Trust our reliable team to get the job done right."
        />
        <link rel="canonical" href="/about" />
      
      <section className=" text-gray-800 text-center w-5/6 mx-auto mt-10">
        {/* banner */}
        <div className="hero bg-gray-800 text-white text-start p-8 lg:p-16 rounded-2xl ">
          <div className="hero-content flex-col lg:flex-row justify-start">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold">
                <span className="text-orange-600">|</span> About Our Trusted
                Handyman Services
              </h1>
              <p className="py-6">
                About Our Expert Handyman Services in Singapore, Find out how
                our years of experience and expertise in various trades enable
                us to handle a wide range of projects, from plumbing and
                electrical repairs to furniture assembly and home renovations.
                Trust our reliable team to get the job done right.
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

        <div className="font-light text-gray-800 sm:text-lg text-center my-20 w-5/6 mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            About us
          </h2>
          <p className=" text-justify mb-40">
            Welcome to Handyman Ahm, your trusted provider of comprehensive
            handyman services in Singapore. With a commitment to excellence and
            customer satisfaction, we offer a wide range of services to meet all
            your household needs. At Handyman Ahm, we understand the importance
            of having a reliable and skilled handyman by your side. Whether it's
            a small repair or a major renovation project, our team of
            experienced professionals is here to help. From fixing a leaky
            faucet to installing new electrical fixtures, we have you covered.
            Our painting services are designed to transform your space into a
            masterpiece. Whether you need a fresh coat of paint to revitalize
            your walls or a complete color makeover, our skilled painters will
            deliver exceptional results with attention to detail and precision.
            When it comes to home renovations, Handyman Ahm is your go-to
            solution. From kitchen and bathroom upgrades to flooring
            installations and carpentry work, our dedicated team will work
            closely with you to bring your vision to life. We prioritize quality
            craftsmanship and ensure that every project is completed to your
            satisfaction. With Handyman Ahm, you can expect professionalism,
            reliability, and superior customer service. We take pride in our
            attention to detail, timely completion of projects, and transparent
            communication with our clients. No matter the size or complexity of
            the job, we strive to exceed your expectations and provide
            exceptional results. Experience the convenience and peace of mind
            that comes with choosing Handyman Ahm for all your handyman,
            painting, and home renovation needs. Contact us today to discuss
            your requirements and let us turn your house into a home you'll
            love.
          </p>
        </div>
        <div className="grid lg:gap-x-12 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-gray-800 rounded-full shadow-lg inline-block -mt-8">
                  {/* w-8 h-8 text-white */}
                  <FaHeadset className="w-8 h-8 text-white hover:scale-110 transition duration-300 drop-shadow-xl"></FaHeadset>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Support 24/7</h5>
                <p className=" text-center">
                  "Uninterrupted assistance around the clock - our 24/7 support
                  is here for you."
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-gray-800 rounded-full shadow-lg inline-block -mt-8">
                  <FaSistrix className="w-8 h-8 text-white hover:scale-110 transition duration-300 drop-shadow-xl"></FaSistrix>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">Transparency</h5>
                <p className=" text-center">
                  "Transparently fostering trust through open communication and
                  honesty."
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-gray-800 rounded-full shadow-lg inline-block -mt-8">
                  <FaRocket className="w-8 h-8 text-white hover:scale-110 transition duration-300 drop-shadow-xl"></FaRocket>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">
                  Customer Satisfaction
                </h5>
                <p className=" text-center">
                  ""Exceeding customers with utmost satisfaction with
                  exceptional service."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mission vission starts */}

      <section className="lg:flex w-5/6 mx-auto border rounded-lg mt-40 mb-20">
        <div className="px-6 py-12 md:px-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          {/* <p className="text-gray-500 mb-6">
          "Our mission is to work closely with you, involving you at every stage of the project. We want you to feel proud, excited, and completely satisfied before, during, and after the completion of your project."    </p> */}
          <div className=" ">
            <div className="mb-2">
              <p className="flex items-center">
                <FaRegHandPointRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                  {" "}
                </FaRegHandPointRight>
                Build strong partnerships with clients, actively involving them
                throughout the handyman service process.
              </p>
            </div>
            <div className="mb-2">
              <p className="flex items-center">
                <FaRegHandPointRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                  {" "}
                </FaRegHandPointRight>
                Create a sense of pride, excitement, and satisfaction for
                clients from the beginning to the end of their projects.
              </p>
            </div>
            <div className="mb-2">
              <p className="flex items-center">
                <FaRegHandPointRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                  {" "}
                </FaRegHandPointRight>
                Focus on client engagement and strive for complete customer
                satisfaction in all our handyman endeavors.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 py-12 md:px-12">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-500 mb-6 text-justify">
            "To become the leading provider of trusted and reliable handyman
            services, revolutionizing the industry with our commitment to
            exceptional quality, customer-centric approach, and innovative
            solutions."
          </p>
        </div>
      </section>

      <Certification></Certification>

      {/* Container for demo purpose */}
      <div className="mb-24 w-5/6 mx-auto">
        {/* Section: Design Block */}
        <section className="text-gray-800">
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0  w-full lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                  <p className="text-justify text-gray-500 mb-6">
                    We provide comprehensive handyman services that encompass a
                    wide range of home improvement tasks. Our offerings include
                    home renovations, painting services, and an array of other
                    skilled handyman solutions.{" "}
                  </p>
                  <div className="grid md:grid-cols-3 lg:grid-cols-2 ">
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Sliding Door Repair
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Plumbing
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Electrical
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Furniture Assembling
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Kitchen Sink
                      </p>
                    </div>
                    <div className="mb-6">
                      <p className="flex items-center">
                        <FaAngleRight className="w-5 h-5 mr-2 mb-0.5 text-gray-900">
                          {" "}
                        </FaAngleRight>
                        Cabinet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mb-10">
        <ContactBanner></ContactBanner>
      </div>
    </>
  );
};

export default About;
