import Navbar from "./NavBar";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import Button from "../components/Button";
import InvertedButton from "../components/InvertedButton";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579133/fly-211-plane_t4bhcr.jpg",
      title: "Branding & Signages",
      description:
        "From eye-catching signage to memorable branding, we redefine how your brand stands out.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984994/top-02_tvmfnd.jpg",
      title: "Graphic Design & Videography",
      description:
        "Immersive graphics and engaging videography that captivate your audience.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dfdn7sxwi/image/upload/v1733229496/1715052224754_isw91k.jpg",
      title: "Printing",
      description:
        "Precision printing that brings your ideas to life with unparalleled quality.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dltjv8zbh/image/upload/v1718782811/maa-img2_endtqz.jpg",
      title: "Web Design & Development",
      description:
        "Cutting-edge web solutions tailored to elevate your online presence.",
    },
  ];

  return (
    <header className="h-[90vh] flex justify-center">
      <Navbar />
      <motion.div
        className="absolute inset-0 z-8 flex items-center justify-center text-center px-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-4xl z-10">
          <img />
          <h1 className="text-4xl text-white lg:text-6xl font-extrabold my-6 leading-tight">
            <span className="text-gray-200 text-4xl">
              Where Innovation Meets Expression
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
            At Boldify Creatives, we redefine visual communication. From
            captivating signage to stunning graphic design, precision printing,
            and cutting-edge web development, we bring your vision to life with
            creativity and technical expertise.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Buttons */}
            <button className="before:ease relative h-12 w-40 px-3 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-72 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 bg-white text-black">
              <span className="relative z-10">Contact Us</span>
            </button>
            <InvertedButton content="Get Quote" />
          </div>
        </div>
        <div className="absolute inset-0 z-4">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={5000}
            transitionTime={1000}
            dynamicHeight={false}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-[100vh] w-full relative">
                <div
                  className="h-full bg-cover bg-center flex items-center justify-center relative"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
                  {/* Uncomment for slide titles */}
                  {/* <div className="z-10 text-center text-white px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-lg lg:text-xl">{slide.description}</p>
                  </div> */}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
