"use client"

import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0A0A0A]">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"
        style={{
          maskImage: 'radial-gradient(ellipse at center, transparent 0%, black 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 0%, black 70%)'
        }}
      />
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/0" />
    </div>
  )
}

