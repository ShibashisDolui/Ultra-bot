"use client";
import { motion } from "framer-motion";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 text-white bg-gradient-to-br from-indigo-900 to-pink-900 relative">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold">UltraBot</h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="ml-4 flex items-center justify-center h-16 w-16"
        >
          <motion.div
            animate={{ y: [-5, 0, -5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <ChatBubbleBottomCenterIcon className="h-8 w-8 text-pink-200" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
