import { motion } from "framer-motion";

const Clients = () => {
  return (
    <>
      <motion.div
        className="bg-white py-6 sm:py-8 lg:py-12"
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
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex flex-col items-center md:mb-8 lg:justify-between">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
              Trusted by the best
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709643618/Logo-01_mfldja.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={240}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709643549/Logo-01_tsizpf.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={150}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1706718143/siha_logo_nqsqrd.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={150}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1706717374/Logo-01_ccig6g.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={270}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709644072/Logo-01_xbupfy.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={240}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1706718182/Geddo_bjdtn6.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={150}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709643512/Logo-01_p76l30.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={240}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709643604/Logo-01_nkf4ah.png"
                alt=""
              />
            </div>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                width={240}
                src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1709643493/Logo-01_w7gr0m.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Clients;
