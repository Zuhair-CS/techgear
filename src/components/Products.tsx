"use client";

import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    { name: "Wireless Earbuds", price: "$49", image: "/images/product1.png" },
    { name: "Fast Charging Cable", price: "$15", image: "/images/product2.jpg" },
    { name: "Phone Stand", price: "$20", image: "/images/product3.jpg" },
    { name: "Power Bank", price: "$35", image: "/images/product4.jpg" },
    { name: "Bluetooth Speaker", price: "$60", image: "/images/product5.jpg" },
    { name: "Car Charger", price: "$25", image: "/images/product6.jpg" },
    { name: "Screen Protector", price: "$10", image: "/images/product7.jpg" },
    { name: "Smartwatch", price: "$120", image: "/images/product8.jpg" },
    { name: "Phone Case", price: "$18", image: "/images/product9.jpg" },
    { name: "Wireless Charger", price: "$40", image: "/images/product10.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="products" className="w-full bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container relative z-10 py-20">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Products
        </motion.h2>

        <motion.div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}