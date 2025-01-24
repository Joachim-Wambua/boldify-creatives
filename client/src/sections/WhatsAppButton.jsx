import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "+254719114292"; // Replace with the actual phone number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <FaWhatsapp size={24} />
    </motion.button>
  );
};

export default FloatingWhatsAppButton;
