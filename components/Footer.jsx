"use client";

import { Linkedin, MessageSquare, ExternalLink } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-glass-border bg-background/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                        <MessageSquare size={24} />
                        <span className="text-xl font-bold font-outfit uppercase tracking-tighter">
                            WhatsApp <span className="text-foreground">Cost Calc</span>
                        </span>
                    </div>
                    <p className="text-sm text-foreground/40 max-w-sm leading-relaxed">
                        Helping businesses estimate their WhatsApp Cloud API costs with precision and transparency.
                    </p>
                </div>

                <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 max-w-xl border-primary/20 shadow-xl shadow-primary/10">
                    <div className="text-center md:text-left space-y-1">
                        <h4 className="font-bold text-lg">Need help with WhatsApp Cloud API?</h4>
                        <p className="text-sm text-foreground/50">Get expert assistance with setup, pricing, and automation.</p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/fahim27/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 text-sm font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        <Linkedin size={18} />
                        Contact here
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-foreground/30 font-bold uppercase tracking-widest">
                <p>© {new Date().getFullYear()} WhatsApp Cost Calculator. All rights reserved.</p>
                <p>Built with ❤️ for Businesses</p>
            </div>
        </footer>
    );
};

export default Footer;
