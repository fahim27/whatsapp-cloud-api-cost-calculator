"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator as CalcIcon,
    Globe,
    Tag,
    Hash,
    TrendingUp,
    ChevronDown,
    Search,
    MessageSquare,
    Briefcase,
    User
} from "lucide-react";
import { COUNTRIES, CONVERSATION_TYPES, CATEGORIES, PRICING_DATA, FREE_TIER_LIMIT } from "@/constants/pricing";
import { fetchExchangeRates, formatCurrency } from "@/utils/currency";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Calculator() {
    // ── State ──────────────────────────────────────────────────────────────────
    const [country, setCountry] = useState(COUNTRIES[0]);
    const [convType, setConvType] = useState(CONVERSATION_TYPES[0]);
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [conversations, setConversations] = useState(1);
    const [rates, setRates] = useState({});
    const [search, setSearch] = useState("");
    const [showCountries, setShowCountries] = useState(false);
    const [dropRect, setDropRect] = useState(null);
    const triggerRef = useRef(null);
    const dropdownRef = useRef(null);

    const [showCategories, setShowCategories] = useState(false);
    const [catDropRect, setCatDropRect] = useState(null);
    const catTriggerRef = useRef(null);
    const catDropdownRef = useRef(null);

    // Open country dropdown
    const openDropdown = useCallback(() => {
        if (triggerRef.current) setDropRect(triggerRef.current.getBoundingClientRect());
        setShowCountries(true);
    }, []);

    // Open category dropdown
    const openCatDropdown = useCallback(() => {
        if (catTriggerRef.current) setCatDropRect(catTriggerRef.current.getBoundingClientRect());
        setShowCategories(true);
    }, []);

    // Close country dropdown on outside click
    useEffect(() => {
        if (!showCountries) return;
        const handler = (e) => {
            if (triggerRef.current && triggerRef.current.contains(e.target)) return;
            if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
            setShowCountries(false);
            setSearch("");
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [showCountries]);

    // Close category dropdown on outside click
    useEffect(() => {
        if (!showCategories) return;
        const handler = (e) => {
            if (catTriggerRef.current && catTriggerRef.current.contains(e.target)) return;
            if (catDropdownRef.current && catDropdownRef.current.contains(e.target)) return;
            setShowCategories(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [showCategories]);

    // ── Exchange Rates ─────────────────────────────────────────────────────────
    useEffect(() => {
        fetchExchangeRates().then(setRates).catch(() => { });
    }, []);

    // ── Derived Data ───────────────────────────────────────────────────────────
    const availableCategories = useMemo(() => {
        const filtered = CATEGORIES.filter(c => c.type === convType.id);
        // If current category doesn't belong to new type, switch to first available
        if (!filtered.some(c => c.id === category.id)) {
            // Deferred state update to avoid rendering loop
            setTimeout(() => setCategory(filtered[0]), 0);
        }
        return filtered;
    }, [convType.id]);

    const filteredCountries = useMemo(() =>
        COUNTRIES.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.code.toLowerCase().includes(search.toLowerCase())
        ), [search]);

    const pricingTier = PRICING_DATA[country.code] || PRICING_DATA.DEFAULT;
    const pricePerConv = pricingTier[category.id] ?? pricingTier.marketing ?? 0;

    const billableConversations = Math.max(
        0,
        conversations - (category.id === "service" ? FREE_TIER_LIMIT : 0)
    );
    const totalUSD = billableConversations * pricePerConv;

    const displayUSD = useMemo(() => formatCurrency(totalUSD, "USD", rates), [totalUSD, rates]);
    const displayLocal = useMemo(() => formatCurrency(totalUSD, country.currency, rates), [totalUSD, country.currency, rates]);
    const rateLocal = useMemo(() => formatCurrency(pricePerConv, country.currency, rates), [pricePerConv, country.currency, rates]);

    // split USD into integer + decimal for big display
    const [usdInt, usdDec] = displayUSD.includes(".") ? displayUSD.split(".") : [displayUSD, "00"];

    // ─── Render ────────────────────────────────────────────────────────────────
    return (
        <section id="calculator" className="py-24 px-4 bg-background relative overflow-hidden">

            {/* bg blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        Start Your <span className="text-primary">Estimation</span>
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto text-base">
                        Fill in the details below to get a real-time WhatsApp cost breakdown for your business.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* ── LEFT: Inputs ─────────────────────────────────────────── */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* === 1. Country === */}
                        <div className="glass-card p-6 space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2 text-foreground/60">
                                <Globe size={15} className="text-primary" />
                                <span>1. Target Country</span>
                            </label>

                            {/* Trigger button — ref is on the button so we can measure its position */}
                            <button
                                ref={triggerRef}
                                onClick={() => showCountries ? (setShowCountries(false), setSearch("")) : openDropdown()}
                                className={cn(
                                    "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left",
                                    showCountries
                                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                        : "border-glass-border bg-background/60 hover:border-primary/40"
                                )}
                            >
                                <div className="w-12 h-12 rounded-xl bg-background/80 border border-glass-border flex items-center justify-center text-3xl flex-shrink-0">
                                    {country.flag}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-base leading-tight">{country.name}</p>
                                    <p className="text-xs text-foreground/50 font-semibold mt-0.5">{country.currency} &middot; {country.code}</p>
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={cn("flex-shrink-0 text-foreground/40 transition-transform duration-300", showCountries && "rotate-180 text-primary")}
                                />
                            </button>

                            {/* Portal dropdown — rendered in body so it escapes overflow:hidden */}
                            {showCountries && dropRect && typeof document !== "undefined" && createPortal(
                                <AnimatePresence>
                                    <motion.div
                                        ref={dropdownRef}
                                        key="country-dropdown"
                                        initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                        exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        style={{
                                            position: "fixed",
                                            top: dropRect.bottom + 8,
                                            left: dropRect.left,
                                            width: dropRect.width,
                                            transformOrigin: "top",
                                            zIndex: 9999,
                                        }}
                                        className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-xl bg-background/95"
                                    >
                                        {/* Search */}
                                        <div className="p-3 border-b border-glass-border">
                                            <div className="relative">
                                                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70" />
                                                <input
                                                    autoFocus
                                                    type="text"
                                                    placeholder="Search country…"
                                                    value={search}
                                                    onChange={e => setSearch(e.target.value)}
                                                    className="w-full bg-background/80 border border-glass-border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2 ring-primary/30 font-medium placeholder:text-foreground/30"
                                                />
                                            </div>
                                        </div>

                                        {/* Country grid */}
                                        <div className="overflow-y-auto max-h-72 p-2" style={{ scrollbarWidth: "thin" }}>
                                            {filteredCountries.length === 0 ? (
                                                <div className="py-8 text-center text-foreground/40 text-sm">No countries found</div>
                                            ) : (
                                                <div className="flex flex-col gap-1">
                                                    {filteredCountries.map(c => {
                                                        const active = country.code === c.code;
                                                        return (
                                                            <button
                                                                key={c.code}
                                                                onClick={() => { setCountry(c); setShowCountries(false); setSearch(""); }}
                                                                className={cn(
                                                                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150",
                                                                    active ? "bg-primary text-white shadow-md shadow-primary/20" : "hover:bg-primary/10"
                                                                )}
                                                            >
                                                                <span className="text-2xl leading-none flex-shrink-0">{c.flag}</span>
                                                                <div className="min-w-0 flex-1">
                                                                    <p className={cn("text-sm font-bold truncate leading-tight", active ? "text-white" : "text-foreground")}>{c.name}</p>
                                                                    <p className={cn("text-[10px] font-semibold mt-0.5", active ? "text-white/60" : "text-foreground/40")}>{c.currency}</p>
                                                                </div>
                                                                {active && <span className="text-white/80 text-xs flex-shrink-0">✓</span>}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>,
                                document.body
                            )}
                        </div>


                        {/* === 2. Conversation Type (Cards) === */}
                        <div className="glass-card p-6 space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2 text-foreground/60">
                                <MessageSquare size={15} className="text-primary" />
                                <span>2. Conversation Type</span>
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {CONVERSATION_TYPES.map(type => {
                                    const active = convType.id === type.id;
                                    const Icon = type.id === "business" ? Briefcase : User;
                                    return (
                                        <button
                                            key={type.id}
                                            onClick={() => setConvType(type)}
                                            className={cn(
                                                "p-5 rounded-xl border text-left transition-all relative overflow-hidden",
                                                active
                                                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                                                    : "border-glass-border bg-background/40 hover:border-primary/30"
                                            )}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={cn(
                                                    "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                                                    active ? "bg-primary text-white" : "bg-primary/10 text-primary"
                                                )}>
                                                    <Icon size={18} />
                                                </div>
                                                <div>
                                                    <p className={cn("font-bold text-sm", active ? "text-primary" : "text-foreground")}>{type.name}</p>
                                                    <p className="text-[11px] text-foreground/50 leading-snug mt-0.5">{type.description}</p>
                                                </div>
                                            </div>
                                            {active && <motion.div layoutId="conv-type-bg" className="absolute inset-0 bg-primary/5 -z-10" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* === 3. Template Category === */}
                        <div className="glass-card p-6 space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2 text-foreground/60">
                                <Tag size={15} className="text-primary" />
                                <span>3. Template Category</span>
                            </label>

                            {/* Trigger */}
                            <button
                                ref={catTriggerRef}
                                onClick={() => showCategories ? setShowCategories(false) : openCatDropdown()}
                                className={cn(
                                    "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 text-left",
                                    showCategories
                                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                        : "border-glass-border bg-background/60 hover:border-primary/40"
                                )}
                            >
                                <div>
                                    <p className="font-bold text-sm">{category.name}</p>
                                    <p className="text-[11px] text-foreground/40 mt-0.5">{convType.name}</p>
                                </div>
                                <ChevronDown
                                    size={18}
                                    className={cn("flex-shrink-0 text-foreground/40 transition-transform duration-300", showCategories && "rotate-180 text-primary")}
                                />
                            </button>

                            {/* Portal dropdown */}
                            {showCategories && catDropRect && typeof document !== "undefined" && createPortal(
                                <AnimatePresence>
                                    <motion.div
                                        ref={catDropdownRef}
                                        key="cat-dropdown"
                                        initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                        exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        style={{
                                            position: "fixed",
                                            top: catDropRect.bottom + 8,
                                            left: catDropRect.left,
                                            width: catDropRect.width,
                                            transformOrigin: "top",
                                            zIndex: 9999,
                                        }}
                                        className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-xl bg-background/95"
                                    >
                                        <div className="p-2">
                                            {availableCategories.map(cat => {
                                                const active = category.id === cat.id;
                                                return (
                                                    <button
                                                        key={cat.id}
                                                        onClick={() => { setCategory(cat); setShowCategories(false); }}
                                                        className={cn(
                                                            "w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-150",
                                                            active ? "bg-primary text-white" : "hover:bg-primary/10"
                                                        )}
                                                    >
                                                        <span className={cn("font-bold text-sm", active ? "text-white" : "text-foreground")}>{cat.name}</span>
                                                        {active && <span className="text-white/80 text-xs">✓</span>}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>,
                                document.body
                            )}
                        </div>

                        {/* === 4. Customer Number === */}
                        <div className="glass-card p-6 space-y-3">
                            <label className="text-sm font-semibold flex items-center gap-2 text-foreground/60">
                                <Hash size={15} className="text-primary" />
                                <span>4. Number of Customers</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min={1}
                                    value={conversations}
                                    onChange={e => setConversations(Math.max(1, Number(e.target.value)))}
                                    placeholder="Enter number of customers"
                                    className="w-full p-4 pr-24 rounded-2xl bg-background/60 border border-glass-border hover:border-primary/40 focus:border-primary focus:ring-2 ring-primary/20 outline-none font-bold text-lg transition-colors"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-foreground/40 font-semibold uppercase tracking-wide pointer-events-none">customers</span>
                            </div>
                            <p className="text-[11px] text-foreground/40 font-medium">Each customer = 1 conversation. Cost is calculated per conversation.</p>
                        </div>

                    </div>

                    {/* ── RIGHT: Results ───────────────────────────────────────── */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                        <motion.div
                            layout
                            className="glass-card p-8 border-primary/20 shadow-2xl shadow-primary/10 space-y-6"
                        >
                            {/* ── Section: Individual Cost ── */}
                            <div className="p-5 rounded-2xl bg-background/50 border border-glass-border space-y-3">
                                <p className="text-[10px] uppercase font-black tracking-widest text-foreground/40">Individual Cost</p>

                                {/* USD rate */}
                                <div className="flex items-end justify-between">
                                    <span className="text-xs font-semibold text-foreground/50">USD</span>
                                    <motion.span
                                        key={pricePerConv}
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-2xl font-black font-outfit text-foreground tracking-tight"
                                    >
                                        {formatCurrency(pricePerConv, "USD", rates)}
                                    </motion.span>
                                </div>

                                <div className="border-t border-glass-border" />

                                {/* Local currency rate */}
                                <div className="flex items-end justify-between">
                                    <span className="text-xs font-semibold text-foreground/50">{country.currency}</span>
                                    <motion.span
                                        key={rateLocal}
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-2xl font-black font-outfit text-primary tracking-tight"
                                    >
                                        {rateLocal}
                                    </motion.span>
                                </div>
                            </div>

                            {/* ── Section: Total Cost ── */}
                            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 space-y-3">
                                <p className="text-[10px] uppercase font-black tracking-widest text-primary/60">Total Cost</p>

                                {/* USD total */}
                                <div className="flex items-end justify-between">
                                    <span className="text-xs font-semibold text-foreground/50">USD</span>
                                    <motion.span
                                        key={totalUSD}
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-3xl font-black font-outfit text-foreground tracking-tight"
                                    >
                                        {displayUSD}
                                    </motion.span>
                                </div>

                                <div className="border-t border-primary/20" />

                                {/* Local total */}
                                <div className="flex items-end justify-between">
                                    <span className="text-xs font-semibold text-foreground/50">{country.currency}</span>
                                    <motion.span
                                        key={displayLocal}
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-3xl font-black font-outfit text-primary tracking-tight"
                                    >
                                        {displayLocal}
                                    </motion.span>
                                </div>
                            </div>

                            <p className="text-[9px] text-center text-foreground/30 uppercase tracking-wider font-bold">
                                * Estimates based on current WhatsApp Cloud API rates
                            </p>
                        </motion.div>
                    </div>


                </div>
            </div>
        </section>
    );
}
