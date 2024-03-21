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
        <div className="header-content flex-1 w-1/2 xs:w-full lg:px-32 py-6">
          <h1 className="xl:text-7xl text-left font-black lg:text-8xl md:text-8xl sm:text-7xl ">
            Building <span className="brand-name">Bold</span>
            <br />
            Experiences <br />
            For the <span className="brand-name">Bold!</span>
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
