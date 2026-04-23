'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';

export const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Produk', href: '/#produk' },
    { name: 'Layanan', href: '/#layanan' },
    { name: 'Solusi', href: '/#solusi' },
    { name: 'Tentang Kami', href: '/#tentang' },
    { name: 'Blog', href: '/#blog' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      // If we're already on the home page, scroll smoothly
      if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-bg-main/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
           <img 
             src="/logo/sinar-erp-logo-primary-transparent.png" 
             alt="SINAR ERP" 
             className="h-14 w-auto object-contain"
           />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 font-medium hover:text-brand-light transition-colors"
              onClick={(e) => handleLinkClick(e as any, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={onBookDemo}>Jadwalkan Demo</Button>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-medium"
                  onClick={(e) => handleLinkClick(e as any, link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="w-full mt-4" 
                onClick={() => {
                  onBookDemo();
                  setIsMobileMenuOpen(false);
                }}
              >
                Jadwalkan Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

