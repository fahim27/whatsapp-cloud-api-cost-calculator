"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    Briefcase,
    User,
    ShieldCheck,
    Megaphone,
    Settings,
    Clock,
    DollarSign,
    ArrowRight,
    Info,
    CheckCircle2,
    Layers,
    Calculator
} from "lucide-react";
import { PRICING_DATA } from "@/constants/pricing";

// ─── Helpers ────────────────────────────────────────────────────────────────
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5 },
};

// ─── Data ───────────────────────────────────────────────────────────────────
const CATEGORY_DETAILS = [
    {
        id: "marketing",
        name: "Marketing",
        icon: Megaphone,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        description: "Promotional messages like product launches, offers, and event announcements.",
        examples: [
            "Flash sale announcements",
            "Product launch notifications",
            "Seasonal campaign messages",
            "Discount coupon delivery",
        ],
        note: "Marketing messages have the highest per-conversation cost because they are outbound promotional content. They must use an approved template.",
    },
    {
        id: "utility",
        name: "Utility",
        icon: Settings,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        description: "Transactional messages like order confirmations, shipping updates, and account alerts.",
        examples: [
            "Order confirmation receipts",
            "Shipping & delivery updates",
            "Appointment reminders",
            "Payment confirmation alerts",
        ],
        note: "Utility messages are moderately priced. They relate to an existing transaction or activity that a customer expects.",
    },
    {
        id: "authentication",
        name: "Authentication",
        icon: ShieldCheck,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "One-time passcodes (OTPs) and verification messages for user authentication.",
        examples: [
            "Two-factor authentication codes",
            "Login verification OTPs",
            "Account recovery codes",
            "Transaction verification PINs",
        ],
        note: "Authentication messages are the most affordable business-initiated category. They use a special Meta authentication template.",
    },
    {
        id: "service",
        name: "Service",
        icon: MessageSquare,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        description: "Customer-initiated support conversations. The user sends the first message.",
        examples: [
            "Customer support inquiries",
            "Product questions",
            "Free-form customer replies",
            "Post-purchase support",
        ],
        note: "Service conversations are free for the first 1,000 per month. After that, they are billed at the service rate. No template is required — you can reply freely.",
    },
];

// ─── Component ──────────────────────────────────────────────────────────────
const Explanation = () => {
    // Sample pricing for the comparison table
    const sampleCountries = [
        { code: "BD", name: "Bangladesh" },
        { code: "IN", name: "India" },
        { code: "US", name: "United States" },
        { code: "GB", name: "United Kingdom" },
    ];

    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">

            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-dark/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10 space-y-28">

                {/* ════════════════════════════════════════════════════════════
                    SECTION 1: How WhatsApp Pricing Works
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                            <Info size={14} /> How Pricing Works
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit leading-tight">
                            Understanding WhatsApp <br />
                            <span className="text-primary">Conversation Billing</span>
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto text-base leading-relaxed">
                            WhatsApp Cloud API uses a <strong>conversation-based pricing model</strong>. You are not
                            charged per message — instead, you pay per <strong>24-hour conversation window</strong>.
                            Here's everything you need to know.
                        </p>
                    </div>

                    {/* How a conversation works — 4 steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                step: "01",
                                title: "A Message Is Sent",
                                desc: "Either you (the business) send a template message, or a customer messages you first.",
                                icon: MessageSquare,
                            },
                            {
                                step: "02",
                                title: "24-Hour Window Opens",
                                desc: "A conversation window opens for that specific category and lasts exactly 24 hours.",
                                icon: Clock,
                            },
                            {
                                step: "03",
                                title: "Unlimited Messages",
                                desc: "Within that 24 hours, you can exchange unlimited messages at no extra charge.",
                                icon: Layers,
                            },
                            {
                                step: "04",
                                title: "You're Billed Once",
                                desc: "You pay a single per-conversation fee based on the category and recipient country.",
                                icon: DollarSign,
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.step}
                                {...fadeUp}
                                className="glass-card p-6 space-y-4 group hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-5xl font-black font-outfit text-primary/10 group-hover:text-primary/20 transition-colors">
                                        {item.step}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon size={20} />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold">{item.title}</h4>
                                <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    SECTION 2: Business vs Customer Unified
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                            <Layers size={14} /> Conversation Types
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                            Business vs Customer <span className="text-primary">Unified</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Business Unified */}
                        <div className="glass-card p-8 space-y-5 border-primary/20">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black font-outfit">Business Unified</h3>
                                    <p className="text-xs text-primary font-bold uppercase tracking-wider">Business-Initiated</p>
                                </div>
                            </div>

                            <p className="text-sm text-foreground/60 leading-relaxed">
                                A <strong>Business Unified</strong> conversation starts when <em>your business</em> sends a
                                template message to a customer who hasn't messaged you in the last 24 hours. These require
                                pre-approved message templates.
                            </p>

                            <div className="space-y-2 text-sm">
                                <p className="font-bold text-foreground/80">Categories under Business Unified:</p>
                                {["Marketing — Promotional offers, product launches", "Utility — Order updates, reminders, payment receipts", "Authentication — OTPs, verification codes"].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-foreground/50">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                <p className="text-xs text-foreground/50 leading-relaxed">
                                    <strong className="text-foreground/70">Key Point:</strong> Each category opens its own
                                    24-hour window. If you send a marketing message and then a utility message to the same user,
                                    you're billed for two separate conversations.
                                </p>
                            </div>
                        </div>

                        {/* Customer Unified */}
                        <div className="glass-card p-8 space-y-5 border-emerald-500/20">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black font-outfit">Customer Unified</h3>
                                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">User-Initiated</p>
                                </div>
                            </div>

                            <p className="text-sm text-foreground/60 leading-relaxed">
                                A <strong>Customer Unified</strong> conversation starts when a <em>customer messages you first</em>.
                                You can respond freely without using a template. These conversations fall under the
                                <strong> Service</strong> category.
                            </p>

                            <div className="space-y-2 text-sm">
                                <p className="font-bold text-foreground/80">Key benefits:</p>
                                {[
                                    "First 1,000 conversations per month are completely FREE",
                                    "No template required — send free-form replies",
                                    "Lowest per-conversation rate after the free tier",
                                    "Ideal for customer support and helpdesk flows",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle2 size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                                        <span className="text-foreground/50">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                <p className="text-xs text-foreground/50 leading-relaxed">
                                    <strong className="text-foreground/70">Free Tier:</strong> Meta offers 1,000 free service
                                    conversations per WhatsApp Business Account per month. After that, the standard service rate
                                    applies.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    SECTION 3: Category Cost Breakdown
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                            <DollarSign size={14} /> Cost by Category
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                            What Each Category <span className="text-primary">Costs</span>
                        </h2>
                        <p className="text-foreground/60 max-w-xl mx-auto text-sm">
                            Pricing varies by both the message category and the recipient's country. Below is a detailed
                            breakdown of each category and example rates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CATEGORY_DETAILS.map((cat) => (
                            <motion.div
                                key={cat.id}
                                {...fadeUp}
                                className={cn("glass-card p-6 space-y-4", cat.border)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", cat.bg, cat.color)}>
                                        <cat.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black font-outfit">{cat.name}</h3>
                                        <p className="text-[11px] text-foreground/40 font-semibold uppercase tracking-wider">
                                            {cat.id === "service" ? "Customer Unified" : "Business Unified"}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm text-foreground/60 leading-relaxed">{cat.description}</p>

                                <div className="space-y-1.5">
                                    <p className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Use Cases</p>
                                    {cat.examples.map((ex, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <ArrowRight size={12} className={cat.color} />
                                            <span className="text-foreground/50">{ex}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={cn("p-3 rounded-lg text-xs text-foreground/50 leading-relaxed", cat.bg)}>
                                    {cat.note}
                                </div>

                                {/* Sample rates */}
                                <div className="pt-3 border-t border-glass-border">
                                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-2">Sample Rates (USD per conversation)</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {sampleCountries.map((c) => (
                                            <div key={c.code} className="flex items-center justify-between bg-background/60 rounded-lg px-3 py-1.5">
                                                <span className="text-[11px] text-foreground/50 font-medium">{c.name}</span>
                                                <span className={cn("text-xs font-black", cat.color)}>
                                                    ${PRICING_DATA[c.code][cat.id].toFixed(4)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    SECTION 4: How to Calculate Your Cost
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                            <Calculator size={14} /> Calculation Guide
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                            How to <span className="text-primary">Calculate</span> Your Cost
                        </h2>
                    </div>

                    <div className="glass-card p-8 md:p-10 space-y-8">
                        {/* Formula */}
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">The Formula</p>
                            <p className="text-xl md:text-2xl font-black font-outfit text-foreground">
                                Total Cost = <span className="text-primary">Number of Conversations</span> × <span className="text-primary">Rate per Category</span>
                            </p>
                            <p className="text-xs text-foreground/40 mt-2">
                                Where "Rate per Category" depends on the <strong>message category</strong> and <strong>recipient's country</strong>.
                            </p>
                        </div>

                        {/* Step-by-step */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold">Step-by-Step Calculation</h4>

                            <div className="space-y-4">
                                {[
                                    {
                                        step: 1,
                                        title: "Identify the Conversation Type",
                                        desc: "Is your business sending the first message (Business Unified), or is the customer initiating contact (Customer Unified)?",
                                    },
                                    {
                                        step: 2,
                                        title: "Determine the Template Category",
                                        desc: "For business-initiated: choose Marketing, Utility, or Authentication. For customer-initiated: it's always the Service category.",
                                    },
                                    {
                                        step: 3,
                                        title: "Check the Country Rate",
                                        desc: "The per-conversation rate varies by the recipient's phone number country code. Meta publishes different rates for each region.",
                                    },
                                    {
                                        step: 4,
                                        title: "Count Unique Conversations",
                                        desc: "Each customer you message counts as one conversation (per category). If you send multiple messages to the same customer within 24 hours under the same category, it's still one conversation.",
                                    },
                                    {
                                        step: 5,
                                        title: "Apply the Free Tier (if applicable)",
                                        desc: "If using the Service category, subtract the first 1,000 conversations — they're free every month. Only the remaining conversations are billable.",
                                    },
                                    {
                                        step: 6,
                                        title: "Multiply & Get Your Total",
                                        desc: "Billable Conversations × Rate per Conversation = Your Total Monthly Cost in USD.",
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h5 className="font-bold">{item.title}</h5>
                                            <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Worked Example */}
                        <div className="p-6 rounded-2xl bg-background/60 border border-glass-border space-y-4">
                            <h4 className="text-lg font-bold flex items-center gap-2">
                                <Calculator size={18} className="text-primary" /> Worked Example
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex justify-between bg-background/60 p-3 rounded-xl border border-glass-border">
                                    <span className="text-foreground/50">Category</span>
                                    <span className="font-bold text-primary">Marketing</span>
                                </div>
                                <div className="flex justify-between bg-background/60 p-3 rounded-xl border border-glass-border">
                                    <span className="text-foreground/50">Country</span>
                                    <span className="font-bold">Bangladesh (BD)</span>
                                </div>
                                <div className="flex justify-between bg-background/60 p-3 rounded-xl border border-glass-border">
                                    <span className="text-foreground/50">Rate</span>
                                    <span className="font-bold">$0.0528 / conversation</span>
                                </div>
                                <div className="flex justify-between bg-background/60 p-3 rounded-xl border border-glass-border">
                                    <span className="text-foreground/50">Customers</span>
                                    <span className="font-bold">500</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20">
                                <span className="font-bold text-lg font-outfit">Total Cost</span>
                                <span className="text-3xl font-black text-primary font-outfit">$26.40</span>
                            </div>
                            <p className="text-xs text-foreground/40">
                                500 customers × $0.0528 = $26.40. Each customer receives one marketing template, opening one 24-hour conversation window.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    SECTION 5: Important Things to Know
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                            <CheckCircle2 size={14} /> Key Facts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                            Important <span className="text-primary">Things</span> to Know
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                title: "No Platform Fee from Meta",
                                desc: "Meta does not charge any monthly subscription for the WhatsApp Cloud API. You only pay per-conversation. However, BSPs (Business Solution Providers) may add their own fees.",
                            },
                            {
                                title: "Templates Must Be Approved",
                                desc: "All business-initiated messages must use pre-approved templates. Templates are reviewed by Meta and usually approved within minutes to hours.",
                            },
                            {
                                title: "Multiple Categories = Multiple Bills",
                                desc: "Sending a marketing message AND a utility message to the same customer opens TWO separate 24-hour windows. You are billed for each.",
                            },
                            {
                                title: "Country-Based Pricing",
                                desc: "The rate depends on the recipient's phone number country code — not your business location. Sending to Germany costs more than sending to India.",
                            },
                            {
                                title: "Free Entry Point Conversations",
                                desc: "Conversations that start from a Click-to-WhatsApp ad or a Facebook Page CTA are free for the first 72 hours. Only the customer-initiated Service rate applies after.",
                            },
                            {
                                title: "Billing by Calendar Month",
                                desc: "Your monthly free tier (1,000 service conversations) resets on the 1st of each month. Billing is aggregated and charged through your Meta Business Account.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                className="glass-card p-6 space-y-3 hover:border-primary/30 transition-all"
                            >
                                <h4 className="font-bold text-sm">{item.title}</h4>
                                <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ════════════════════════════════════════════════════════════
                    SECTION 6: Pricing Comparison Table
                ════════════════════════════════════════════════════════════ */}
                <motion.div {...fadeUp} className="space-y-10">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                            Rate <span className="text-primary">Comparison</span> by Country
                        </h2>
                        <p className="text-foreground/60 text-sm max-w-xl mx-auto">
                            All rates in USD per individual conversation. Rates are set by Meta and subject to change.
                        </p>
                    </div>

                    <div className="glass-card overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-primary/10">
                                        <th className="text-left p-4 font-black text-xs uppercase tracking-wider text-primary">Country</th>
                                        <th className="text-right p-4 font-black text-xs uppercase tracking-wider text-rose-400">Marketing</th>
                                        <th className="text-right p-4 font-black text-xs uppercase tracking-wider text-amber-400">Utility</th>
                                        <th className="text-right p-4 font-black text-xs uppercase tracking-wider text-blue-400">Auth</th>
                                        <th className="text-right p-4 font-black text-xs uppercase tracking-wider text-emerald-400">Service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { code: "BD", name: "Bangladesh 🇧🇩" },
                                        { code: "IN", name: "India 🇮🇳" },
                                        { code: "US", name: "United States 🇺🇸" },
                                        { code: "GB", name: "United Kingdom 🇬🇧" },
                                        { code: "PK", name: "Pakistan 🇵🇰" },
                                        { code: "BR", name: "Brazil 🇧🇷" },
                                        { code: "ID", name: "Indonesia 🇮🇩" },
                                        { code: "SA", name: "Saudi Arabia 🇸🇦" },
                                        { code: "DE", name: "Germany 🇩🇪" },
                                        { code: "TR", name: "Turkey 🇹🇷" },
                                    ].map((c, i) => {
                                        const p = PRICING_DATA[c.code];
                                        return (
                                            <tr key={c.code} className={i % 2 === 0 ? "bg-background/30" : "bg-background/10"}>
                                                <td className="p-4 font-bold">{c.name}</td>
                                                <td className="p-4 text-right font-mono font-bold text-rose-400">${p.marketing.toFixed(4)}</td>
                                                <td className="p-4 text-right font-mono font-bold text-amber-400">${p.utility.toFixed(4)}</td>
                                                <td className="p-4 text-right font-mono font-bold text-blue-400">${p.authentication.toFixed(4)}</td>
                                                <td className="p-4 text-right font-mono font-bold text-emerald-400">${p.service.toFixed(4)}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-4 py-3 bg-background/40 text-[10px] text-foreground/30 font-semibold uppercase tracking-wider text-center">
                            Source: Meta WhatsApp Cloud API Pricing · Rates approximate and subject to updates
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Explanation;
