'use client'
import Banner from "../components/Banner";
import Certification from "../components/Certification";
import ContactBanner from "../components/ContactBanner";
import Email from "../components/Email";
import ServiceBanner from "../components/ServiceBanner";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
    
        <title>
          Trusted Handyman Services in Singapore for Quality Repairs and
          Maintenance
        </title>
        <meta
          name="description"
          content="Discover reliable and skilled handyman services in Singapore that you can trust for all your home repair and maintenance needs. Our experienced team of professionals is here to tackle everything from fixing leaky faucets to assembling furniture and more. With a commitment to delivering quality workmanship and exceptional customer service, we ensure your satisfaction every step of the way. Contact us today and experience efficient and affordable solutions tailored to your requirements. Trust our reliable handyman services in Singapore to keep your home in optimal condition. #handymanservices #Singapore #homerepairs"
        />
        <link rel="canonical" href="/" />
  

      <Banner></Banner>
      <Work></Work>
      <ServiceBanner></ServiceBanner>
      <ContactBanner></ContactBanner>
      <Certification></Certification>
      <Email></Email>
    </>
  );
};

export default Home;
