import { motion } from 'motion/react';
import { PencilRuler, Code2, Link, Cpu, GraduationCap, Headset, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

const services = [
  {
    title: 'Implementation',
    description: 'Pendampingan penuh dalam proses setup hingga sistem go-live.',
    icon: PencilRuler,
  },
  {
    title: 'Custom Development',
    description: 'Penyesuaian fitur spesifik untuk kebutuhan unik industri Anda.',
    icon: Code2,
  },
  {
    title: 'Integration',
    description: 'Hubungkan SINAR ERP dengan sistem pihak ketiga yang Anda gunakan.',
    icon: Link,
  },
  {
    title: 'AI Automation',
    description: 'Implementasi kecerdasan buatan untuk optimasi operasional.',
    icon: Cpu,
  },
  {
    title: 'Zero-Learning Curve',
    description: 'Sistem yang dirancang mengikuti alur kerja alami tim bisnis di Indonesia. Sangat intuitif hingga nyaris tidak membutuhkan pelatihan khusus.',
    icon: GraduationCap,
  },
  {
    title: 'Support',
    description: 'Layanan bantuan teknis responsif pasca implementasi.',
    icon: Headset,
  },
];

const steps = [
  {
    number: '01',
    title: 'Pahami & Rancang',
    desc: 'Kami menganalisis proses bisnis Anda dan merancang solusi ERP yang paling tepat.',
  },
  {
    number: '02',
    title: 'Implementasi Terarah',
    desc: 'Proses migrasi data dan setup sistem dilakukan dengan standar operasional yang ketat.',
  },
  {
    number: '03',
    title: 'Optimasi & Bertumbuh',
    desc: 'Sistem siap digunakan dan kami terus mendampingi Anda untuk optimasi berkelanjutan.',
  },
];

export const ServicesAndSteps = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <div id="layanan">
      {/* Services Section */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Dari Strategi hingga Sukses Operasional.
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Kami bukan sekadar vendor software, melainkan mitra transformasi yang mendampingi setiap langkah digitalisasi bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[32px] hover:border-brand-light/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-light/10 flex items-center justify-center mb-8">
                  <service.icon className="w-7 h-7 text-brand-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Steps Section */}
      <section className="py-24 bg-bg-main relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Langkah Cerdas <br className="hidden sm:block" /> Menuju Bisnis <br className="hidden sm:block" /> yang <span className="text-brand-light">Scalable.</span>
              </h2>
              <div className="glass p-10 rounded-[40px] text-white border-brand-light/20 relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ArrowRight className="w-24 h-24 rotate-[-45deg]" />
                 </div>
                 <p className="text-xl mb-8 leading-relaxed relative z-10">
                   "Siap memulai transformasi bisnis Anda hari ini? Mari jadwalkan sesi konsultasi gratis bersama tim ahli kami."
                 </p>
                 <Button className="w-full sm:w-auto relative z-10" size="lg" onClick={onBookDemo}>
                    Konsultasi Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full space-y-12 relative">
               {/* Vertical line connector */}
               <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-white/5 -z-10 hidden sm:block" />

               {steps.map((step) => (
                 <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                 >
                    <div className="w-20 h-20 rounded-full glass border-white/10 flex items-center justify-center text-2xl font-black text-white shrink-0 group-hover:border-brand-light group-hover:text-brand-light transition-colors shadow-2xl shadow-black/40">
                       {step.number}
                    </div>
                    <div className="pt-4">
                       <h3 className="text-3xl font-black text-white mb-3 group-hover:text-brand-light transition-colors">{step.title}</h3>
                       <p className="text-xl text-gray-400 leading-relaxed">
                         {step.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
