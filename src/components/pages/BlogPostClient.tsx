'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import Link from 'next/link';
import { useDemo } from '@/src/lib/contexts/DemoContext';

type Post = {
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  contentBlocks: any[];
  proofPoints?: any[];
  primaryCta: {
    label: string;
    text: string;
  };
};

export function BlogPostClient({ post }: { post: Post }) {
  const { openDemoModal } = useDemo();

  return (
    <div className="pt-32 pb-24 bg-bg-main min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-light font-bold uppercase tracking-widest text-xs mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Category & Badge */}
        <div className="flex items-center gap-4 mb-8">
          <div className="px-4 py-1.5 bg-brand-light/10 border-l-4 border-brand-light text-brand-light text-xs font-black uppercase tracking-[0.2em] rounded-r-lg">
            {post.category}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-10 tracking-tighter">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mb-16 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 rounded-full bg-brand-light/10 border border-brand-light/20 flex items-center justify-center font-black text-brand-light">
                {post.author[0]}
             </div>
             <div>
                <p className="text-white font-bold text-sm">{post.author}</p>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">{post.date}</p>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 mb-20 shadow-2xl shadow-brand-light/5"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <article className="max-w-none mb-24">
          <div className="space-y-16">
            {post.contentBlocks.map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group/block"
              >
                {block.heading && (
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-8 tracking-tight leading-tight group-hover/block:text-brand-light transition-colors">
                    {block.heading}
                  </h2>
                )}
                
                {block.type === 'paragraph' && block.content?.map((p: string, pi: number) => (
                  <p key={pi} className="text-xl text-gray-300 leading-relaxed font-medium mb-6 last:mb-0">
                    {p}
                  </p>
                ))}

                {block.type === 'bullet' && (
                  <ul className="space-y-4">
                    {block.items?.map((item: string, ii: number) => (
                      <li key={ii} className="flex items-start gap-4 text-xl text-gray-300 font-medium">
                        <div className="w-2 h-2 rounded-full bg-brand-light mt-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Research Proof Section */}
          {post.proofPoints && post.proofPoints.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-20 p-8 lg:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clock className="w-32 h-32 text-brand-light" />
              </div>
              
              <h3 className="text-sm font-black text-brand-light uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-light/30" />
                Research Insights
              </h3>

              {post.proofPoints.map((proof, i) => (
                <div key={i} className="space-y-8">
                  <p className="text-2xl font-bold text-white leading-snug">
                    "{proof.claim}"
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {proof.evidence.map((ev: any, ei: number) => (
                      <div key={ei} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-light/20 transition-all">
                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">{ev.publication} ({ev.year})</p>
                        <p className="text-sm text-white font-bold mb-2">{ev.source_title}</p>
                        <p className="text-xs text-gray-400 mb-4">by {ev.authors}</p>
                        <div className="pt-4 border-t border-white/5">
                           <p className="text-sm text-brand-light/90 italic">"{ev.takeaway}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Inline CTA Highlight */}
          <div className="my-16 relative">
            <div className="absolute -inset-4 bg-brand-light/20 rounded-[3rem] blur-3xl opacity-20" />
            <div className="relative glass p-10 lg:p-14 rounded-[3rem] border-brand-light/10 text-center overflow-hidden">
               {/* Decorative background text */}
               <div className="absolute -bottom-4 -right-4 text-9xl font-black text-brand-light/5 pointer-events-none select-none uppercase italic">
                  Growth
               </div>
               
               <h3 className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight max-w-2xl mx-auto">
                 {post.primaryCta.label}
               </h3>
               <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto font-medium">
                  {post.primaryCta.text}
               </p>
               <Button size="lg" onClick={openDemoModal} className="h-16 px-12 text-lg rounded-2xl group relative z-10">
                  Konsultasi Sekarang
                  <ArrowUpRight className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
