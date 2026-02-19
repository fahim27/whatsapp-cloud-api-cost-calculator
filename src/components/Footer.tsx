'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-gradient-brand p-1.5 rounded-lg shadow-lg">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold font-sans tracking-tight">
                                WhatsApp<span className="text-brand">Calc</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                            We provide the most accurate and up-to-date WhatsApp Cloud API pricing estimations for businesses worldwide. Built for developers and marketers.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-400 hover:text-brand transition-colors">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link href="#calculator" className="hover:text-brand transition-colors">Calculator</Link></li>
                            <li><Link href="#pricing-explained" className="hover:text-brand transition-colors">Pricing Guide</Link></li>
                            <li><Link href="#faq" className="hover:text-brand transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">API Docs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>support@whatsappcalc.com</span>
                            </li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
                    <p>© {new Date().getFullYear()} WhatsAppCalc. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <p>Built with Next.js & Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
