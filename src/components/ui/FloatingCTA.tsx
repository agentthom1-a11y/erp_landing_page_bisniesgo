'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Mail, X, ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show the CTA after a short delay (psychological comfort - let them read the hero first)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed || !isVisible) return null;

  const waUrl = 'https://wa.me/62895367265775?text=Halo%20SINAR%20ERP%2C%20saya%20ingin%20tanya%20mengenai%20sistem%20dan%20implementasi%20ERP.';
  const emailUrl = 'mailto:hello@bisnies.id';

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="w-80 bg-brand-dark/95 border border-white/10 rounded-3xl p-5 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Glow background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-brand-light/10 border border-brand-light/20 rounded-full flex items-center justify-center text-brand-light font-bold">
                    SE
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-brand-light rounded-full border-2 border-brand-dark animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Tanya SINAR ERP</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-light rounded-full" />
                    <span className="text-[10px] text-brand-light font-semibold uppercase tracking-wider">Online & Aktif</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="Tutup panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Body */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-3.5 mb-4">
              <p className="text-xs text-gray-300 leading-relaxed">
                Ada pertanyaan tentang sistem ERP atau ingin konsultasi kebutuhan operasional bisnis Anda? Tim kami siap membantu secara santai & solutif.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-brand-light text-brand-dark hover:bg-brand-light/95 font-bold text-xs py-3 px-4 rounded-xl shadow-lg shadow-brand-light/10 transition-all hover:translate-x-0.5"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat via WhatsApp
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={emailUrl}
                className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs py-3 px-4 rounded-xl border border-white/10 transition-all hover:translate-x-0.5"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-light" />
                  Kirim Email
                </span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
            
            <div className="mt-3 text-center">
              <button 
                onClick={() => {
                  setIsDismissed(true);
                  setIsExpanded(false);
                }}
                className="text-[10px] text-gray-500 hover:text-gray-400 transition-colors underline cursor-pointer"
              >
                Sembunyikan bantuan ini
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-3 bg-brand-dark/90 hover:bg-brand-dark/95 border border-brand-light/30 text-white pl-4 pr-3.5 py-2.5 rounded-full shadow-xl hover:shadow-brand-light/5 cursor-pointer backdrop-blur-xl group select-none transition-shadow"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-light rounded-full" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-light rounded-full animate-ping" />
              <MessageSquare className="w-5 h-5 text-brand-light group-hover:rotate-3 transition-transform" />
            </div>
            <span className="text-xs font-bold tracking-wide">Butuh Bantuan?</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
