import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <p className="text-gray-400 leading-relaxed">
        I’m a data analyst with a strong foundation in SQL, Python, and data
        visualization. I enjoy working with messy datasets, building reliable
        analysis pipelines, and communicating insights clearly to both technical
        and non-technical stakeholders.
      </p>
    </section>
  );
}
