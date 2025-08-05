"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "ChatGPT Clone",
    description:
      "A full-stack conversational AI chatbot with streaming responses, file uploads, memory via mem0, and message editing—auth powered by Clerk.",
    image:
      "https://images.pexels.com/photos/15863066/pexels-photo-15863066.jpeg?_gl=1*1p4rec*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjM4MDYkajM1JGwwJGgw",
    technologies: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "Zustand",
      "MongoDB",
      "Tailwind CSS",
      "Vercel AI SDK",
      "mem0",
      "LLMs",
    ],
    category: "AI/ML",
    featured: true,
    links: {
      demo: "https://final-clone-sigma.vercel.app/",
      github: "https://github.com/nxtnilesh/final-clone",
    },
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A modern, fully responsive portfolio built with Next.js and TypeScript featuring dark mode, animated sections, contact form validation, and projects showcase.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Lucide React",
      "Framer Motion",
      "React Type Animation",
      "Next Themes",
      "Sonner",
      "React Intersection Observer",
    ],
    category: "Frontend",
    featured: true,
    links: {
      demo: "https://nxtnilesh.vercel.app/",
      github: "https://github.com/nxtnilesh/portfolio",
    },
  },
  {
    id: 3,
    title: "CarbEase – Carbon Credit Marketplace",
    description:
      "A full-stack platform for trading carbon credits with JWT-based authentication, buyer/seller dashboards, and secure transactions.",
    image:
      "https://images.pexels.com/photos/8938679/pexels-photo-8938679.jpeg?_gl=1*m7kh6f*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjQ1MjkkajQzJGwwJGgw",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "JWT",
      "Tailwind CSS",
      "Magic UI",
    ],
    category: "Full-Stack",
    featured: false,
    links: {
      demo: "https://carbonease.vercel.app/",
      github: "https://github.com/nxtnilesh/carbonEase",
    },
  },
  {
    id: 5,
    title: "EduEase – AI-Powered Quiz & Learning Assistant",
    description:
      "An AI-driven platform that generates personalized quizzes, tracks student performance, and offers an interactive chat assistant for learning support.",
    image:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?_gl=1*78vr4h*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjQ4ODYkajckbDAkaDA.",
    technologies: [
      "React.js",
      "Flask",
      "MongoDB",
      "Tailwind CSS",
      "LLMs",
      "Ollama",
      "Python",
      "Firebase",
    ],
    category: "AI/ML",
    featured: true,
    links: {
      demo: "https://eduease-n18l.onrender.com/",
      github: "https://github.com/nxtnilesh/eduease",
    },
  },
  {
    id: 6,
    title: "PropertyYatra – Property Listing Platform",
    description:
      "A full-stack real estate platform to explore, list, and manage premium properties including PGs, apartments, commercial land, and plots for rent or sale.",
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?_gl=1*1fmwyg0*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjUwMjUkajQ3JGwwJGgw",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    category: "Full-Stack",
    featured: false,
    links: {
      demo: "https://propertyyatra.vercel.app/",
      github: "https://github.com/YashSharma10/Property-Yatra",
    },
  },
  {
    id: 7,
    title: "Lost & Found – Campus Item Management System",
    description:
      "A full-stack system designed to report, track, and recover lost items across a university campus, featuring role-based dashboards and real-time updates.",
    image:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?_gl=1*xbg3vw*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjUxMDgkajM2JGwwJGgw",
    technologies: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "Google Maps API",
      "REST APIs",
    ],
    category: "Full-Stack",
    featured: false,
    links: {
      demo: "https://lofo-frontend.onrender.com/",
      github: "https://github.com/nxtnilesh/lofo",
    },
  },
  {
    id: 8,
    title: "CityEase – Smart City Utility & Complaint Portal",
    description:
      "A civic-tech platform enabling citizens to report issues, access local services, and track complaint resolutions. Built for seamless city administration and public engagement.",
    image:
      "https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?_gl=1*1e2dyy0*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjU2MjUkajMwJGwwJGgw",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
    ],
    category: "Full-Stack / Civic-Tech",
    featured: false,
    links: {
      demo: "https://city-ease.vercel.app/",
      github: "https://github.com/nxtnilesh/cityease",
    },
  },
  {
    id: 9,
    title: "PremiumHomes – Real Estate Platform",
    description:
      "A sleek and modern platform to explore and manage premium properties, built with React, TypeScript, ShadCN UI, and Framer Motion. Features smart filtering, blog insights, and a responsive design.",
    image:
      "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?_gl=1*gr5otg*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjU5NDQkajQyJGwwJGgw",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
    ],
    category: "Frontend",
    featured: false,
    links: {
      demo: "https://premiumproperty.vercel.app/",
      github: "https://github.com/nxtnilesh/premiumproperty",
    },
  },
  {
    id: 10,
    title: "Microservices Architecture – Scalable Property Platform",
    description:
      "A modular, secure, and production-ready real estate backend system based on microservices architecture. Includes API gateway, auth, search, media, messaging, and post services.",
    image:
      "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?_gl=1*gr5otg*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjU5NDQkajQyJGwwJGgw",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "Elasticsearch",
      "RabbitMQ",
      "Redis",
      "JWT",
      "OAuth",
      "Cloudinary",
      "Multer",
      "Sharp",
      "Docker",
    ],
    category: "Backend",
    featured: true,
    links: {
      demo: "",
      github: "https://github.com/nxtnilesh/microservice-property",
    },
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI/ML"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Featured Work
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">
                          {project.title}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
