import React from 'react';
import { motion } from "framer-motion";
import Brand1 from '../assets/1(1).png';
import Brand2 from '../assets/2(1).png';
import Brand3 from '../assets/3.png';
import Brand4 from '../assets/4.png';
import Brand5 from '../assets/5.png';

export default function Brand() {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5];

  const scrollVariants = {
    animate: {
      x: [0, -1000], 
      transition: {
        x: {
          repeat: Infinity, 
          repeatType: "loop",
          duration: 10, 
          ease: "linear" 
        }
      }
    }
  };

  return (
    <div className="overflow-hidden w-full">
      <h1 className="font-bold text-2xl p-4 text-center">
        The Brands We Have Worked With
      </h1>
      <div className="w-full">
        <motion.div 
          className="flex space-x-8 items-center"
          variants={scrollVariants}
          animate="animate"
        >
          
          {[...brands, ...brands].map((brand, index) => (
            <motion.img 
              key={index} 
              src={brand} 
              alt="brand" 
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}