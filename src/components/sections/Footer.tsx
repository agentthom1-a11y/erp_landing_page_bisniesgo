'use client';
import { Button } from '@/src/components/ui/Button';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export const FinalCTA = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <section className="py-24 bg-bg-main px-6">
      <div className="max-w-7xl mx-auto rounded-[60px] glass p-12 lg:p-24 text-center relative overflow-hidden border-brand-light/20">
        {/* Background image and glow */}
        <div className="absolute inset-0 z-0">
          <img src="/images/blog_growth.png" alt="Business Growth" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Bangun operasional bisnis yang lebih tertata bersama <span className="text-brand-light">SINAR ERP.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Mulai langkah transformasi sistem bisnis Anda hari ini dan rasakan kemudahan dalam mengelola setiap lini operasional secara terintegrasi.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto" onClick={onBookDemo}>Jadwalkan Demo</Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={() => {
              window.location.href = "mailto:hello@bisnies.id";
            }}>
              Hubungi Tim Kami
            </Button>
          </div>

          {/* Trust/Comfort Info */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
              Konsultasi Bebas Tekanan & Komitmen
            </span>
            <span className="hidden sm:inline text-white/10">|</span>
            <a 
              href="https://wa.me/62895367265775?text=Halo%20SINAR%20ERP%2C%20saya%20ingin%20tanya-tanya%20mengenai%20sistem%20dan%20implementasi." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp: +62 895-3672-65775
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <a 
              href="mailto:hello@bisnies.id" 
              className="text-gray-400 hover:text-brand-light transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-brand-light" />
              Email: hello@bisnies.id
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-bg-main pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="mb-6">
               <img 
                 src="/logo/sinar-erp-logo-primary-transparent.png" 
                 alt="SINAR ERP" 
                 className="h-16 w-auto object-contain"
               />
            </div>
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Membantu bisnis di Indonesia tumbuh, tertata, dan scalable melalui sistem teknologi yang bermakna dan terintegrasi.
            </p>
            <div className="flex gap-4">
               {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-white hover:bg-brand-light hover:text-brand-dark transition-all">
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-white mb-6">Produk</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-light transition-colors">SINAR ERP</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">SINAR POS</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">SINAR Inventory</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">SINAR Finance</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors">Semua Produk</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-white mb-6">Kontak</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-brand-light shrink-0" />
                 <span className="text-gray-400">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-brand-light shrink-0" />
                 <a href="mailto:hello@bisnies.id" className="text-gray-400 hover:text-brand-light transition-colors">hello@bisnies.id</a>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-brand-light shrink-0" />
                 <a href="https://wa.me/62895367265775" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-light transition-colors">+62 895-3672-65775</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-gray-500 font-medium">
              © 2026 Bisniesgo. Seluruh Hak Cipta Dilindungi.
           </div>
           <div className="flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};;

