import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { teamMembers } from "../constants/data";

const Team = () => {
  return (
    <>
      <motion.div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
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
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-bold  text-slate-800 rounded-full bg-teal-accent-400">
            Meet The Team
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-3 lg:grid-cols-3 lg:max-w-screen-lg">
          {teamMembers.map((member) => (
            <div key={member.id}>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={`${member.profileImg}`}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">{member.name}</p>
                <p className="mb-5 text-xs text-gray-800">{member.role}</p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <FaXTwitter fontSize={21} className="social-icon" />
                  <FaLinkedinIn fontSize={21} className="social-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Team;
