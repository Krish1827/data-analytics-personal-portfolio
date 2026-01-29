import { motion } from "framer-motion";
import { Link } from "react-scroll";

const skillStack = [
  { 
    category: "Data Intelligence", 
    items: [{ n: "SQL (Pro)", l: "95%" }, { n: "Python", l: "90%" }, { n: "DAX", l: "85%" }, { n: "C#", l: "75%" }], 
    icon: "📡" 
  },
  { 
    category: "Engineering", 
    items: [{ n: "Snowflake", l: "85%" }, { n: "dbt Core", l: "80%" }, { n: "ETL/ELT", l: "90%" }, { n: "Modeling", l: "85%" }], 
    icon: "⚙️" 
  },
  { 
    category: "Visualization", 
    items: [{ n: "Power BI", l: "95%" }, { n: "Fabric", l: "85%" }, { n: "Tableau", l: "80%" }, { n: "Excel", l: "90%" }], 
    icon: "📊" 
  },
  { 
    category: "Cloud & Ops", 
    items: [{ n: "Azure/AWS", l: "75%" }, { n: "Git/CI-CD", l: "90%" }, { n: "Automate", l: "85%" }, { n: "Terraform", l: "70%" }], 
    icon: "☁️" 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-[#020617] min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="text-cyan-400 font-mono text-xs tracking-[0.6em] mb-4 uppercase">System_Capabilities // Core</h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">
            TECHNICAL <span className="stroke-text">STACK</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillStack.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, borderColor: "rgba(34, 211, 238, 0.5)" }}
              className="glass-panel p-8 rounded-[32px] border border-white/5 relative group"
            >
              {/* THE LOOP FILL: Slow scanning effect */}
              <div className="card-loader-overlay" />

              <div className="relative z-10">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">{skill.category}</h4>
                <div className="space-y-6">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-slate-300">
                        <span className="font-bold tracking-wider uppercase">{item.n}</span>
                        <span className="text-cyan-400">{item.l}</span>
                      </div>
                      <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.l }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_#22d3ee]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Link to="projects" smooth duration={1000} className="nav-arrow group">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Execute_Archive</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 group-hover:text-white transition-colors">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
    </section>
  );
}