"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <motion.h1
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          TechGear
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)} // close menu on click
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
