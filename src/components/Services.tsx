import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { MapPin, Globe, Zap, Shield } from 'lucide-react';

const locations = [
  { name: 'Lucknow', status: 'Headquarters', coords: '26.8467° N, 80.9462° E' },
  { name: 'Delhi', status: 'Regional Office', coords: '28.6139° N, 77.2090° E' },
  { name: 'Mumbai', status: 'Regional Office', coords: '19.0760° N, 72.8777° E' },
  { name: 'Bangalore', status: 'Regional Office', coords: '12.9716° N, 77.5946° E' },
  { name: 'Jaipur', status: 'Project Hub', coords: '26.9124° N, 75.7873° E' },
  { name: 'Goa', status: 'Project Hub', coords: '15.2993° N, 74.1240° E' },
];

export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-32 px-6 md:px-24 bg-[#050505] overflow-hidden" data-scroll-section>
      {/* Visible Grid Structure */}
      <div className="absolute inset-0 border-x border-white/5 mx-6 md:mx-24 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col space-y-24 relative z-10">
        {/* Header - Editorial Style */}
        <div className="flex flex-col space-y-8 max-w-4xl">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-[10px] uppercase tracking-[1em] font-black">
              Global Operations
            </span>
          </div>
          <h2 className="text-6xl md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase">
            Pan India <br />
            <span className="text-accent-green italic">Network</span>.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] max-w-sm leading-relaxed font-mono">
              [SYSTEM_CHECK: ALL_HUBS_OPERATIONAL]
              <br />
              From the royal courts of Lucknow to the high-rises of Mumbai, we bring luxury everywhere.
            </p>
            <div className="hidden md:block h-12 w-[1px] bg-white/10" />
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter">06</span>
                <span className="text-[8px] text-white/20 uppercase tracking-widest">Major Hubs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter">24/7</span>
                <span className="text-[8px] text-white/20 uppercase tracking-widest">Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid - Dashboard Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10">
          {/* Left: Map/Visual representation */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-auto overflow-hidden border-r border-white/10 group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 via-transparent to-black" />
            
            {/* Simulated Data Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest">Active_Nodes</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="w-1 h-4 bg-accent-green/40" />
                    ))}
                  </div>
                </div>
                <Globe size={24} className="text-white/20 animate-pulse" />
              </div>

              <div className="relative w-full h-64 border border-white/5 rounded-sm bg-black/40 backdrop-blur-sm p-4">
                <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-accent-green shadow-[0_0_15px_#88AB32] animate-ping" />
                <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-accent-green shadow-[0_0_15px_#88AB32] animate-ping delay-700" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-green shadow-[0_0_15px_#88AB32] animate-ping delay-1000" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-white/40 uppercase">Current_Focus</span>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Lucknow_HQ</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-mono text-white/40 uppercase">Signal_Strength</span>
                    <span className="text-xs font-black text-accent-green uppercase tracking-widest">Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Location List - Data Rows */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center justify-between p-8 hover:bg-accent-green transition-all duration-500 cursor-crosshair"
              >
                <div className="flex flex-col space-y-1">
                  <span className="text-[8px] font-mono text-white/20 group-hover:text-black/40 uppercase tracking-widest">
                    ID: BG_0{index + 1}
                  </span>
                  <span className="text-2xl font-black text-white group-hover:text-black transition-colors uppercase tracking-tighter">
                    {loc.name}
                  </span>
                </div>
                <div className="text-right flex flex-col space-y-1">
                  <span className="text-accent-green text-[10px] uppercase tracking-widest font-black group-hover:text-black transition-colors">
                    {loc.status}
                  </span>
                  <span className="text-white/20 text-[8px] font-mono tracking-tighter group-hover:text-black/40">
                    {loc.coords}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em]">Precision</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              Rapid mobilization of resources across all major metropolitan hubs.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em]">Quality</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              Standardized luxury protocols maintained globally.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em]">Logistics</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              End-to-end management from concept to execution.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em]">Security</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
              High-stakes environment protection and protocol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
