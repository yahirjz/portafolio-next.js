"use client"
import { data } from "@/data/data";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

type SkillItem = {
    name: string;
    logo: string;
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
};

const SkillBadge = ({ name, logo }: { name: string, logo: string }) => (
    <motion.div variants={itemVariants} className="group relative flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] px-5 py-3 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-colors duration-300 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-accent-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <Image src={logo} alt={name} width={20} height={20} unoptimized loading="lazy" className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-opacity transition-transform duration-300 relative z-10" />
        <span className="font-sans text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300 relative z-10">{name}</span>
    </motion.div>
);

const SkillCategory = ({ title, skills, delay }: { title: string, skills: SkillItem[], delay: number }) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.6, delay, when: "beforeChildren", staggerChildren: 0.05 } }
        }}
        className="flex flex-col gap-6 p-8 rounded-3xl glass-panel relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-500"
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand-500/10 transition-colors duration-500"></div>
        <div className="flex items-center gap-3 relative z-10">
            <h4 className="text-white font-sans text-xl font-semibold tracking-tight">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-3 relative z-10">
            {skills.map((s, idx) => (
                <SkillBadge key={`${s.name}-${idx}`} name={s.name} logo={s.logo} />
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="habilidades" className="py-32 px-6 w-full max-w-6xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full mb-16 flex flex-col items-center text-center"
            >
                <span className="text-brand-400 font-medium text-sm tracking-widest uppercase mb-3">Arsenal</span>
                <h2 className="text-slate-50 font-sans font-bold text-4xl md:text-5xl tracking-tight"> 
                    Tecnologías
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCategory title="Frontend Development" skills={data.skills.frontend} delay={0.1} />
                <SkillCategory title="Backend & APIs" skills={data.skills.backend} delay={0.2} />
                <SkillCategory title="Tools & DevOps" skills={data.skills.herramientas} delay={0.3} />
                <SkillCategory title="Cloud Services" skills={data.skills.cloud} delay={0.4} />
            </div>
        </section>
    )
}

export default Skills
