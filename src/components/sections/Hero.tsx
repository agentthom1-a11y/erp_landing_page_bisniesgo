'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/src/components/ui/Button';
import { CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Hero = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-main">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-light/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Unique Side Badge */}
          <div className="absolute top-0 left-6 lg:left-0 -translate-y-full mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-brand-light/10 border-l-4 border-brand-light text-brand-light rounded-r-xl relative group overflow-hidden shadow-2xl shadow-brand-light/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-light/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
              </span>
              <span className="text-sm font-black uppercase tracking-widest relative">
                Produk Unggulan Bisniesgo
              </span>
            </motion.div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter text-gradient">
            Satu Sistem,<br />
            <span className="text-brand-light relative">
              Segala Solusi.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 h-1 bg-brand-light/30 rounded-full"
              />
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 font-medium mb-6 leading-relaxed max-w-lg">
            ERP untuk bisnis Indonesia yang ingin <span className="text-white italic">tumbuh</span>, tertata, dan <span className="text-brand-light underline decoration-brand-light/30 underline-offset-4">scalable</span>.
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
            Satu sistem terintegrasi untuk mengelola seluruh operasional bisnis Anda secara real-time, akurat, dan terstandarisasi.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="h-16 px-10 text-lg rounded-2xl group relative overflow-hidden" onClick={onBookDemo}>
              <span className="relative z-10 flex items-center">
                Jadwalkan Demo
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-10 text-lg rounded-2xl border-white/5 hover:bg-white/5" onClick={() => {
              document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Pelajari Ekosistem
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 border-t border-white/5">
            {[
              'End-to-End',
              'Real-time',
              'Scalable',
              'Enterprise-Grade',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-gray-500 font-black uppercase tracking-widest text-[10px]">
                <div className="w-1 h-1 rounded-full bg-brand-light/40" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
            {/* Dashboard Mockup - Rendered with Tailwind */}
            <div className="relative glass rounded-2xl shadow-2xl p-4 aspect-video sm:aspect-[4/3] w-full overflow-hidden border border-white/10 group">
              {/* Background Indonesian Business Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/hero.png" 
                  alt="Indonesian Business ERP" 
                  fill
                  priority
                  className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent" />
              </div>

              {/* Live Cashflow Stream - Hero Overlay */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-brand-light/10 to-transparent pointer-events-none z-20 hidden sm:flex items-center overflow-hidden">
               <motion.div 
                 animate={{ x: ["0%", "-50%"] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="flex gap-8 whitespace-nowrap px-4"
               >
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="flex items-center gap-2">
                       <span className="text-[8px] font-black text-brand-light uppercase tracking-tighter">Incoming Payment</span>
                       <span className="text-[10px] font-bold text-white">Rp {(Math.random() * 50 + 10).toFixed(1)}M</span>
                       <div className="w-1 h-1 rounded-full bg-brand-light" />
                    </div>
                  ))}
               </motion.div>
            </div>

            {/* Mock Header */}
            <div className="flex items-center justify-between mb-6 px-2 border-b border-white/5 pb-4 pt-4">
              <div className="flex gap-1.5 grayscale opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-green-400/50" />
              </div>
              <div className="text-[10px] text-gray-500 font-mono">sinar-erp.bisniesgo.cloud</div>
            </div>

            {/* Mock Sidebar */}
            <div className="absolute left-4 top-20 bottom-4 w-12 bg-white/5 rounded-xl flex flex-col items-center py-4 gap-6 opacity-40">
               <div className="w-8 h-8 rounded bg-brand-light/40" />
               <div className="w-8 h-8 rounded bg-white/10" />
               <div className="w-8 h-8 rounded bg-white/10" />
               <div className="w-8 h-8 rounded bg-white/10" />
            </div>

            {/* Mock Content */}
            <div className="ml-16 mt-2 space-y-6">
              <div className="flex justify-between items-center">
                <div className="w-32 h-6 bg-white/10 rounded" />
                <div className="w-24 h-8 bg-brand-light rounded-full opacity-80" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-3">
                    <div className="text-[8px] uppercase text-gray-400 mb-1">Metrics {i}</div>
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="text-lg font-bold text-white">Rp 42.5M</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-6 h-48 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <div className="text-xs font-bold text-gray-400">Statistik Pertumbuhan</div>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-brand-light" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                </div>
                <div className="flex items-end justify-between gap-2 h-24 mt-4 relative">
                  {/* Trend line overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <motion.path 
                       d="M 0 80 L 10 70 L 20 85 L 30 60 L 40 75 L 50 40 L 60 55 L 70 20 L 80 45 L 90 30 L 100 10"
                       fill="none"
                       stroke="rgba(152, 214, 0, 0.4)"
                       strokeWidth="2"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 1 }}
                     />
                  </svg>
                  {[40, 70, 45, 90, 65, 80, 55, 95, 75, 40].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className={cn(
                        "w-full rounded-t transition-all duration-500",
                        h > 80 ? "bg-brand-light shadow-[0_0_15px_rgba(152,214,0,0.4)]" : "bg-white/10"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating card decoration */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl border border-white/10 hidden lg:block"
          >
            <div className="text-sm font-bold text-gray-400 mb-1">Growth rate</div>
            <div className="text-2xl font-black text-brand-light">+24.8%</div>
            <div className="text-xs text-gray-500 mt-2 italic">Scale your business faster</div>
          </motion.div>

          {/* Growth Gain Chart - Psychological High Profit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, type: 'spring' }}
            className="absolute -top-16 -right-8 glass p-5 rounded-3xl border border-brand-light/20 shadow-2xl z-30 w-44 hidden lg:block"
          >
             <div className="flex justify-between items-start mb-3">
                <div className="space-y-0.5">
                   <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Revenue Gain</div>
                   <div className="text-xl font-black text-white">+420%</div>
                </div>
                <div className="p-1.5 rounded-full bg-brand-light/20">
                   <TrendingUp className="w-4 h-4 text-brand-light" />
                </div>
             </div>
             <div className="h-16 w-full relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <defs>
                      <linearGradient id="gainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style={{ stopColor: '#98D600', stopOpacity: 0.4 }} />
                         <stop offset="100%" style={{ stopColor: '#98D600', stopOpacity: 0 }} />
                      </linearGradient>
                   </defs>
                   <motion.path
                     d="M 0 100 C 20 100, 40 80, 50 50 S 80 20, 100 0"
                     fill="none"
                     stroke="#98D600"
                     strokeWidth="4"
                     strokeLinecap="round"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                   />
                   <motion.path
                     d="M 0 100 C 20 100, 40 80, 50 50 S 80 20, 100 0 L 100 100 L 0 100 Z"
                     fill="url(#gainGrad)"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1, delay: 2.5 }}
                   />
                </svg>
             </div>
             <div className="mt-2 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                   {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-white/10 border border-bg-main" />)}
                </div>
                <span className="text-[7px] text-gray-500 font-bold uppercase">New Clients today</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

