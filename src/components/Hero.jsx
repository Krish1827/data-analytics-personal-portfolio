import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import DataGlobe from "./DataGlobe";
import { Link } from "react-scroll";

const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((l, i) => i < iteration ? text[i] : chars[Math.floor(Math.random() * chars.length)]).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{display}</span>;
};

// NEW: Neural Data Nodes Background
const NeuralNodes = () => {
  const nodes = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-[2px]"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? "20%" : "50%",
          }}
          animate={{
            y: [0, Math.random() * -100, 0],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Decorative scanning line */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent z-0"
      />
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <DataGlobe />
      </div>
      
      <NeuralNodes />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel relative z-10 w-full max-w-3xl p-8 md:p-12 rounded-[32px] border border-white/10"
      >
        <div className="flex items-center gap-2 mb-6 relative z-10">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] animate-pulse"></span>
          <p className="text-cyan-400 font-mono text-[9px] tracking-[0.5em] uppercase">Krish_System_Core // Active</p>
        </div>
        
        <h1 className="font-black mb-6 leading-[0.82] tracking-tighter text-white relative z-10">
          HI, I’M <br/>
          <span className="text-cyan-400 text-glow"><ScrambleText text="KRISH PRAJAPATI" /></span>
        </h1>

        <p className="text-sm md:text-base text-slate-400 font-light max-w-lg mb-10 leading-relaxed relative z-10">
          Transforming complex datasets into <span className="text-white border-b border-cyan-500/20">insight-driven narratives</span>. Specialist in interactive BI architecture.
        </p>

        <div className="flex flex-wrap gap-4 relative z-10">
          <Link to="skills" smooth className="btn-lively px-7 py-3.5 bg-cyan-500 text-[#0f172a] font-bold rounded-xl cursor-pointer text-[10px] uppercase tracking-widest">
            Explore Stack
          </Link>
          <Link to="projects" smooth className="btn-lively px-7 py-3.5 border border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/10 cursor-pointer text-[10px] uppercase tracking-widest">
            View Projects
          </Link>
          <a href="https://github.com/Krish1827" target="_blank" className="btn-lively px-7 py-3.5 border border-white/10 rounded-xl hover:bg-white/5 text-[10px] font-mono flex items-center gap-2 group text-white">
            Github ↗
          </a>
        </div>
      </motion.div>

      <Link to="skills" smooth duration={1000} className="nav-arrow group">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 group-hover:text-white transition-colors">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </section>
  );
}