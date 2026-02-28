import React from 'react';
import { motion } from 'motion/react';
import { Brain, Bot, Code } from 'lucide-react';
import servicesData from '../data/services.json';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Bot,
  Code,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            We deliver end-to-end software solutions designed to scale your business and automate the mundane.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-indigo-400" />}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
