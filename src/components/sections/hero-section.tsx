"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-lg text-muted-foreground">Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
          >
            Nilesh Sharma
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-8 h-16 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "React/Next.js Specialist",
                2000,
                "Full-Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-muted-foreground"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft exceptional digital experiences with modern technologies.
            Passionate about creating scalable, user-centric applications that
            make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full group"
              onClick={() => {
                const element = document.querySelector("#projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full hover:bg-primary/10 border-2"
              >
                <Download className="mr-2 h-5 w-5" />
                <a href="https://drive.google.com/file/d/1f40yOqamamjBJQ7o8yE9sFNFXO4c9Pvx/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/nxtnilesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-14 w-14 rounded-full hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://in.linkedin.com/in/nxtnilesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToNext}
          >
            <span className="text-sm text-muted-foreground mb-2">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rounded-lg animate-float" />
      <div className="absolute top-1/3 right-10 w-16 h-16 border border-purple-500/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-teal-500/20 rounded-full animate-float-delayed-2" />
    </section>
  );
}
