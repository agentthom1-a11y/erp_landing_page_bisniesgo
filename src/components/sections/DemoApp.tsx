'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, ShoppingCart, Package, Users, BarChart3,
  ArrowRight, CheckCircle2, MousePointer2, Zap, Shield, Smartphone
} from 'lucide-react';

const DEMO_URL = 'https://sinarerp.bisnies.id';

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    title: 'Overview Real-Time',
    desc: 'Pantau seluruh bisnis dalam satu layar. Revenue, order, stok, dan karyawan — semuanya update otomatis.',
    screen: <DashboardScreen />,
  },
  {
    id: 'sales',
    label: 'Penjualan',
    icon: ShoppingCart,
    title: 'Modul Penjualan',
    desc: 'Buat invoice, kelola order, dan track piutang dengan mudah. Proses 10x lebih cepat dari manual.',
    screen: <SalesScreen />,
  },
  {
    id: 'inventory',
    label: 'Stok',
    icon: Package,
    title: 'Manajemen Inventori',
    desc: 'Stok selalu akurat. Alert otomatis saat barang hampir habis, transfer gudang dengan 1 klik.',
    screen: <InventoryScreen />,
  },
  {
    id: 'hr',
    label: 'HR & Payroll',
    icon: Users,
    title: 'HR & Penggajian',
    desc: 'Absensi, slip gaji, dan tunjangan dihitung otomatis. Hemat 20+ jam kerja admin setiap bulan.',
    screen: <HRScreen />,
  },
  {
    id: 'report',
    label: 'Laporan',
    icon: BarChart3,
    title: 'Laporan Bisnis',
    desc: 'Laporan keuangan, laba-rugi, dan neraca siap dalam hitungan detik. Ekspor ke Excel/PDF kapan saja.',
    screen: <ReportScreen />,
  },
];

const ease = [1, 'Mudah dipelajari, siap pakai dalam 1 hari', 'mudah'],
  fast = [2, 'Proses lebih cepat, kurangi human error', 'cepat'],
  safe = [3, 'Data aman, backup otomatis setiap hari', 'aman'];

const FEATURES = [
  { icon: MousePointer2, label: 'Mudah Digunakan', desc: 'UI intuitif, siap pakai dalam 1 hari tanpa pelatihan panjang' },
  { icon: Zap,          label: 'Super Cepat',     desc: 'Respons instan, tidak lag meskipun data ratusan ribu baris' },
  { icon: Shield,       label: 'Data Aman',        desc: 'Enkripsi SSL, backup otomatis harian, uptime 99.9%' },
  { icon: Smartphone,   label: 'Mobile Friendly',  desc: 'Akses dari HP, tablet, atau laptop — kapan saja, di mana saja' },
];

/* ── Screens ── */
function DashboardScreen() {
  return (
    <div className="p-4 h-full flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: 'Revenue', v: 'Rp 4.2B', g: '+12%' },
          { l: 'Orders',  v: '1,284',   g: '+8%'  },
          { l: 'Stok',    v: '842 SKU', g: 'OK'   },
          { l: 'Growth',  v: '24.8%',   g: '+4%'  },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-3 space-y-1">
            <div className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">{s.l}</div>
            <div className="text-sm font-black text-white">{s.v}</div>
            <div className="text-[9px] text-brand-light font-bold">{s.g}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white/3 border border-white/5 rounded-xl p-3">
        <div className="text-[9px] font-bold text-gray-500 uppercase mb-2">Revenue 30 Hari</div>
        <div className="flex items-end gap-1 h-20">
          {[30,50,40,80,60,90,55,75,85,45,70,95,65,88,72,60,80,50,90,75,85,40,95,70,60,88,55,78,92,68].map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.02, duration: 0.4 }}
              className={`flex-1 rounded-t-sm transition-colors ${h > 80 ? 'bg-brand-light' : 'bg-white/15'}`} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {['Penjualan Hari Ini: Rp 48.2M', 'Piutang Jatuh Tempo: 3 invoice'].map((t, i) => (
          <div key={i} className="bg-white/3 border border-white/5 rounded-lg px-3 py-2 text-[9px] text-gray-400">{t}</div>
        ))}
      </div>
    </div>
  );
}

function SalesScreen() {
  return (
    <div className="p-4 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="text-xs font-bold text-white">Daftar Order</div>
        <div className="bg-brand-light text-brand-dark text-[9px] font-black px-3 py-1 rounded-full">+ Buat Order</div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {[
          { no: 'SO-2024-001', cust: 'PT Maju Bersama', total: 'Rp 12.5M', status: 'Lunas',   color: 'text-brand-light' },
          { no: 'SO-2024-002', cust: 'CV Sumber Rejeki', total: 'Rp 8.2M',  status: 'Proses', color: 'text-yellow-400' },
          { no: 'SO-2024-003', cust: 'UD Karya Mandiri', total: 'Rp 5.8M',  status: 'Baru',   color: 'text-blue-400'   },
          { no: 'SO-2024-004', cust: 'PT Nusantara Jaya', total: 'Rp 22M',  status: 'Lunas',  color: 'text-brand-light'},
        ].map((r, i) => (
          <div key={i} className="flex justify-between items-center bg-white/3 border border-white/5 rounded-xl px-3 py-2.5">
            <div>
              <div className="text-[10px] font-bold text-white">{r.no}</div>
              <div className="text-[9px] text-gray-500">{r.cust}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-white">{r.total}</div>
              <div className={`text-[9px] font-bold ${r.color}`}>{r.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventoryScreen() {
  return (
    <div className="p-4 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="text-xs font-bold text-white">Stok Gudang</div>
        <div className="text-[9px] text-gray-500">842 SKU aktif</div>
      </div>
      <div className="flex gap-2">
        {[{ l: 'Total SKU', v: '842' }, { l: 'Stok Aman', v: '798' }, { l: 'Hampir Habis', v: '44' }].map((s, i) => (
          <div key={i} className="flex-1 bg-white/5 border border-white/8 rounded-xl p-2 text-center">
            <div className="text-sm font-black text-white">{s.v}</div>
            <div className="text-[8px] text-gray-500">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {[
          { name: 'Produk A - SKU001', stok: 240, max: 300, pct: 80 },
          { name: 'Produk B - SKU002', stok: 12,  max: 200, pct: 6  },
          { name: 'Produk C - SKU003', stok: 180, max: 200, pct: 90 },
          { name: 'Produk D - SKU004', stok: 5,   max: 150, pct: 3  },
        ].map((p, i) => (
          <div key={i} className="bg-white/3 border border-white/5 rounded-xl px-3 py-2">
            <div className="flex justify-between mb-1">
              <div className="text-[9px] text-white font-bold">{p.name}</div>
              <div className={`text-[9px] font-bold ${p.pct < 10 ? 'text-red-400' : 'text-brand-light'}`}>{p.stok} unit</div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${p.pct}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`h-1.5 rounded-full ${p.pct < 10 ? 'bg-red-400' : 'bg-brand-light'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HRScreen() {
  return (
    <div className="p-4 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="text-xs font-bold text-white">Penggajian Mei 2025</div>
        <div className="bg-brand-light text-brand-dark text-[9px] font-black px-3 py-1 rounded-full">Proses Gaji</div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ l: 'Karyawan', v: '48' }, { l: 'Total Gaji', v: 'Rp 380M' }, { l: 'Sudah Bayar', v: '42' }].map((s, i) => (
          <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-2 text-center">
            <div className="text-sm font-black text-white">{s.v}</div>
            <div className="text-[8px] text-gray-500">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {[
          { name: 'Budi Santoso',    pos: 'Manager',    gaji: 'Rp 12.5M', stat: 'Lunas' },
          { name: 'Siti Rahayu',     pos: 'Staff Admin', gaji: 'Rp 6.2M',  stat: 'Lunas' },
          { name: 'Agus Purnomo',    pos: 'Supervisor',  gaji: 'Rp 9.8M',  stat: 'Pending'},
          { name: 'Dewi Lestari',    pos: 'Staff IT',    gaji: 'Rp 8.5M',  stat: 'Lunas' },
        ].map((e, i) => (
          <div key={i} className="flex justify-between items-center bg-white/3 border border-white/5 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-light/20 flex items-center justify-center text-[8px] font-black text-brand-light">{e.name[0]}</div>
              <div>
                <div className="text-[9px] font-bold text-white">{e.name}</div>
                <div className="text-[8px] text-gray-500">{e.pos}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-bold text-white">{e.gaji}</div>
              <div className={`text-[8px] font-bold ${e.stat === 'Lunas' ? 'text-brand-light' : 'text-yellow-400'}`}>{e.stat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportScreen() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
  // Exponential growth for revenue: 1.8, 2.2, 3.1, 4.5, 6.8, 10.2
  const revenue = [1.8, 2.2, 3.1, 4.5, 6.8, 10.2];
  // Steady/linear growth for expenses
  const expense = [1.4, 1.6, 1.9, 2.2, 2.5, 2.8];
  
  const maxVal = Math.max(...revenue);

  return (
    <div className="p-4 h-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="text-xs font-bold text-white flex items-center gap-2">
          Laporan Laba-Rugi 
          <span className="text-[10px] bg-brand-light/20 text-brand-light px-2 py-0.5 rounded-full font-black uppercase tracking-tighter animate-pulse">Compound Growth</span>
        </div>
        <div className="text-[9px] text-gray-500 bg-white/5 px-2 py-1 rounded-lg">Semester 1 2025</div>
      </div>
      
      <div className="flex-1 bg-white/3 border border-white/5 rounded-xl p-3 relative overflow-hidden group">
        {/* Compounding Curve Overlay */}
        <svg className="absolute inset-0 w-full h-[70%] top-[15%] pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 5 95 Q 40 90, 70 50 T 95 5"
            fill="none"
            stroke="rgba(152, 214, 0, 0.4)"
            strokeWidth="2"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        <div className="flex items-end justify-between gap-2 h-28 relative z-0">
          {months.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: '90%' }}>
                <motion.div 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${(revenue[i] / maxVal) * 100}%` }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
                  className="w-full bg-brand-light rounded-t-sm shadow-[0_0_15px_rgba(152,214,0,0.2)]" 
                />
                <motion.div 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${(expense[i] / maxVal) * 100}%` }}
                  transition={{ delay: i * 0.1 + 0.05, duration: 0.8 }}
                  className="w-full bg-white/10 rounded-t-sm" 
                />
              </div>
              <div className="text-[8px] text-gray-600 font-bold">{m}</div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-brand-light" />
            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Revenue (M)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">Biaya (M)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-brand-light/5 border border-brand-light/20 rounded-xl p-3">
          <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Total Revenue</div>
          <div className="text-sm font-black text-white">Rp 28.5B</div>
          <div className="text-[9px] text-brand-light font-black flex items-center gap-1">
            <span className="animate-bounce">↑</span> 460% Compounded
          </div>
        </div>
        <div className="bg-white/5 border border-white/8 rounded-xl p-3">
          <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Net Profit</div>
          <div className="text-sm font-black text-white">Rp 16.2B</div>
          <div className="text-[9px] text-brand-light font-bold">Margin 56.8%</div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export const DemoApp = () => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="demo" className="py-24 lg:py-32 bg-bg-main overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-light/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-light/10 border border-brand-light/20 text-brand-light text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-brand-light rounded-full animate-pulse" />
            Demo Langsung
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            ERP yang Benar-Benar<br />
            <span className="text-brand-light">Mudah Digunakan</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tampilan bersih, navigasi intuitif — siap pakai dalam 1 hari tanpa pelatihan panjang.
          </motion.p>
        </div>

        {/* Main Demo Block */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Left: Tab nav + description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              {tabs.map((t, i) => (
                <motion.button key={t.id} onClick={() => setActive(i)} whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 text-left ${
                    active === i
                      ? 'bg-brand-light/10 border-brand-light/30 text-white'
                      : 'bg-white/3 border-white/8 text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    active === i ? 'bg-brand-light text-brand-dark' : 'bg-white/5'
                  }`}>
                    <t.icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm">{t.label}</span>
                  {active === i && (
                    <motion.div layoutId="tab-indicator" className="ml-auto w-1.5 h-1.5 bg-brand-light rounded-full" />
                  )}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                className="bg-white/3 border border-white/8 rounded-2xl p-5">
                <div className="text-base font-black text-white mb-2">{tab.title}</div>
                <div className="text-sm text-gray-400 leading-relaxed mb-4">{tab.desc}</div>
                <div className="flex items-center gap-2 text-xs text-brand-light font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Tersedia di aplikasi demo
                </div>
              </motion.div>
            </AnimatePresence>

            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-brand-light text-brand-dark font-black rounded-2xl hover:brightness-110 active:scale-95 transition-all text-sm">
              Coba Demo Sekarang
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-gray-600">Gratis • Tidak perlu kartu kredit • Langsung bisa dipakai</p>
          </div>

          {/* Right: App Screen */}
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative rounded-[28px] border border-white/10 bg-[#141720] overflow-hidden shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 mx-3 bg-white/5 rounded-lg px-3 py-1 text-[10px] text-gray-500 font-mono flex items-center gap-2">
                  <span className="text-brand-light">🔒</span> sinarerp.bisnies.id
                </div>
              </div>

              {/* Sidebar + Content */}
              <div className="flex" style={{ minHeight: 340 }}>
                {/* Sidebar */}
                <div className="w-14 bg-white/2 border-r border-white/5 flex flex-col items-center py-4 gap-3">
                  {tabs.map((t, i) => (
                    <button key={t.id} onClick={() => setActive(i)}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                        active === i ? 'bg-brand-light text-brand-dark' : 'bg-white/5 text-gray-600 hover:text-gray-400'
                      }`}>
                      <t.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>

                {/* Screen */}
                <div className="flex-1 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}
                      className="absolute inset-0">
                      {tab.screen}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-brand-light/20 transition-colors group">
              <div className="w-10 h-10 bg-brand-light/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-light/20 transition-colors">
                <f.icon className="w-5 h-5 text-brand-light" />
              </div>
              <div className="text-sm font-black text-white mb-1">{f.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-12 rounded-[2rem] bg-brand-light p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-brand-dark font-black text-2xl lg:text-3xl mb-2">
              Siap lihat SINAR ERP beraksi? 🚀
            </div>
            <div className="text-brand-dark/70 font-medium">
              Buka demo langsung — tidak perlu daftar, tidak perlu install apapun.
            </div>
          </div>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-brand-dark text-white font-black px-8 py-4 rounded-2xl hover:bg-brand-dark/80 transition-colors whitespace-nowrap">
            Buka Aplikasi Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
