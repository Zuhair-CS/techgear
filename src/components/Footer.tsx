"use client";

import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { Icon: Instagram, href: "#", color: "hover:text-pink-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="w-full bg-gradient-to-t from-black to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h3
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            TechGear
          </motion.h3>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Premium mobile accessories designed for performance and style.
          </motion.p>
          
          {/* Animated decoration */}
          <motion.div
            className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h4
            className="text-2xl font-bold text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.h4>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail size={20} className="text-blue-400 group-hover:text-blue-300" />
              </motion.div>
              support@techgear.com
            </motion.div>
            
            <motion.div
              className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone size={20} className="text-green-400 group-hover:text-green-300" />
              </motion.div>
              +91 98xxx xxxxx
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h4
            className="text-2xl font-bold text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Follow Us
          </motion.h4>
          
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {socialIcons.map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`p-3 bg-gray-800 rounded-full border border-gray-700 text-gray-400 ${color} transition-all duration-300 group hover:bg-gray-700`}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Icon size={24} className="group-hover:drop-shadow-lg" />
                
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Copyright section */}
      <motion.div
        className="border-t border-gray-800 py-8 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-gray-400 text-sm relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#60a5fa",
            }}
            transition={{ duration: 0.2 }}
          >
            © {new Date().getFullYear()} TechGear.
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            All rights reserved.
          </motion.span>
        </motion.div>
      </motion.div>
    </footer>
  );
}