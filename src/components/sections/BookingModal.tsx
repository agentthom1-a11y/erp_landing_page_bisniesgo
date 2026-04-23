import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-main/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#064E3B] rounded-[40px] p-8 lg:p-12 shadow-2x-strong overflow-hidden border border-brand-light/20"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-[80px] pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <div className="relative z-10 text-white">
                <h2 className="text-3xl font-black mb-2">Jadwalkan Demo Gratis</h2>
                <p className="text-gray-300 mb-8">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-brand-light">Nama Lengkap</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Masukkan nama Anda"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-light transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-brand-light">Nama Perusahaan</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Masukkan nama perusahaan"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-light transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-brand-light">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="email@bisnis.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-light transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-brand-light">No. WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="0812..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-light transition-colors"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-lg" 
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Reservasi Sekarang
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="relative z-10 text-center py-12">
                <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-dark" />
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Terima Kasih!</h2>
                <p className="text-xl text-gray-300 mb-8">Permintaan demo Anda telah kami terima. Tim kami akan menghubungi Anda dalam waktu 1x24 jam.</p>
                <Button onClick={onClose} variant="secondary" className="px-8">
                  Tutup
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
