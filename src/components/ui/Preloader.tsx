import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const target = 1254800000; // Rp 1.25B

  useEffect(() => {
    let start = performance.now();
    const duration = 2500; // 2.5 seconds for dramatic effect

    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth scale up
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const currentCount = Math.floor(easeOutExpo(progress) * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 1000); // Hold the final state for a second
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-bg-main flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Graphic Chart Effect */}
      <div className="absolute inset-0 z-0 opacity-10 hidden sm:block">
         <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <motion.path
              d="M 0 1000 Q 250 950, 500 500 T 1000 0"
              fill="none"
              stroke="#98D600"
              strokeWidth="10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
            <motion.path
              d="M 0 1000 Q 250 950, 500 500 T 1000 0 L 1000 1000 L 0 1000 Z"
              fill="url(#preloaderGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
               <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#98D600', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#98D600', stopOpacity: 0 }} />
               </linearGradient>
            </defs>
         </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="w-40 h-40 rounded-[3rem] bg-brand-light/10 flex items-center justify-center mb-8 mx-auto border border-brand-light/20 shadow-[0_0_60px_rgba(152,214,0,0.15)] relative">
            <img 
              src="/logo/sinar-erp-icon-mark-transparent.png" 
              alt="SINAR Mark" 
              className="w-24 h-24 object-contain"
            />
            <motion.div 
               animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 rounded-[3rem] border-2 border-brand-light/30"
            />
          </div>
          <h2 className="text-brand-light font-black uppercase tracking-[0.4em] text-xs mb-2">Accelerating Business</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-light/50 to-transparent mx-auto" />
        </motion.div>

        <motion.div 
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 selection:bg-brand-light/20 px-4 break-all sm:break-normal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {formatRupiah(count)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
           <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/10" />
              <span className="text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold">Scaling Your Potential</span>
              <div className="h-[1px] w-12 bg-white/10" />
           </div>
           
           {/* Progress bar line */}
           <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="w-full h-full bg-brand-light"
              />
           </div>
        </motion.div>
      </div>

      {/* Atmospheric glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1], 
             opacity: [0.3, 0.5, 0.3],
             x: [0, 50, 0],
             y: [0, -50, 0]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[150px]"
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2], 
             opacity: [0.2, 0.4, 0.2],
             x: [0, -70, 0],
             y: [0, 60, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-brand-light/5 rounded-full blur-[180px]"
         />
      </div>
    </motion.div>
  );
};
