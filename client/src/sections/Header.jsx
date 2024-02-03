import CanvasArea from "../threejs/CanvasArea";
import Navbar from "./NavBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="h-[100vh]" >
      <Navbar />
      <motion.div
        className="header-container flex flex-row w-full items-center justify-center"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <div className="header-content flex-1 w-1/2 py-6">
          <h1 className="text-8xl font-extrabold">
            We Are
            <br />
            <span>Boldify</span>
          </h1>
        </div>
        <div className="header-image flex justify-center items-center w-1/2 ">
          <CanvasArea />
        </div>
      </motion.div>
      ;
    </header>
  );
};

export default Header;
