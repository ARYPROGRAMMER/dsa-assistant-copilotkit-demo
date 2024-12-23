"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Network,
  Zap,
  Github,
  Terminal,
  Code2,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { LangGraphAnimation } from "@/components/ui/LangraphAnimation";
import { DemoVideoLoop } from "@/components/ui/DemoVideoLoop";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <AnimatedGradient />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24 px-6 sm:px-8">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-64 h-64">
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500/20 animate-glow"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <div className="container mx-auto relative z-10 max-w-[1200px]">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Master
                <br />
                <span className="gradient-text">
                  Data Structures & Algorithms
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
                Elevate your coding skills with our AI-powered DSA learning
                platform
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mt-6"
            >
              <Link href="/learn">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Start Learning
                    <Terminal className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-500/50 blur-lg group-hover:opacity-100 opacity-0 transition-opacity" />
                </Button>
              </Link>
              <Link href="https://github.com/yourusername/your-repo">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-purple-700/50 hover:bg-purple-700/10"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Source
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-2 text-sm text-purple-400 mt-4"
            >
              <Cpu className="h-4 w-4" />
              <span>Powered by CopilotKit CoAgents</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LangGraph Animation Section */}
      <section className="py-24 px-6 sm:px-8 bg-gray-900">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            AI-Powered Learning Process
          </h2>
          <LangGraphAnimation />
        </div>
      </section>

      {/* Demo Video Loop Section */}
      <section className="py-24 px-6 sm:px-8 bg-black">
        <div className="container mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            Experience DSA Assistant in Action
          </h2>
          <DemoVideoLoop />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 sm:px-8">
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-3"
          >
            <FeatureCard
              icon={Brain}
              title="AI-Powered Learning"
              description="Leverage CopilotKit CoAgents for personalized DSA guidance and adaptive learning paths."
              gradient="from-purple-500 to-blue-500"
            />
            <FeatureCard
              icon={Network}
              title="Interactive Visualizations"
              description="See algorithms come to life with our dynamic visual representations powered by AI."
              gradient="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={Code2}
              title="Intelligent Practice"
              description="Reinforce your learning with AI-generated coding challenges tailored to your skill level."
              gradient="from-cyan-500 to-purple-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            animate={{
              y: [0, -10, 0],
              // rotate: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative aspect-video rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-purple-500/20"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Learn DSA with{" "}
                <span className="gradient-text">AI Assistance</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform leverages CopilotKit CoAgents to provide
                intelligent, context-aware guidance as you learn and practice
                DSA concepts.
              </p>
              <div className="space-y-4">
                <CodeFeature
                  title="Smart Code Suggestions"
                  description="Get AI-powered hints and code completions"
                />
                <CodeFeature
                  title="Contextual Explanations"
                  description="Receive in-depth explanations tailored to your learning progress"
                />
                <CodeFeature
                  title="Adaptive Challenges"
                  description="Face dynamically generated problems that match your skill level"
                />
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-purple-500/20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-6"
              >
                <pre className="text-purple-300/90 overflow-auto h-full">
                  <TypewriterEffect
                    text={`// AI-assisted learning with CopilotKit CoAgents
import { useCoAgent } from 'copilotkit';

function LearnQuickSort() {
  const coAgent = useCoAgent('dsa-tutor');

  const [userCode, setUserCode] = useState('');
  const [feedback, setFeedback] = useState('');

  async function checkSolution() {
    const result = await coAgent.evaluate({
      code: userCode,
      task: 'implement quicksort algorithm'
    });

    setFeedback(result.feedback);
  }

  return (
    <div>
      <CodeEditor value={userCode} onChange={setUserCode} />
      <button onClick={checkSolution}>Check Solution</button>
      <FeedbackDisplay>{feedback}</FeedbackDisplay>
    </div>
  );
}`}
                  />
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master DSA with AI?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands of developers improving their skills with CopilotKit
            CoAgents.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-100"
            >
              Get Started for Free
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: any;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="relative group rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6 overflow-hidden"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <div className="relative z-10">
        <div
          className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${gradient} p-3`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-2 font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

function CodeFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-4">
      <div className="rounded-full bg-purple-500/10 p-2">
        <Code2 className="h-4 w-4 text-purple-400" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function TypewriterEffect({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("\n").map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}
