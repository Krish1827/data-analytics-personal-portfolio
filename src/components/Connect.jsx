import { motion } from "framer-motion";
import { Link } from "react-scroll";

const contactLinks = [
  { platform: "LinkedIn", label: "Professional", link: "https://www.linkedin.com/in/krish-prajapati-6243a922b", icon: "🔗" },
  { platform: "Email", label: "Direct", link: "mailto:krishprajapati2014@gmail.com", icon: "✉️" },
  { platform: "GitHub", label: "Code", link: "https://github.com/Krish1827", icon: "🐙" }
];

export default function Connect() {
  return (
    <section id="connect" className="relative py-32 px-6 bg-[#020617] min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-16">
          <h2 className="text-cyan-400 font-mono text-xs tracking-[0.6em] mb-4 uppercase">Initialize_Communication</h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">LET’S <span className="stroke-text">CONNECT</span></h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" whileHover={{ y: -10, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glass-panel p-8 rounded-[32px] text-center border border-white/5 cursor-pointer">
              <div className="card-loader-overlay" />
              <div className="relative z-10">
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold mb-1 text-white hover:text-cyan-400 transition-colors uppercase tracking-wider">{item.platform}</h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-20">
          <Link to="hero" smooth duration={1500} offset={-100} className="btn-lively inline-block px-10 py-4 border border-cyan-500/30 text-cyan-400 rounded-full font-mono text-[10px] tracking-widest cursor-pointer">RETURN_TO_SUMMIT ↑</Link>
        </div>
      </div>
    </section>
  );
}