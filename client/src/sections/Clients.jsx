import { motion } from "framer-motion";
import { clientBrands } from "../constants/data";


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
            {clientBrands.map((client) => (
            <div key={client.id} className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <img
                className="client-logo"
                src={`${client.img}`}
                alt=""
              />
            </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Clients;
