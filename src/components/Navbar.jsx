// src/components/Navbar.jsx
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md p-4 z-50 shadow-lg"
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1, color: "#93c5fd" }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          @gnana997
        </motion.h1>
        <nav aria-label="Main navigation">
          <ul className="flex space-x-6">
            {["Home", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: "#93c5fd" }}
                  className="text-gray-300 text-sm md:text-base font-medium hover:text-blue-400 transition-colors duration-200"
                  aria-label={`Go to ${item.toLowerCase()} section`}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;