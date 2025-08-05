"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "MongoDb", level: 85 },
      { name: "SpringBoot", level: 78 },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const technologies = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Flask",
  "Python",
  "Scrapy",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Vercel AI SDK",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "WebSockets",
  "Clerk",
  "NextAuth",
  "Zustand",
  "Redux",
  "mem0",
  "LLMs",
  "LangChain",
];

const techCategories = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        url: "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        name: "Next.js",
        url: "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
      },
      {
        name: "Vite",
        url: "https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
      },
      {
        name: "CSS3",
        url: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        name: "TailwindCSS",
        url: "https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        url: "https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        name: "Express.js",
        url: "https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=white",
      },
      {
        name: "Fastify",
        url: "https://img.shields.io/badge/Fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white",
      },
      {
        name: "Flask",
        url: "https://img.shields.io/badge/Flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
      },
      {
        name: "Spring",
        url: "https://img.shields.io/badge/Spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",
      },
      {
        name: "Socket.io",
        url: "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
      },
    ],
  },
  {
    title: "Languages",
    items: [
      {
        name: "Java",
        url: "https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      },
      {
        name: "Python",
        url: "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      },
      {
        name: "JavaScript",
        url: "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        name: "TypeScript",
        url: "https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      },
    ],
  },
  {
    title: "Database & DevOps",
    items: [
      {
        name: "MongoDB",
        url: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
      },
      {
        name: "MySQL",
        url: "https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        name: "Redis",
        url: "https://img.shields.io/badge/Redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
      },
      {
        name: "Firebase",
        url: "https://img.shields.io/badge/Firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=white",
      },
      {
        name: "Git",
        url: "https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      },
      {
        name: "GitHub",
        url: "https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "Vercel",
        url: "https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
      },
    ],
  },
];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </motion.div>
        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >

          <div className="space-y-10">
            {techCategories.map((category, catIndex) => (
              <div key={category.title}>
                <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.8 + techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer"
                    >
                      <img src={tech.url} alt={tech.name} className="h-10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + skillIndex * 0.1 + 0.3,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={inView ? skill.level : 0}
                        className="h-2"
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}

        {/* Technology Stack */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
