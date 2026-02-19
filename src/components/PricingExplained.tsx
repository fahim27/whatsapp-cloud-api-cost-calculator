'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Info, BookOpen, Lightbulb, Calculator as CalcIcon } from 'lucide-react';

export default function PricingExplained() {
    return (
        <section id="pricing-explained" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-brand" />
                    <h2 className="text-3xl font-bold">How WhatsApp Pricing Works</h2>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                    {/* Step by Step */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">1</span>
                                24-Hour Windows
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                WhatsApp charges are based on 24-hour conversation windows. A window starts when the first business message is delivered.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">2</span>
                                Template Categories
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                The cost per window varies depending on the type of template used: Marketing, Utility, or Authentication.
                            </p>
                        </div>
                    </div>

                    {/* Example Scenario */}
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-2 mb-6 text-brand">
                            <Lightbulb className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-wider text-sm">Example Scenario</span>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold">1,000 Marketing Messages to Bangladesh</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Country Rate</p>
                                    <p className="text-lg font-bold text-brand">$0.025 / conv</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Volume</p>
                                    <p className="text-lg font-bold text-brand">1,000</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Total Cost</p>
                                    <p className="text-lg font-bold text-brand">$25.00 USD</p>
                                </div>
                            </div>

                            <div className="p-6 bg-brand/5 rounded-2xl border border-brand/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <CalcIcon className="w-5 h-5 text-brand" />
                                    <span className="font-bold text-sm">The Formula</span>
                                </div>
                                <code className="text-brand font-mono font-bold block bg-white dark:bg-slate-800 p-3 rounded-lg border border-brand/20">
                                    Total Cost = (Number of Conversations) × (Category Rate for Country)
                                </code>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                            <Info className="w-6 h-6 text-amber-600 shrink-0" />
                            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed italic">
                                Note: In most countries, the first 1,000 service conversations (customer-initiated) each month are free of charge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
