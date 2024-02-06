import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="bg-black w-full">
        <motion.div
          className="about-section flex w-full"
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

          <div className="about-image w-1/2 xs:w-full mb-8 flex items-center justify-center my-auto">
            <img
              src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706183651/IMG_20230824_183146_gfaqgr.jpg"
              alt="Boldify Image"
              width={270}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
