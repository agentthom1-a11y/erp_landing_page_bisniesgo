import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Calendar, User, Clock, ChevronRight, Plus, Minus, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export const BlogPostPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4 text-brand-light">404</h1>
          <p className="text-xl text-gray-400 mb-8">Artikel tidak ditemukan.</p>
          <Link to="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Parse content into paragraphs
  const paragraphs = post.content.trim().split('\n\n');

  return (
    <div className="pt-32 pb-24 bg-bg-main">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        {/* OpenGraph */}
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-widest mb-12"
        >
          <Link to="/" className="hover:text-brand-light transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-light">Blog</span>
        </motion.div>

        {/* Article Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-brand-light/10 border-l-4 border-brand-light text-brand-light rounded-r-xl mb-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em]">{post.category}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-light/50" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-light/50" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-light/50" />
              {post.readTime}
            </div>
          </motion.div>
        </header>

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
        <article className="prose prose-invert prose-lg max-w-none mb-24">
          <div className="space-y-8">
            {paragraphs.map((p, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed font-medium"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Inline Quote/CTA Highlight */}
          <div className="my-16 relative">
            <div className="absolute -inset-4 bg-brand-light/20 rounded-[3rem] blur-3xl opacity-20" />
            <div className="relative glass p-10 lg:p-14 rounded-[3rem] border-brand-light/10 text-center">
               <h3 className="text-3xl lg:text-4xl font-black text-white mb-8">
                 {post.ctaText}
               </h3>
               <Button size="lg" onClick={onBookDemo} className="h-16 px-12 text-lg rounded-2xl group">
                  {post.ctaButton}
                  <ArrowUpRight className="ml-2 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
            </div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-white mb-10 tracking-tight flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-light/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-brand-light" />
            </div>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {post.faq.map((item, index) => (
              <div key={index} className="glass rounded-3xl overflow-hidden border border-white/5">
                <button
                  className="w-full text-left p-8 flex justify-between items-center gap-4 transition-colors hover:bg-white/5"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="text-xl font-bold text-white">{item.question}</span>
                  {openFaqIndex === index ? <Minus className="shrink-0 text-brand-light" /> : <Plus className="shrink-0 text-gray-500" />}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-gray-400 leading-relaxed text-lg border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links & Navigation */}
        <footer className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Recommended Links</div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {post.internalLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.url}
                  className="px-4 py-2 bg-white/5 hover:bg-brand-light/10 text-white hover:text-brand-light border border-white/5 hover:border-brand-light/20 rounded-xl font-bold text-xs transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/">
            <Button variant="secondary" className="rounded-2xl flex items-center gap-2 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
};
