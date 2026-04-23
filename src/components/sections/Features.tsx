'use client';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, BarChart, Settings, Users, Layers, MessageSquare, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const coreFeatures = [
  {
    title: 'Integrasi Lintas Departemen',
    description: 'Hubungkan penjualan, gudang, keuangan, hingga HR dalam satu alur yang seamless dan terautomasi.',
    icon: Layers,
  },
  {
    title: 'Monitoring Real-time',
    description: 'Pantau performa bisnis di mana saja dan kapan saja dengan data yang selalu akurat dan terupdate tiap detik.',
    icon: Zap,
  },
  {
    title: 'Automasi Proses Operasional',
    description: 'Kurangi kesalahan manusia dengan sistem pergerakan stok, invoicing, dan posting jurnal otomatis.',
    icon: Settings,
  },
  {
    title: 'Akurasi Data dan Laporan',
    description: 'Dapatkan laporan keuangan (P&L, Balance Sheet) yang presisi tanpa perlu rekonsiliasi manual yang lama.',
    icon: BarChart,
  },
  {
    title: 'Skalabilitas Bisnis Tanpa Batas',
    description: 'Sistem yang siap tumbuh bersama perusahaan Anda, mampu menangani volume transaksi jutaan per bulan.',
    icon: Globe,
  },
  {
    title: 'Keamanan Data Enterprise',
    description: 'Perlindungan data sensitif dengan protokol enkripsi modern dan manajemen otorisasi pengguna yang ketat.',
    icon: ShieldCheck,
  },
];

export const Features = () => {
  return (
    <section id="solusi" className="py-24 lg:py-40 bg-bg-main relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-light/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="flex flex-col mb-8">
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
                Core Capabilities
              </span>
            </motion.div>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
            Kekuatan di Balik <br /> 
            <span className="text-gradient">Transformasi Bisnis Anda.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
            SINAR ERP bukan sekadar perangkat lunak, melainkan fondasi untuk membangun disiplin operasional dan kejelasan strategis.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={cn(
                "group relative p-10 rounded-[3rem] glass border-white/5 hover:border-brand-light/20 transition-all duration-700 h-full flex flex-col",
                index % 3 === 0 ? "lg:col-span-7" : index % 3 === 1 ? "lg:col-span-5" : "lg:col-span-12"
              )}
            >
              <div className="flex items-start justify-between mb-12">
                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-light/5 text-brand-light border border-brand-light/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="text-[40px] font-black text-white/5 group-hover:text-brand-light/10 transition-colors">
                  0{index + 1}
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover:text-brand-light transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative line beam on hover */}
              <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-brand-light/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote - Unique Placement */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative group">
              <div className="absolute -inset-4 bg-brand-light/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass p-12 rounded-[3rem] border-brand-light/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <MessageSquare className="w-12 h-12 text-brand-light/20" />
                </div>
                <blockquote className="text-3xl lg:text-4xl font-black text-white italic leading-tight mb-8">
                  "SINAR ERP membantu kami mendigitalisasi proses manual yang rumit menjadi satu dashboard yang <span className="text-brand-light">sangat jernih</span>."
                </blockquote>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-light/20 border border-brand-light/40" />
                   <div>
                      <div className="font-black text-white uppercase tracking-widest text-xs">CEO, PT Niaga Nusantara</div>
                      <div className="text-brand-light text-[10px] font-bold uppercase tracking-widest">Enterprise Client</div>
                   </div>
                </div>
              </div>
           </div>
           <div className="space-y-8">
              <h4 className="text-2xl font-black text-white tracking-tight">Siap untuk langkah selanjutnya?</h4>
              <p className="text-lg text-gray-400 font-medium leading-relaxed">
                Ribuan bisnis telah mempercayakan operasional mereka kepada Bisniesgo. Kami tidak hanya memberikan software, tapi juga mindset pertumbuhan yang terukur.
              </p>
              <div className="flex gap-4">
                 <div className="h-1 w-20 bg-brand-light rounded-full" />
                 <div className="h-1 w-8 bg-white/10 rounded-full" />
                 <div className="h-1 w-8 bg-white/10 rounded-full" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const WhyBisniesgo = () => {
  return (
    <section id="tentang" className="py-24 bg-bg-main text-white overflow-hidden relative border-y border-white/5">
      {/* Decorative lines/grids */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] h-full">
             {Array.from({ length: 20 }).map((_, i) => (
               <div key={i} className="border-r border-white/20" />
             ))}
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                Teknologi yang Bermakna. <br />
                <span className="text-brand-light">Sistem yang Memberdayakan.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Di Bisniesgo, kami percaya bahwa software harus membawa keberkahan melalui ketertiban, kejujuran data, dan manfaat nyata bagi pertumbuhan bisnis.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                 {[
                   { title: 'Kejelasan', desc: 'Melihat bisnis apa adanya untuk keputusan yang tepat.' },
                   { title: 'Disiplin', desc: 'Membangun kebiasaan operasional yang terstandarisasi.' },
                   { title: 'Etika', desc: 'Keamanan data dan kejujuran sistem adalah prioritas kami.' },
                   { title: 'Manfaat', desc: 'Fokus pada dampak nyata, bukan sekadar fitur.' }
                 ].map(val => (
                   <div key={val.title}>
                      <div className="text-2xl font-bold text-brand-light mb-2">{val.title}</div>
                      <div className="text-gray-500">{val.desc}</div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-light/20 to-white/5 rounded-[40px] p-[1px]">
                 <div className="bg-white/5 backdrop-blur-3xl w-full h-full rounded-[39px] p-12 flex flex-col justify-center gap-8 border border-white/10">
                    <div className="space-y-4">
                       <div className="text-5xl font-black text-brand-light">Meaningful Growth</div>
                       <p className="text-2xl font-medium text-gray-300 italic">
                         "Kami membangun sistem agar pemilik bisnis bisa fokus pada hal-hal yang benar-benar penting."
                       </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-full bg-brand-light/10 border border-brand-light/30" />
                       <div>
                          <div className="font-bold text-xl text-white">Founder Bisniesgo</div>
                          <div className="text-brand-light">Spiritual Business Focus</div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-brand-light p-8 rounded-3xl text-brand-dark font-black text-2xl hidden xl:block shadow-2xl shadow-brand-light/20"
              >
                 #BisnisBerkah
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

