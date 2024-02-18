// Navbar.js
"use client"; // for nextjs 13.4 users
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  const navVariants = {
    open: {
      // opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      // opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation Variants for nav list items
  const listVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <header className="fixed shadow bg-white sm:px-8 px-4 py-8 z-10 w-full">
        <motion.nav
          className="flex justify-between items-center max-container"
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1.8, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          <a href="/" className="text-3xl font-bold">
            <img
            className="menu-logo"
              src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706183635/Boldify_Creatives_Logo-01_lqtagj.png"
              width={120}
              alt="Logo"
            />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li className="nav-link-full" key={item.label}>
                <a
                  href={item.href}
                  className="leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24">
            <Button content="Book Call" />
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </motion.nav>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <div>
            <motion.nav
              className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100 z-10 "
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              exit="closed"
              variants={navVariants}
            >
              <div
                className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-4xl" />
              </div>
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                {navLinks.map((item) => (
                  <motion.li
                    className="nav-links my-6"
                    key={item.label}
                    variants={listVariants}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    exit="closed"
                  >
                    <a
                      href={item.href}
                      className="leading-normal text-2xl text-slate-gray"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
