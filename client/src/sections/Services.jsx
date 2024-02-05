import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <section id="services" className="py-8 bg-white sm:py-10 lg:py-16">
        <motion.div
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1.8, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Our Services{" "}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Elevate your brand with our top quality services
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165069/vector_xlxdov.gif"
                  alt="graphic-design-icon"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Graphic Design
              </h3>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165739/brand-advertising_mncdz2.gif"
                  alt="branding"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Branding & Signages
              </h3>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165734/printer_ehxmk9.gif"
                  alt="printing"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Printing
              </h3>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165732/html_mijvc6.gif"
                  alt="web-dev"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Web Development
              </h3>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165737/promotion_gfp5gl.gif"
                  alt="digital-marketing"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Digital Marketing
              </h3>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <img
                  src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1707165737/stats_ld0f08.gif"
                  alt="data-analytics"
                />
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">
                Data Analytics
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
