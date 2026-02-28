import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import testimonialsData from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here's what our partners have to say about working with vectech-ai.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-indigo-500/20" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover bg-slate-800"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
