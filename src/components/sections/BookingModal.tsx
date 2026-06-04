'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Send, CheckCircle2, User, Building2, Mail, Phone,
  Calendar, Clock, Layers, MessageSquare, Loader2, AlertCircle
} from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ERP_MODULES = [
  'Akuntansi & Keuangan',
  'Inventory & Gudang',
  'Pembelian (Purchase)',
  'Penjualan (Sales)',
  'HR & Payroll',
  'Produksi & Manufaktur',
  'CRM & Pelanggan',
  'Laporan & Dashboard',
];

interface FormState {
  nama: string;
  perusahaan: string;
  email: string;
  whatsapp: string;
  tanggal: string;
  waktu: string;
  modul: string[];
  pesan: string;
}

const INITIAL_FORM: FormState = {
  nama: '',
  perusahaan: '',
  email: '',
  whatsapp: '',
  tanggal: '',
  waktu: '',
  modul: [],
  pesan: '',
};

const InputField = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-light">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-light/60 focus:bg-white/8 transition-all duration-200';

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleModul = (modul: string) => {
    setForm((prev) => ({
      ...prev,
      modul: prev.modul.includes(modul)
        ? prev.modul.filter((m) => m !== modul)
        : [...prev.modul, modul],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Terjadi kesalahan.');
      }

      setStatus('success');
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal mengirim. Coba lagi.');
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setForm(INITIAL_FORM);
      setStatus('idle');
      setErrorMsg('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#141720] rounded-[32px] shadow-2xl border border-white/10 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {/* Glow decorations */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-light/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-light/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="relative z-10 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {/* ─── SUCCESS STATE ─── */}
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-brand-dark" strokeWidth={2.5} />
                    </motion.div>
                    <h2 className="text-3xl font-black text-white mb-3">Terima Kasih! 🎉</h2>
                    <p className="text-gray-300 text-lg mb-2">
                      Permintaan demo Anda telah dikirim ke tim kami.
                    </p>
                    <p className="text-gray-500 text-sm mb-8">
                      Cek inbox <span className="text-brand-light font-semibold">{form.email}</span> untuk konfirmasi.
                      <br />Tim kami akan menghubungi Anda dalam <strong className="text-white">1×24 jam kerja.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button onClick={handleClose} className="px-10">
                        Selesai
                      </Button>
                      <a
                        href={`https://wa.me/62895367265775?text=Halo%2C%20saya%20${encodeURIComponent(form.nama)}%20dari%20${encodeURIComponent(form.perusahaan)}%20ingin%20jadwalkan%20demo%20SINAR%20ERP.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all text-sm font-semibold"
                      >
                        💬 Chat WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* ─── FORM STATE ─── */
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {/* Header */}
                    <div className="mb-8">
                      <span className="inline-flex items-center gap-1.5 bg-brand-light/10 text-brand-light text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                        <span className="w-1.5 h-1.5 bg-brand-light rounded-full animate-pulse" />
                        Demo Gratis
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                        Jadwalkan Demo
                        <br />
                        <span className="text-brand-light">SINAR ERP</span>
                      </h2>
                      <p className="text-gray-400 mt-2 text-sm">
                        Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami — gratis & tanpa komitmen.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1: Name + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField icon={User} label="Nama Lengkap">
                          <input
                            required
                            name="nama"
                            type="text"
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="Nama Anda"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField icon={Building2} label="Nama Perusahaan">
                          <input
                            required
                            name="perusahaan"
                            type="text"
                            value={form.perusahaan}
                            onChange={handleChange}
                            placeholder="PT / CV / UD Anda"
                            className={inputClass}
                          />
                        </InputField>
                      </div>

                      {/* Row 2: Email + WhatsApp */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField icon={Mail} label="Email Bisnis">
                          <input
                            required
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="email@perusahaan.com"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField icon={Phone} label="No. WhatsApp">
                          <input
                            required
                            name="whatsapp"
                            type="tel"
                            value={form.whatsapp}
                            onChange={handleChange}
                            placeholder="08xx-xxxx-xxxx"
                            className={inputClass}
                          />
                        </InputField>
                      </div>

                      {/* Row 3: Date + Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField icon={Calendar} label="Tanggal Demo">
                          <input
                            name="tanggal"
                            type="date"
                            value={form.tanggal}
                            onChange={handleChange}
                            min={today}
                            className={`${inputClass} [color-scheme:dark]`}
                          />
                        </InputField>
                        <InputField icon={Clock} label="Waktu Demo">
                          <input
                            name="waktu"
                            type="time"
                            value={form.waktu}
                            onChange={handleChange}
                            className={`${inputClass} [color-scheme:dark]`}
                          />
                        </InputField>
                      </div>

                      {/* Module Selection */}
                      <InputField icon={Layers} label="Modul ERP yang Diminati">
                        <div className="flex flex-wrap gap-2 pt-1">
                          {ERP_MODULES.map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => toggleModul(m)}
                              className={`text-xs px-3.5 py-2 rounded-full border font-medium transition-all duration-200 ${
                                form.modul.includes(m)
                                  ? 'bg-brand-light text-brand-dark border-brand-light font-bold shadow-[0_0_16px_rgba(152,214,0,0.3)]'
                                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-brand-light/40 hover:text-white'
                              }`}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </InputField>

                      {/* Notes */}
                      <InputField icon={MessageSquare} label="Catatan / Pertanyaan (Opsional)">
                        <textarea
                          name="pesan"
                          value={form.pesan}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Ceritakan tantangan bisnis Anda atau pertanyaan spesifik..."
                          className={`${inputClass} resize-none`}
                        />
                      </InputField>

                      {/* Error message */}
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-3.5 text-sm text-red-300"
                        >
                          <AlertCircle className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                          <span>{errorMsg}</span>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        className="w-full h-14 text-base font-bold"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center gap-2.5">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Mengirim Permintaan...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2.5">
                            Kirim Permintaan Demo
                            <Send className="w-4.5 h-4.5" />
                          </span>
                        )}
                      </Button>

                      <p className="text-center text-xs text-gray-600">
                        Dengan mengirim, Anda setuju dihubungi tim SINAR ERP.{' '}
                        <span className="text-gray-500">Tidak ada spam. Dijamin.</span>
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
