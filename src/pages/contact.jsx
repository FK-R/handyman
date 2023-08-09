'use client'

import img from "../../components/images/handyman-in-singapore.jpg";
import Email from "../components/Email";
import FAQ from "../components/FAQ";

const Contact = () => {
  return (
    <div>
    
        <title>
          Contact Us for Professional Handyman Services in Singapore: Expert
          Solutions for Your Home Maintenance Needs
        </title>
        <meta
          name="description"
          content="Contact Us for Reliable Handyman Services in Singapore: Whether you need assistance with plumbing, electrical repairs, furniture assembly, or any other home improvement task, our team is ready to help. Reach out to us today to schedule a consultation and experience professional and prompt service."
        />
        <link rel="canonical" href="/contact" />

      <div className=" mx-auto">
        {/* Section: Design Block */}
        <section className="text-gray-800">
          <div className="relative h-[300px] overflow-hidden bg-no-repeat bg-cover">
            <img src={img} alt="handyman" style={{ objectFit: "cover" }} />
          </div>
          <div className="text-gray-800 px-4 md:px-12">
            <div
              className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
              style={{
                marginTop: "-90px",
                background: "hsla(0, 0%, 100%, 1)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 gap-x-6 ">
                <div className="text-center mx-auto">
                
                  <h6 className="font-medium text-[15px]">Singapore</h6>
                </div>
                <div className="text-center mx-auto">
              
                  <h6 className="font-medium text-[15px]">Singapore 209560</h6>
                </div>
                <div className="text-center mx-auto">
                  
                  <h6 className="font-medium text-[15px]">+65 8596 6244</h6>
                </div>
                <div className="text-center mx-auto">
                
                  <h6 className="font-medium text-[15px]">
                    kazi2630mt@gmail.com
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* email section */}
      <Email />
      <FAQ />
    </div>
  );
};

export default Contact;
