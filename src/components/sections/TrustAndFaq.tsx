'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Plus, Minus, ArrowUpRight, Factory, Truck, ShoppingBag, Package as PackageIcon, Stethoscope, Hotel, Building2, UtensilsCrossed, MessageCircle, Mail } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu SINAR ERP?',
    answer: 'SINAR ERP adalah sistem perencanaan sumber daya perusahaan (Enterprise Resource Planning) yang dirancang khusus untuk bisnis di Indonesia, mengintegrasikan seluruh fungsi operasional mulai dari keuangan, stok, sales, hingga HR dalam satu platform.',
  },
  {
    question: 'Siapa yang cocok menggunakan SINAR ERP?',
    answer: 'SINAR ERP cocok untuk pemilik bisnis menengah (SME founder), manajer operasional, hingga perusahaan skala besar di berbagai industri seperti manufaktur, distribusi, retail, dan jasa yang ingin meningkatkan disiplin operasional.',
  },
  {
    question: 'Apakah SINAR ERP bisa dikustomisasi?',
    answer: 'Ya, kami menyediakan layanan Custom Development untuk menyesuaikan fitur-fitur SINAR ERP agar sesuai dengan alur kerja spesifik dan kebutuhan unik bisnis Anda.',
  },
  {
    question: 'Berapa lama proses implementasi SINAR ERP?',
    answer: 'Waktu implementasi bervariasi tergantung kerumitan bisnis, namun biasanya berkisar antara 4 hingga 12 minggu, mulai dari fase audit hingga go-live.',
  },
  {
    question: 'Apakah tersedia training dan support pendampingan?',
    answer: 'Ya, Bisniesgo memberikan sesi training komprehensif untuk seluruh tim dan layanan technical support yang siap membantu jika terjadi kendala pasca implementasi.',
  },
  {
    question: 'Bagaimana keamanan data di SINAR ERP?',
    answer: 'Kami menggunakan enkripsi tingkat enterprise dan server yang aman (Google Cloud Platform) untuk memastikan data bisnis Anda terlindungi dan dapat diakses kapan saja.',
  },
  {
    question: 'Apakah bisa diintegrasikan dengan marketplace?',
    answer: 'Ya, SINAR ERP memiliki modul integrasi untuk berbagai marketplace populer di Indonesia guna memudahkan sinkronisasi stok dan pesanan.',
  },
];

const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Distribution', icon: Truck },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Logistics', icon: PackageIcon },
  { name: 'Health Tech', icon: Stethoscope },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Services', icon: Building2 },
  { name: 'F&B', icon: UtensilsCrossed },
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-bg-main border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-12">
          Mempowerment Transformasi Digital Lintas Industri
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-10">
           {industries.map((industry, i) => (
             <motion.div 
               key={industry.name} 
               className="flex flex-col items-center gap-4 group/item"
               animate={{ y: [0, -4, 0] }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 delay: i * 0.2 
               }}
             >
               <div className="relative">
                  <div className="w-14 h-14 rounded-2xl border border-white/5 flex items-center justify-center group-hover/item:border-brand-light/30 transition-all duration-500 bg-white/[0.02] group-hover/item:bg-brand-light/[0.05] group-hover/item:-translate-y-1">
                     <industry.icon className="w-6 h-6 text-white/40 group-hover/item:text-brand-light transition-colors" />
                  </div>
                  {/* Subtle accent line */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-brand-light/0 group-hover/item:bg-brand-light/50 transition-all duration-500" />
               </div>
               <span className="text-[10px] font-bold text-white tracking-[0.3em] uppercase whitespace-nowrap opacity-30 group-hover/item:opacity-100 transition-all duration-500">
                  {industry.name}
               </span>
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Decorative side fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-main to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-main to-transparent pointer-events-none" />
    </section>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bg-main">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white mb-12 text-center">Pertanyaan Populer</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button
                className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold text-white">{faq.question}</span>
                {openIndex === index ? <Minus className="shrink-0 text-brand-light" /> : <Plus className="shrink-0 text-gray-500" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed text-lg border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Trust/Contact CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-[32px] border border-white/5 bg-white/[0.02] relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle glowing accents */}
          <div className="absolute -right-24 -bottom-24 w-60 h-60 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-60 h-60 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/10 border border-brand-light/20 text-brand-light text-xs font-bold uppercase tracking-wider mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-light"></span>
                </span>
                Tim Konsultan Aktif
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                Masih Ragu & Butuh Bantuan?
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                Kami paham bahwa memilih sistem ERP adalah keputusan besar. Silakan berdiskusi gratis dengan tim kami via WhatsApp atau Email secara santai & transparan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a
                href="https://wa.me/62895367265775?text=Halo%20SINAR%20ERP%2C%20saya%20ingin%20tanya-tanya%20dan%20konsultasi%20mengenai%20sistem%20ERP."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/10"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
              <a
                href="mailto:hello@bisnies.id"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-all hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5 text-brand-light" />
                Kirim Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export const BlogPreview = ({ posts = [] }: { posts?: any[] }) => {
  return (
    <section id="blog" className="py-24 bg-bg-main border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Insight & Artikel Bisnis</h2>
              <p className="text-xl text-gray-400">Pelajari strategi terbaru untuk mengembangkan bisnis Anda.</p>
           </div>
           <Link href="/blog" className="font-bold text-white flex items-center gap-2 hover:text-brand-light transition-colors group">
              Lihat Semua Artikel <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.slice(0, 6).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/10] bg-white/5 rounded-3xl overflow-hidden mb-6 relative border border-white/5 group-hover:border-brand-light/30 transition-all duration-500">
                   <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   {/* Date Tag */}
                   <div className="absolute top-4 right-4 px-3 py-1 bg-brand-dark/80 backdrop-blur-md rounded-full text-[10px] font-black text-white border border-white/10 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {post.date}
                   </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-brand-light uppercase tracking-[0.2em]">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-brand-light transition-colors leading-tight tracking-tight">
                   {post.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

