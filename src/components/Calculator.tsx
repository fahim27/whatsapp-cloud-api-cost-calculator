'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronDown,
    TrendingUp,
    Globe,
    DollarSign,
    Calendar,
    MessageCircle,
    Megaphone,
    ShieldCheck,
    Settings2,
    Headphones,
    Copy,
    Check
} from 'lucide-react';
import { useCalculator } from '@/hooks/use-calculator';
import { CATEGORIES } from '@/lib/whatsapp-data';
import { cn } from '@/lib/utils'; // I'll create this helper

const categoryIcons: Record<string, any> = {
    marketing: Megaphone,
    utility: Settings2,
    authentication: ShieldCheck,
    service: Headphones,
};

export default function Calculator() {
    const {
        countryCode,
        setCountryCode,
        category,
        setCategory,
        count,
        setCount,
        isMonthly,
        setIsMonthly,
        results,
        isLoading,
        country,
        countries
    } = useCalculator();

    const [search, setSearch] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [shared, setShared] = useState(false);
    const [savedCalculations, setSavedCalculations] = useState<any[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('whatsapp_calcs');
        if (saved) setSavedCalculations(JSON.parse(saved));
    }, []);

    const saveCalculation = () => {
        const newCalc = {
            id: Date.now(),
            country: country.name,
            category,
            count,
            totalUSD: results.totalUSD,
            date: new Date().toLocaleDateString()
        };
        const updated = [newCalc, ...savedCalculations].slice(0, 5);
        setSavedCalculations(updated);
        localStorage.setItem('whatsapp_calcs', JSON.stringify(updated));
    };

    const shareLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
    };

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    const copyResult = () => {
        const text = `WhatsApp Cost Estimate for ${country.name}: $${results.totalUSD.toFixed(2)} USD / ${results.totalLocal.toLocaleString()} ${results.currencyCode}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="calculator" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Interactive Cost Calculator</h2>
                    <p className="text-slate-600 dark:text-slate-400">Configure your messaging volume and category to see the estimated cost.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Inputs Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card p-8 space-y-8">
                            {/* Country Selector */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-brand" />
                                    Select Recipient Country
                                </label>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-brand transition-colors text-left"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="text-2xl">{country.code === 'GLOBAL' ? '🌍' : country.code.split('').map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join('')}</span>
                                            <span className="font-medium">{country.name}</span>
                                        </span>
                                        <ChevronDown className={cn("w-5 h-5 transition-transform", isDropdownOpen && "rotate-180")} />
                                    </button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-30 overflow-hidden"
                                            >
                                                <div className="p-3 border-b border-slate-100 dark:border-slate-700">
                                                    <div className="relative">
                                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="Search country..."
                                                            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-sm outline-none focus:ring-2 ring-brand/20"
                                                            value={search}
                                                            onChange={(e) => setSearch(e.target.value)}
                                                            onClick={(e) => e.stopPropagation()}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="max-h-64 overflow-y-auto">
                                                    {filteredCountries.map((c) => (
                                                        <button
                                                            key={c.code}
                                                            onClick={() => {
                                                                setCountryCode(c.code);
                                                                setIsDropdownOpen(false);
                                                                setSearch('');
                                                            }}
                                                            className={cn(
                                                                "w-full text-left p-4 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center justify-between transition-colors",
                                                                countryCode === c.code && "bg-brand/5 text-brand"
                                                            )}
                                                        >
                                                            <span className="flex items-center gap-3">
                                                                <span>{c.code === 'GLOBAL' ? '🌍' : c.code.split('').map(char => String.fromCodePoint(char.charCodeAt(0) + 127397)).join('')}</span>
                                                                <span>{c.name}</span>
                                                            </span>
                                                            {countryCode === c.code && <Check className="w-4 h-4" />}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Category Selector */}
                            <div className="space-y-4">
                                <label className="text-sm font-semibold flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-brand" />
                                    Conversation Category
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {CATEGORIES.map((cat) => {
                                        const Icon = categoryIcons[cat.id];
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => setCategory(cat.id as any)}
                                                className={cn(
                                                    "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all gap-2",
                                                    category === cat.id
                                                        ? "border-brand bg-brand/5 text-brand"
                                                        : "border-slate-100 dark:border-slate-800 hover:border-brand/30"
                                                )}
                                            >
                                                <Icon className="w-6 h-6" />
                                                <span className="text-xs font-bold uppercase tracking-wider">{cat.name}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                                <p className="text-xs text-slate-500 italic">
                                    {CATEGORIES.find(c => c.id === category)?.description}
                                </p>
                            </div>

                            {/* Volume Slider */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-sm font-semibold flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-brand" />
                                        Messaging Volume
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            value={count}
                                            onChange={(e) => setCount(Math.max(0, parseInt(e.target.value) || 0))}
                                            className="w-24 p-2 text-right font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-2 ring-brand/20"
                                        />
                                        <span className="text-sm text-slate-500 font-medium">/ month</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000"
                                    step="1000"
                                    value={count}
                                    onChange={(e) => setCount(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                                    <span>0</span>
                                    <span>25k</span>
                                    <span>50k</span>
                                    <span>75k</span>
                                    <span>100k+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        <div className="glass-card bg-brand p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <DollarSign className="w-24 h-24" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-brand-light/80 text-xs font-bold uppercase tracking-widest mb-1">Estimated Total</p>
                                        <h3 className="text-5xl font-black tabular-nums">
                                            ${results.totalUSD.toFixed(2)}
                                        </h3>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="h-px bg-white/20" />

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="opacity-80">Local Currency ({results.currencyCode})</span>
                                        <span className="font-bold">
                                            {isLoading ? '...' : results.totalLocal.toLocaleString(undefined, { style: 'currency', currency: results.currencyCode })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="opacity-80">Price per conv.</span>
                                        <span className="font-bold">${results.pricePerConversation.toFixed(4)}</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={copyResult}
                                        className="w-full bg-white text-brand hover:bg-brand-light transition-colors py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? 'Copied Breakdown!' : 'Copy Breakdown'}
                                    </button>
                                    <div className="flex gap-3 mt-3">
                                        <button
                                            onClick={saveCalculation}
                                            className="flex-1 bg-brand-dark/20 hover:bg-brand-dark/30 text-white transition-colors py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                                        >
                                            Save Result
                                        </button>
                                        <button
                                            onClick={shareLink}
                                            className="flex-1 bg-brand-dark/20 hover:bg-brand-dark/30 text-white transition-colors py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                                        >
                                            {shared ? 'Link Copied!' : 'Share Link'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {savedCalculations.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-card p-6 scale-95 opacity-80 hover:opacity-100 transition-all"
                            >
                                <h4 className="text-sm font-bold mb-4 flex items-center gap-2 italic">
                                    <TrendingUp className="w-4 h-4" />
                                    Recent Calculations
                                </h4>
                                <div className="space-y-3">
                                    {savedCalculations.map((calc: any) => (
                                        <div key={calc.id} className="flex justify-between items-center text-xs border-b border-slate-100 dark:border-slate-800 pb-2 text-slate-600 dark:text-slate-400">
                                            <span className="font-medium">{calc.country} ({calc.category})</span>
                                            <span className="font-bold text-brand">${calc.totalUSD.toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('whatsapp_calcs');
                                            setSavedCalculations([]);
                                        }}
                                        className="text-[10px] text-slate-400 hover:text-red-500 font-bold uppercase tracking-widest mt-2 transition-colors"
                                    >
                                        Clear History
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        <div className="glass-card p-6 border-l-4 border-brand">
                            <div className="flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-brand shrink-0 mt-1" />
                                <div className="space-y-4 w-full">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold">Estimation Period</h4>
                                        <button
                                            onClick={() => setIsMonthly(!isMonthly)}
                                            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none bg-slate-200 dark:bg-slate-700"
                                        >
                                            <span className={cn(
                                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                                isMonthly ? "translate-x-5" : "translate-x-0"
                                            )} />
                                        </button>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className={cn(isMonthly ? "text-slate-400" : "font-bold text-brand")}>Daily</span>
                                        <span className={cn(isMonthly ? "font-bold text-brand" : "text-slate-400")}>Monthly</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] text-center text-slate-500 uppercase font-black tracking-widest">
                            Data based on Meta 2024 pricing
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
