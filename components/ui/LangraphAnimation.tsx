"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  CheckCircle2,
  MessagesSquare,
  Sparkles,
  GitBranch,
} from "lucide-react";

export function LangGraphAnimation() {
  const steps = [
    {
      id: 1,
      label: "Problem Input",
      icon: Code2,
      description: "User submits a DSA problem",
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      label: "Analysis",
      icon: BrainCircuit,
      description: "AI analyzes problem pattern",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      label: "Solution Strategy",
      icon: GitBranch,
      description: "Identifies optimal approach",
      color: "from-cyan-500 to-green-500",
    },
    {
      id: 4,
      label: "Interactive Hints",
      icon: Sparkles,
      description: "Provides guided assistance",
      color: "from-green-500 to-yellow-500",
    },
    {
      id: 5,
      label: "Feedback",
      icon: CheckCircle2,
      description: "Reviews and explains solution",
      color: "from-yellow-500 to-purple-500",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const calculatePosition = (index: number, totalSteps: number) => {
    const radius = 220; // Increased radius for better spacing
    const angleOffset = -90; // Start from the top
    const angle =
      ((index * (360 / totalSteps)) + angleOffset) * (Math.PI / 180);

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[700px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background blur effect for center */}
        <div className="absolute w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />

        {/* Central brain icon */}
        <motion.div
          className="relative w-28 h-28 z-20"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <BrainCircuit className="w-12 h-12 text-white/80" />
          </div>
        </motion.div>

        {/* Connection lines layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          {steps.map((_, index) => {
            const pos = calculatePosition(index, steps.length);
            const angle = Math.atan2(pos.y, pos.x) * (180 / Math.PI);

            return (
              <div
                key={`line-${index}`}
                className="absolute left-1/2 top-1/2 w-[200px] h-[2px] origin-left"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className={`h-full bg-gradient-to-r from-purple-500/30 to-transparent`}
                />
              </div>
            );
          })}
        </div>

        {/* Orbital steps */}
        {steps.map((step, index) => {
          const pos = calculatePosition(index, steps.length);

          return (
            <motion.div
              key={step.id}
              className="absolute left-1/2 top-1/2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: pos.x - 72, // Half of card width (144px / 2)
                y: pos.y - 56, // Approximate half of card height
                scale: activeStep === index ? 1.15 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <div
                className={`bg-gradient-to-br ${step.color} p-1 rounded-2xl w-40`}
              >
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded-2xl flex flex-col items-center">
                  <step.icon className="w-6 h-6 text-white mb-3" />
                  <h3 className="text-sm font-bold text-white text-center mb-2">
                    {step.label}
                  </h3>
                  <p className="text-xs text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active step description */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-lg px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={activeStep}
      >
        <div className="bg-black/70 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg">
          <div className="flex items-center gap-4">
            {(() => {
              const IconComponent = steps[activeStep].icon;
              return <IconComponent className="w-7 h-7 text-white" />;
            })()}
            <div>
              <h4 className="text-lg font-semibold text-white">
                {steps[activeStep].label}
              </h4>
              <p className="text-sm text-gray-300">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
