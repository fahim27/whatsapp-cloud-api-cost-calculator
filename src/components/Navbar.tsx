'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Calculator } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-(--glass-border)">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2 shrink-0">
                        <div className="bg-gradient-brand p-1.5 rounded-lg shadow-lg">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold font-sans tracking-tight">
                            WhatsApp<span className="text-brand">Calc</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <Link href="#calculator" className="hover:text-brand transition-colors">Calculator</Link>
                        <Link href="#pricing-explained" className="hover:text-brand transition-colors">Pricing Explained</Link>
                        <Link href="#faq" className="hover:text-brand transition-colors">FAQ</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="#calculator"
                            className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand/20 active:scale-95 flex items-center gap-2"
                        >
                            <Calculator className="w-4 h-4" />
                            Calculate Cost
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
