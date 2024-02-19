import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-gray-900 dark:bg-gray-900 w-full">
        <motion.div
          className="about-section flex w-full justify-center "
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: 50,
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
          <div className="about-content flex min-h-screen items-center w-1/2 justify-center font-bold text-white">
            <div className=" text-left mx-12 space-y-12">
              <div className="text-4xl text-left font-bold">
                We offer: <br />
                <div className="about-services relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                  <span className="animate-word col-span-full row-span-full">
                    Graphic Design
                  </span>
                  <span className="animate-word-delay-1 col-span-full row-span-full">
                    Branding & Signages
                  </span>
                  <span className="animate-word-delay-2 col-span-full row-span-full">
                    Printing
                  </span>
                  <span className="animate-word-delay-3 col-span-full row-span-full">
                    Web Development
                  </span>
                  <span className="animate-word-delay-4 col-span-full row-span-full">
                    Digital Marketing
                  </span>
                </div>
              </div>

              <div>
                <p className="font-light leading-7 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  quam consequatur deserunt sint ipsum saepe hic, perferendis
                  dolore, odit quos laudantium, repudiandae assumenda beatae
                  molestiae voluptatum quo accusamus doloremque accusantium! Ad
                  repellat consequatur reiciendis commodi repudiandae fugit eius
                  provident labore numquam perspiciatis, optio amet accusantium
                  sequi ipsam maxime nulla velit unde! Accusantium earum.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image w-1/2 xs:w-full mb-8 flex items-center justify-center">
            <div className="container">
              <input type="radio" name="slider" id="item-1" checked={currentSlide === 0} />
              <input type="radio" name="slider" id="item-2"  checked={currentSlide === 1} />
              <input type="radio" name="slider" id="item-3"  checked={currentSlide === 2} />
              <div className="cards">
                <label className="card" htmlFor="item-1" id="image-1">
                  <img
                    src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1708285741/bodify1_fc8mga.png"
                    alt="song"
                    height={180}
                  />
                </label>
                <label className="card" htmlFor="item-2" id="image-2">
                  <img
                    src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                    alt="song"
                    width={250}
                  />
                </label>
                <label className="card" htmlFor="item-3" id="image-3">
                  <img
                    src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="song"
                    width={250}
                  />
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
