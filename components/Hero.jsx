"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Globe, ShieldCheck } from "lucide-react";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const facts = [
        { icon: <MessageSquare className="w-5 h-5" />, text: "Conversation-based pricing" },
        { icon: <Zap className="w-5 h-5" />, text: "Template-based categories" },
        { icon: <Globe className="w-5 h-5" />, text: "Country-specific rates" },
        { icon: <ShieldCheck className="w-5 h-5" />, text: "1,000 Free conversations monthly" },
    ];

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-dark/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
                    >
                        WhatsApp Cloud API Pricing Made Simple
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold font-outfit tracking-tight"
                    >
                        Calculate Your <br />
                        <span className="text-gradient">WhatsApp Costs</span> Instantly
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Stop guessing your monthly expenses. Our smart calculator helps you estimate
                        conversation costs across different countries and message categories with real-time accuracy.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8"
                    >
                        {facts.map((fact, index) => (
                            <div
                                key={index}
                                className="glass-card p-4 flex items-center gap-3 text-sm font-medium hover:scale-105"
                            >
                                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                    {fact.icon}
                                </div>
                                <span>{fact.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-10">
                        <a href="#calculator" className="btn-primary text-lg px-8 shadow-primary/30">
                            Calculate Cost Now
                            <Zap className="fill-current" size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </section>
    );
};

export default Hero;
