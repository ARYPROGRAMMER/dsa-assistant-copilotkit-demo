"use client"
import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { MenuIcon, XIcon, Code, Cpu, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.8)"]
  )

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)


  return (
    <motion.header
      style={{ backgroundColor }}
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">DSA Assistant</span>
          </Link>


          {/* <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div> */}

          <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white">
              <Cpu className="mr-2 h-4 w-4" />
              Powered by CopilotKit
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Button className="hidden md:inline-flex">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-2 bg-gray-800 rounded-lg"
          >
    
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

