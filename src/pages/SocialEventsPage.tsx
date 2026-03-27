import React from 'react';
import { motion } from 'motion/react';
import { Heart, Music, Sparkles, Star } from 'lucide-react';

const socialServices = [
  {
    title: 'Heritage Weddings',
    description: 'Bespoke wedding experiences that blend timeless traditions with modern luxury.',
    icon: <Heart size={24} />,
  },
  {
    title: 'Private Soirées',
    description: 'Exclusive, intimate gatherings designed for the most discerning hosts and their guests.',
    icon: <Music size={24} />,
  },
  {
    title: 'Celebration Galas',
    description: 'Milestone celebrations that turn personal achievements into unforgettable spectacles.',
    icon: <Star size={24} />,
  },
  {
    title: 'Themed Parties',
    description: 'Immersive, concept-driven events that push the boundaries of imagination and design.',
    icon: <Sparkles size={24} />,
  },
];

export const SocialEventsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-24 px-6 md:px-24 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              Social Elegance
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter">
            Curating <span className="text-accent-green italic">Personal</span> Masterpieces.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {socialServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-accent-green/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-accent-green mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/40 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Social Image */}
        <div className="relative h-[600px] rounded-[60px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" 
            alt="Social Event" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-lg">
            <p className="text-white text-2xl font-medium leading-relaxed italic">
              "Every celebration is a story. We are the architects who ensure that every chapter is written in luxury and elegance."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
