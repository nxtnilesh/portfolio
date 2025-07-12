"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Joblo.ai",
    location: "Remote",
    period: "Feb 2025 - July 2025",
    type: "Internship",
    description:
      "Contributing to the development of AI-powered job recommendation systems. Built scalable backend features and automated web scraping pipelines integrated with LLMs.",
    achievements: [
      "Built and optimized microservices using Node.js and Express.js",
      "Integrated web scraping pipelines to feed job data into AI models",
      "Improved matching accuracy by refining AI automation logic",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "Scrapy",
      "TypeScript",
      "LLMs",
      "Docker",
      "REST APIs",
    ],
  },
  {
  title: 'Full-Stack Developer',
  company: 'The NorthCap University',
  location: 'Gurugram, India',
  period: 'Aug 2023 – Dec 2023',
  type: 'Internship',
  description:
    'Designed and developed a Lost & Found Management System to help students and staff report, track, and recover lost items within the university campus.',
  achievements: [
    'Built a MERN stack-based web app for managing lost item reports and claims',
    'Enabled students to submit lost/found item reports with descriptions and photos',
    'Improved item recovery rate and reduced manual tracking by digitizing the process'
  ],
  technologies: [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'
  ],
}

];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 animate-pulse" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 ml-12 md:ml-0"
                      : "md:pl-12 ml-12 md:ml-0"
                  }`}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">
                              {experience.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{experience.type}</Badge>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
