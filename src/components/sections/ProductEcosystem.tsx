'use client';
import { motion } from 'motion/react';
import { Layout, ShoppingCart, Package, DollarSign, Users, Briefcase, Heart, BarChart3, ChevronRight, TrendingUp, CreditCard, Search, Plus, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const products = [
  {
    id: 'erp',
    name: 'SINAR ERP',
    description: 'Solusi manajemen bisnis terintegrasi dari hulu ke hilir untuk skalabilitas tanpa batas.',
    icon: Layout,
    featured: true,
    gridClass: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: 'pos',
    name: 'SINAR POS',
    description: 'Sistem kasir modern untuk ritel dan F&B.',
    icon: ShoppingCart,
    gridClass: "lg:col-span-2",
  },
  {
    id: 'finance',
    name: 'SINAR Finance',
    description: 'Laporan keuangan dan arus kas yang presisi.',
    icon: DollarSign,
    gridClass: "lg:col-span-2",
  },
  {
    id: 'inventory',
    name: 'SINAR Inventory',
    description: 'Manajemen stok gudang akurat.',
    icon: Package,
    gridClass: "lg:col-span-2",
  },
  {
    id: 'hr',
    name: 'SINAR HR',
    description: 'Kelola SDM dan penggajian otomatis.',
    icon: Users,
    gridClass: "lg:col-span-2",
  },
  {
    id: 'crm',
    name: 'SINAR CRM',
    description: 'Hubungan pelanggan lebih kuat.',
    icon: Heart,
    gridClass: "lg:col-span-2",
  },
  {
    id: 'analytics',
    name: 'SINAR Analytics',
    description: 'Insight berbasis data strategis.',
    icon: BarChart3,
    gridClass: "lg:col-span-2",
  },
];

const ProductUIMock = ({ id, isFeatured }: { id: string; isFeatured?: boolean }) => {
  const dots = (
    <div className="flex gap-1.5 mb-4 opacity-30">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
    </div>
  );

  switch (id) {
    case 'erp':
      return (
        <div className="w-full h-full p-6 flex flex-col gap-6">
          {dots}
          <div className="flex gap-6 h-full">
            <div className="hidden sm:flex flex-col gap-4 w-12 pt-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={cn("w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center", i === 1 ? "bg-brand-light/10 text-brand-light" : "bg-white/2 opacity-20")}>
                  {i === 1 && <Layout className="w-5 h-5" />}
                </div>
              ))}
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Revenue', val: 'Rp 4.2B', grow: '+12%' },
                  { label: 'Orders', val: '1,284', grow: '+8%' },
                  { label: 'Growth', val: '24.8%', grow: '+4%' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                    <div className="text-lg font-black text-white">{stat.val}</div>
                    <div className="text-[10px] text-brand-light font-bold">{stat.grow}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-white/2 border border-white/5 flex-1 relative overflow-hidden group/chart">
                <div className="flex items-end justify-between h-32 gap-1">
                  {[40, 70, 45, 90, 65, 80, 55, 95, 75, 40, 85, 60, 90, 70, 50].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.03, duration: 0.5 }}
                      className="flex-1 bg-brand-light/20 rounded-t-sm group-hover/chart:bg-brand-light/40 transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'pos':
      return (
        <div className="w-full h-full p-5 flex flex-col gap-4">
          {dots}
          <div className="flex-1 bg-white/2 border border-white/5 rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <div className="w-20 h-2 bg-white/10 rounded-full" />
              <div className="w-8 h-4 bg-brand-light/20 rounded text-[8px] font-bold text-brand-light flex items-center justify-center">NEW</div>
            </div>
            <div className="space-y-3">
              {[1, 2].map(i => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5" />
                    <div className="space-y-1.5">
                      <div className="w-16 h-2 bg-white/10 rounded" />
                      <div className="w-10 h-1.5 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-white">Rp 45k</div>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-white/5">
               <div className="w-full h-8 bg-brand-light rounded-lg opacity-80" />
            </div>
          </div>
        </div>
      );
    case 'finance':
      return (
        <div className="w-full h-full p-5 flex flex-col gap-4">
           {dots}
           <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="w-32 h-32 relative">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className="stroke-white/5 fill-none stroke-[8]" />
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    className="stroke-brand-light fill-none stroke-[8]" 
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * 0.25 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="text-xl font-black text-white">75%</div>
                   <div className="text-[8px] font-bold text-gray-500 uppercase">Target</div>
                </div>
              </div>
           </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full p-5 flex flex-col gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
          {dots}
          <div className="flex-1 bg-white/2 border border-white/5 rounded-xl p-3 space-y-3">
            <div className="w-full h-2 bg-white/10 rounded-full" />
            <div className="w-2/3 h-2 bg-white/5 rounded-full" />
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-10 bg-white/5 rounded-lg" />
              <div className="h-10 bg-white/5 rounded-lg" />
            </div>
          </div>
        </div>
      );
  }
};

export const ProductEcosystem = () => {
  return (
    <section id="produk" className="py-24 lg:py-32 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex flex-col mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-brand-light/10 border-l-4 border-brand-light text-brand-light rounded-r-xl relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
                </span>
                <span className="text-sm font-black uppercase tracking-widest relative">
                  Ecosystem Showcase
                </span>
              </motion.div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Satu Ekosistem.<br />
              <span className="text-brand-light">Semua Terhubung.</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-md font-medium leading-relaxed">
            Produk SaaS terintegrasi untuk setiap kebutuhan bisnis Anda, membantu operasional berjalan dalam satu irama yang harmonis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden glass border-white/5 hover:border-brand-light/20 transition-all duration-700 flex flex-col",
                product.gridClass || "md:col-span-3 lg:col-span-2"
              )}
            >
              {/* Product UI Preview Mock */}
              <div className={cn(
                "w-full overflow-hidden relative bg-white/[0.01] border-b border-white/5 group-hover:bg-white/[0.03] transition-colors",
                product.featured ? "aspect-[16/10] lg:aspect-auto lg:h-[320px]" : "aspect-[16/10]"
              )}>
                 <ProductUIMock id={product.id} isFeatured={product.featured} />
                 
                 {/* Premium Shine Effect */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-light/0 via-brand-light/5 to-brand-light/10" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-light/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                 </div>
              </div>

              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-light/5 text-brand-light border border-brand-light/10 group-hover:scale-110 transition-transform duration-500 shadow-lg",
                    product.featured && "w-16 h-16 bg-brand-light text-brand-dark"
                  )}>
                    <product.icon className={cn("w-7 h-7", product.featured && "w-8 h-8")} />
                  </div>
                  
                  {product.featured && (
                    <div className="px-3 py-1 rounded-full bg-brand-light/10 border border-brand-light/20 text-brand-light text-[10px] font-black uppercase tracking-widest">
                        Flagship Solution
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <h3 className={cn(
                    "text-2xl font-black mb-3 text-white tracking-tight group-hover:text-brand-light transition-colors",
                    product.featured && "text-3xl lg:text-4xl"
                  )}>
                    {product.name}
                  </h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-light font-black uppercase tracking-widest text-[10px] cursor-pointer group/link">
                    Explore Module
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              {/* Animated Glow on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-light/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Trust indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-[2rem] glass border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-1">
            <div className="text-white font-black text-xl tracking-tight">Butuh solusi yang dikustomisasi?</div>
            <div className="text-gray-400 font-medium">Tim konsultan kami siap membantu merancang ekosistem yang tepat untuk bisnis Anda.</div>
          </div>
          <button className="px-8 py-4 bg-brand-light text-brand-dark font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-3">
             Hubungi Spesialis
             <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};



