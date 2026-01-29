import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative z-10 py-10 px-6 border-t border-white/5 bg-[#020617]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            <p className="text-white font-mono text-[10px] tracking-[0.3em] uppercase">Krish Prajapati // Data Analyist</p>
          </div>
          <p className="text-slate-600 font-mono text-[8px] tracking-[0.2em] uppercase pl-3">© 2026 // Distributed_Systems_Core</p>
        </div>

        <div className="flex gap-8 font-mono text-[9px] text-slate-400 uppercase tracking-[0.25em]">
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="text-slate-600 mb-1">Location</span>
            <span className="text-white">Ontario, CA</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="text-slate-600 mb-1">Local_Time</span>
            <span className="text-white">{time}</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-4">
            <span className="text-slate-600 mb-1">Status</span>
            <span className="text-cyan-400 animate-pulse">Ready_For_Collab</span>
          </div>
        </div>

        <div className="text-right hidden md:block">
          <p className="text-slate-600 font-mono text-[8px] tracking-widest uppercase">Build: v2.0.4a // React.Framer.Tailwind</p>
        </div>
      </div>
    </footer>
  );
}