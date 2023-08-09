'use client'
import au1 from "../components/images/about-us1.jpg";
import au2 from "../components/images/about-us2.jpg";
import hdw1 from "../components/images/hdww-1.jpg";
import hdw2 from "../components/images/hdww-2.jpg";
const Work = () => {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg ">
          <h2 className="mb-4 text-4xl text-center lg:text-start tracking-tight font-extrabold text-gray-900 ">
            About Us
          </h2>
          <p className="mb-4 text-justify">
            Welcome to our locally owned and operated handyman service,
            providing reliable solutions for your home repairs and maintenance
            in Singapore. With a focus on delivering exceptional workmanship and
            ensuring customer satisfaction, our experienced team guarantees
            efficient and accurate project completion, saving you valuable time
            and money. While you possess handyman skills, our expertise allows
            us to offer unique recommendations and cost-effective materials
            tailored to your needs. We go above and beyond to exceed
            expectations, providing valuable project planning advice for
            seamless results. Choose our trusted handyman service in Singapore
            for a hassle-free experience. Contact us today and experience our
            exceptional solutions firsthand.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg hover:scale-105 transition duration-300 drop-shadow-xl"
            src={au1}
            alt="trusted handyman service, Singapore, reliable solutions, exceptional workmanship, customer satisfaction, efficient project completion, cost-effective materials, unique recommendations, exceed expectations, valuable project planning advice, hassle-free experience"
          />
          <img
            className="w-full rounded-lg hover:scale-105 transition duration-300 drop-shadow-xl"
            src={au2}
            alt="trusted handyman service, Singapore, reliable solutions, exceptional workmanship, customer satisfaction, efficient project completion, cost-effective materials, unique recommendations, exceed expectations, valuable project planning advice, hassle-free experience"
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg hover:scale-105 transition duration-300 drop-shadow-xl"
            src={hdw1}
            alt="office content 1handyman service, repairs, installations, maintenance, improvements, Singapore, skilled professionals, customer satisfaction, detailed quotations, convenient scheduling, precision, attention to detail, clear communication, professionalism, quality craftsmanship"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg hover:scale-105 transition duration-300 drop-shadow-xl"
            src={hdw2}
            alt="handyman service, repairs, installations, maintenance, improvements, Singapore, skilled professionals, customer satisfaction, detailed quotations, convenient scheduling, precision, attention to detail, clear communication, professionalism, quality craftsmanship"
          />
        </div>
        <div className="font-light text-gray-800 sm:text-lg mt-8">
          <h2 className="mb-4 text-4xl text-center lg:text-start tracking-tight font-extrabold text-gray-900 ">
            How do we work
          </h2>
          <p className="mb-4 text-justify">
            As a trusted handyman service in Singapore, we specialize in a wide
            range of tasks, including repairs, installations, maintenance, and
            improvements. Our skilled team of professionals utilizes their
            expertise and a variety of tools to efficiently complete projects
            and deliver exceptional results. We prioritize customer satisfaction
            by working diligently to assess your needs, provide detailed
            quotations, schedule the work at a convenient time, and execute it
            with precision and attention to detail. Clear communication,
            professionalism, and quality craftsmanship are our core values
            throughout the entire process. Choose our reliable handyman service
            in Singapore for all your repair, installation, and improvement
            needs.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
