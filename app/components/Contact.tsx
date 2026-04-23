"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import TiltCard from "./TiltCard";

const contactItems = [
  {
    icon: HiMail,
    label: "Email",
    value: "salman.bokhari10@gmail.com",
    href: "mailto:salman.bokhari10@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+923365300960",
    href: "tel:+923365300960",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-12">
            Looking for a DevOps or Cloud Engineer? Need help with AWS infrastructure,
            Kubernetes, or CI/CD automation? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              {item.href ? (
                <TiltCard className="block p-6 rounded-2xl bg-surface border border-surface-light hover:border-primary/40 transition-colors group h-full">
                  <a href={item.href} className="block">
                    <item.icon className="text-2xl text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-xs text-muted mb-1">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors break-all sm:break-normal">
                      {item.value}
                    </p>
                  </a>
                </TiltCard>
              ) : (
                <TiltCard className="p-6 rounded-2xl bg-surface border border-surface-light hover:border-primary/40 transition-colors group h-full">
                  <item.icon className="text-2xl text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-125" />
                  <p className="text-xs text-muted mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </TiltCard>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative inline-block"
        >
          {/* Pulsing glow ring behind button */}
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none" />
          <motion.a
            href="mailto:salman.bokhari10@gmail.com"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(59,130,246,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex px-10 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-colors text-lg animate-gradient-shift"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)",
              backgroundSize: "200% 200%",
            }}
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
