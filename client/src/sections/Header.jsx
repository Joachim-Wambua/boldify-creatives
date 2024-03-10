import CanvasArea from "../threejs/CanvasArea";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="h-[100vh] flex justify-center">
      <Navbar />
      <motion.div
        className="header-container flex w-full items-center justify-center"
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
      <div className="header-content flex-1 w-1/2 xs:w-full py-6 px-20">
          <h1 className="xl:text-8xl text-left font-black lg:t ext-8xl md:text-8xl sm:text-7xl ">
            Are You
            <br />
            <span className="brand-name">Bold </span>
            Enough?
          </h1>
        </div>
        <div className="header-image flex justify-center xs:w-full items-center w-1/2 ">
          <CanvasArea />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
