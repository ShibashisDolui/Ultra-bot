"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.img
        src="/logo.svg"
        alt="UltraBot logo"
        className="w-64 mb-8"
        initial={{ y: -1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <button
        className="px-8 py-4 text-white text-4xl bg-transparent  focus:outline-none animate-pulse"
        onClick={(e) => signIn("google")}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Sign In to Use UltraBot
        </span>
      </button>
    </div>
  );
}

export default Login;
