import { TiDownloadOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const FullResume = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/1CKAP79VUBooXSx4qx5QFTibC9vmt95RI/view"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div
        className="w-full flex justify-center items-center py-6 bg-indigo-600 cursor-pointer relative overflow-hidden"
        variants={{
          rest: { backgroundColor: "#4C51BF" },
          hover: { backgroundColor: "#5A67D8" },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-white tracking-wider uppercase font-medium text-lg"
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          View my full Resume
        </motion.span>
        <motion.div
          className="absolute"
          variants={{
            rest: { y: 20, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TiDownloadOutline className="text-white text-3xl" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default FullResume;
