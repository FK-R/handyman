'use client'
import aircon from "../images/ac.jpg";
import cabinet from "../images/cabineet.jpg";
import electrical from "../images/electrical.jpg";
import furniture from "../images/furniture.jpg";
import hw from "../images/house _wiring.jpg";
import ks from "../images/kitchen_sink.jpg";
import plumbing from "../images/plumbing.jpg";
import sdr from "../images/sliding_door.jpg";
import wl from "../images/water_leak.jpg";
const ServiceCards = () => {
  return (
    <div>
      <div className="font-light text-gray-800 sm:text-lg text-center mt-20 w-5/6 mx-auto">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Wide Range of Expert Solutions
        </h2>
        <p className="">
          At handymanahm, we understand that every home requires unique
          attention. That's why we offer a wide range of expert handyman
          solutions to cater to all your repair and maintenance needs. From
          minor fixes like water leakages and repairing sliding doors to
          handling more complex tasks like plumbing issues, kitchen sink
          installations, furniture assembling, electrical repairs, cabinet
          installations, aircon services, house wiring, and even full home
          renovation projects, our skilled team is here to help.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/6 mx-auto gap-16 mt-10">
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={wl} alt="Water Leakage Repair Services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Water Leakage</h2>
            <p className="text-justify text-gray-600">
              Effective water leakage solutions provided by professionals to
              detect and repair leaks, preventing water damage and ensuring a
              dry and safe environment.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={sdr} alt="Sliding Door Repair Service" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sliding Door Repair</h2>
            <p className="text-justify text-gray-600 ">
              Specialized sliding door repair services fix jammed or misaligned
              doors, ensuring smooth functionality, improved access, & enhanced
              security.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={plumbing} alt="Professional Plumbing Services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Plumbing</h2>
            <p className="text-justify text-gray-600 ">
              Comprehensive plumbing services for installation, repair, &
              maintenance, ensuring reliable water systems & efficient
              functionality in residential & commercial properties.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={ks} alt="Modern Kitchen Sink Installation" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kitchen Sink</h2>
            <p className="text-justify text-gray-600 ">
              Professional kitchen sink services for installation, repair, and
              maintenance, ensuring optimal functionality and efficient water
              flow in your kitchen area.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={furniture} alt="Expert Furniture Assembling Service" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Furniture Assembling</h2>
            <p className="text-justify text-gray-600 ">
              Reliable furniture assembling services to expertly assemble and
              set up your furniture pieces, saving you time and ensuring a
              hassle-free and properly assembled result.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={electrical} alt="Professional Electrical Services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electrical</h2>
            <p className="text-justify text-gray-600 ">
              Skilled electrical services for installation, repair, and
              maintenance, ensuring safe and reliable electrical systems in
              homes and businesses.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={cabinet} alt="Stylish Cabinet Installation" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cabinet</h2>
            <p className="text-justify text-gray-600 ">
              Professional cabinet services for installation, repair, and
              customization, enhancing storage efficiency and aesthetics in
              residential and commercial spaces.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl">
          <figure>
            <img src={aircon} alt="Efficient Aircon Services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Aircon</h2>
            <p className="text-justify text-gray-600 ">
              Comprehensive air conditioning services, including installation,
              repair, and maintenance, ensuring efficient cooling and optimal
              comfort in residential and commercial environments.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md hover:scale-105 transition duration-300 drop-shadow-xl ">
          <figure>
            <img src={hw} alt="Professional House Wiring Services" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">House Wiring</h2>
            <p className="text-justify text-gray-600 ">
              Expert house wiring services for installation, repair, and
              maintenance, ensuring safe and efficient electrical connections in
              residential properties for reliable power distribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
