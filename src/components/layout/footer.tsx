"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/nxtnilesh', label: 'GitHub' },
   { icon: FaLinkedin, href: 'https://in.linkedin.com/in/nxtnilesh', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nxtnilesh@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">Portfolio</h3>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Portfolio
          </p>
        </motion.div>
      </div>
    </footer>
  );
}