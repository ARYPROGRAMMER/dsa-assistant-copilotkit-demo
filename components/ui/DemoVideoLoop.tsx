"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Cpu, Code } from 'lucide-react'

export function DemoVideoLoop() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { title: "User asks a DSA question", content: "How does QuickSort work?", icon: MessageSquare },
    { title: "AI analyzes the question", content: "Processing query about QuickSort algorithm", icon: Cpu },
    { title: "CoAgent selects appropriate response", content: "Selecting detailed explanation with visualization", icon: Cpu },
    { title: "AI generates response", content: "QuickSort is a divide-and-conquer algorithm that works by selecting a 'pivot' element and partitioning the array around it...", icon: Code },
    { title: "User receives interactive explanation", content: "Animated visualization of QuickSort process", icon: MessageSquare },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              {(() => {
                const IconComponent = steps[currentStep].icon;
                return <IconComponent className="h-6 w-6 text-white" />;
              })()}
            </div>
            <h3 className="text-lg font-semibold text-purple-400">{steps[currentStep].title}</h3>
          </div>
          <div className="bg-gray-900 rounded p-4 min-h-[100px] flex items-center justify-center">
            <p className="text-center text-gray-300">{steps[currentStep].content}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentStep ? 'bg-purple-500' : 'bg-gray-600'}`}
            animate={{ scale: index === currentStep ? 1.2 : 1 }}
          />
        ))}
      </div>
    </div>
  )
}

