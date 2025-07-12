"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed, accessibility, and user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams to deliver projects on time and within scope.',
  },
];

const interests = [
  'Full Stack Development',
  'Data Structures & Algorithms (DSA)',
  'Web Development',
  'AI Automation',
  'Web Scraping',
  'Open Source',
  'React Native',
  'DevOps',
  'Prompt Engineering',
  'Hackathons',
  'Gymnastics & Yoga',
];


export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {/* Passionate developer with 5+ years of experience creating digital solutions */}
            Passionate developer creating digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/6964348/pexels-photo-6964348.jpeg?_gl=1*vqhi5r*_ga*MjA1NjEwODI5Ny4xNzM1Mjg2OTk3*_ga_8JE65Q40S6*czE3NTIzMjI1ODIkbzckZzEkdDE3NTIzMjI5MjkkajU5JGwwJGgw"
                alt="Profile"
                width={100}
                height={100}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a passionate full-stack developer based in San Francisco, specializing in 
                modern web technologies. My journey began 5 years ago, and I&apos;ve been fortunate 
                to work with amazing teams on projects that impact thousands of users.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating user experiences 
                that are not just functional, but delightful. When I&apos;m not coding, you&apos;ll 
                find me exploring new technologies, contributing to open source, or capturing 
                moments through photography.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1">
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}