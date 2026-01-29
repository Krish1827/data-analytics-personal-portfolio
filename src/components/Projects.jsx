import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-cyan-400 font-mono text-[10px] tracking-[0.6em] mb-4 uppercase">Archive_Root // Missions</h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">
            DATA <span className="stroke-text">PROJECTS</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              whileHover={{ y: -15, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel group p-10 rounded-[40px] block relative overflow-hidden border border-white/5"
            >
              {/* THE LOOP FILL: Slow scanning effect */}
              <div className="card-loader-overlay" />
              
              <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl group-hover:text-cyan-500/10 transition-colors">0{i + 1}</div>
              
              <div className="relative z-10">
                <span className="text-cyan-400 font-mono text-[9px] tracking-[0.4em] uppercase">{project.subtitle}</span>
                <h4 className="text-3xl font-bold mt-4 mb-6 group-hover:text-cyan-300 transition-colors leading-tight">{project.title}</h4>
                <p className="text-slate-400 mb-8 font-light text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex items-center gap-3 text-white text-[9px] font-bold tracking-[0.3em] uppercase">
                  INITIALIZE_CORE_DEPLOYMENT 
                  <span className="text-cyan-400 group-hover:translate-x-3 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <Link to="connect" smooth duration={1000} className="nav-arrow group">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Connect_Core</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 group-hover:text-white transition-colors">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
    </section>
  );
}