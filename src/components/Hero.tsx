'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const facts = [
    "Conversation-based pricing (per 24h window)",
    "Category specific rates (Marketing, Utility, Auth)",
    "Regional pricing based on recipient country",
    "Free service conversation window (initial 24h)"
];

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-dark/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wider uppercase mb-6 border border-brand/20">
                            New 2025 Pricing Model
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                            Calculate Your <span className="text-gradient">WhatsApp API</span> Costs Instantly
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            Estimate your monthly expenses across different countries and message categories with our smart real-time calculator.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left"
                    >
                        {facts.map((fact, i) => (
                            <div key={i} className="flex items-center space-x-3 bg-white/50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 glass">
                                <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                                <span className="text-sm font-medium">{fact}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#calculator"
                            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand/20 flex items-center justify-center gap-2 group"
                        >
                            Start Calculating
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
