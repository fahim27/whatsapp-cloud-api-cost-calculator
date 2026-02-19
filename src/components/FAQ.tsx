'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is a conversation-based pricing model?",
        answer: "WhatsApp charges businesses per 24-hour conversation window rather than per individual message. During this window, you can send unlimited messages in that specific category."
    },
    {
        question: "Are there any free conversations?",
        answer: "Yes! Every WhatsApp Business Account gets 1,000 free service (user-initiated) conversations each month. Note that marketing, utility, and authentication templates are not included in this free tier."
    },
    {
        question: "How are different template categories charged?",
        answer: "Meta categorizes templates into Marketing, Utility, and Authentication. Marketing is usually the most expensive, while Authentication and Utility rates are lower and often similar in price."
    },
    {
        question: "Does the price change by country?",
        answer: "Yes, WhatsApp pricing is highly regional. The cost is determined by the country code of the recipient's phone number, not the location of your business."
    },
    {
        question: "What happens if a customer initiates the chat?",
        answer: "When a customer sends a message, it opens a 'Service Window'. If you reply within 24 hours without using a template, it's considered a service conversation. The first 1,000 of these per month are free."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-12 justify-center">
                    <HelpCircle className="w-8 h-8 text-brand" />
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left p-6 flex justify-between items-center gap-4"
                            >
                                <span className="font-bold text-slate-800 dark:text-slate-100">{faq.question}</span>
                                <div className="bg-slate-100 dark:bg-slate-700 p-1.5 rounded-lg shrink-0 text-brand">
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-50 dark:border-slate-700/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
