"use strict";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
    title: "Support Us | manyaseema Volunteer Organization",
    description: "Support our mission to empower rural communities. Your donations directly fund education, healthcare, and sustainable agriculture in Andhra Pradesh.",
};

export default function SupportUs() {
    const impactTiers = [
        { amount: "₹800", label: "Farmer's Toolkit", desc: "Provides high-quality organic seeds and bio-fertilizers for one marginal farmer.", icon: "🌾" },
        { amount: "₹2,500", label: "Smart Classroom", desc: "Sponsors specialized digital literacy training for 5 rural students for a full term.", icon: "💻" },
        { amount: "₹6,000", label: "Women's Enterprise", desc: "Covers the startup cost for a tribal woman to join a honey-processing collective.", icon: "🍯" },
        { amount: "₹15,000", label: "Village Water Hub", desc: "Funds the maintenance and testing of a community RO water plant for an entire village.", icon: "💧" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* 1. Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-primary text-white overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/hero-1.png"
                            alt="Support background"
                            fill
                            className="object-cover opacity-20 brightness-50"
                            priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal direction="up" distance={40}>
                            <h2 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-6">Invest in Resilience</h2>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black mb-8 tracking-tighter italic leading-tight">
                                Fuel the <span className="text-accent-bg">Transformation.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-accent-bg/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light italic">
                                We've moved beyond charity. Every rupee you contribute is a direct investment in sustainable, community-led growth in rural Andhra Pradesh.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. Impact Dashboard - Tiers + UPI */}
                <section className="py-24 md:py-40 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

                            {/* Left: Quick Scan & Pay */}
                            <div className="lg:col-span-5 space-y-8 sticky top-32">
                                <ScrollReveal direction="left" className="bg-light-gray rounded-[40px] md:rounded-[60px] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
                                        <span className="text-9xl">📱</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 italic tracking-tight">Scan to Support</h3>
                                    <div className="bg-white p-6 rounded-[32px] shadow-inner border border-gray-100 aspect-square flex flex-col items-center justify-center space-y-4 mb-8">
                                        {/* Mock QR code container */}
                                        <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20 relative group">
                                            <span className="text-primary font-black text-xs md:text-sm tracking-widest uppercase opacity-40">UPI QR Code</span>
                                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">UPI ID: mvo@axisbank</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <div className="px-3 py-1 bg-white rounded-lg text-[10px] font-black italic">GPay</div>
                                        <div className="px-3 py-1 bg-white rounded-lg text-[10px] font-black italic">PhonePe</div>
                                        <div className="px-3 py-1 bg-white rounded-lg text-[10px] font-black italic">Paytm</div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" delay={0.2} className="bg-primary/5 rounded-[40px] p-8 md:p-10 border border-primary/10">
                                    <h4 className="text-lg font-black text-primary mb-2 italic">Automated 80G Receipts</h4>
                                    <p className="text-sm text-gray-600 font-light italic">After scanning, please WhatsApp or Email your transaction screenshot to get your tax-exemption certificate immediately.</p>
                                </ScrollReveal>
                            </div>

                            {/* Right: Outcome-based Tiers */}
                            <div className="lg:col-span-7 space-y-6 md:space-y-8">
                                <ScrollReveal direction="up" className="mb-10">
                                    <h3 className="text-2xl md:text-4xl font-heading font-black text-gray-900 italic tracking-tight">Choose Your Impact</h3>
                                    <p className="text-gray-500 font-light mt-2 italic">Select a specific initiative to fuel today.</p>
                                </ScrollReveal>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {impactTiers.map((tier, idx) => (
                                        <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all group flex flex-col justify-between h-full cursor-pointer relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
                                            <div>
                                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{tier.icon}</div>
                                                <div className="text-2xl md:text-3xl font-black text-primary mb-2 italic tracking-tight">{tier.amount}</div>
                                                <h4 className="text-lg font-black text-gray-900 mb-3 italic tracking-tight">{tier.label}</h4>
                                                <p className="text-sm text-gray-500 font-light italic lg:leading-relaxed">{tier.desc}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. Traditional Bank Transfer Fallback */}
                <section className="py-24 md:py-40 bg-accent-bg relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-16 md:mb-20">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Corporate & Large Gifts</h2>
                            <p className="text-3xl md:text-5xl font-heading font-black text-gray-900 italic tracking-tighter italic">Traditional Wire Transfer</p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-20 shadow-2xl relative overflow-hidden border border-gray-50">
                            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12">
                                <span className="text-7xl md:text-9xl">�️</span>
                            </div>
                            <div className="grid gap-6 md:gap-8 font-light italic text-lg md:text-xl text-gray-600">
                                <div className="flex flex-col md:flex-row justify-between border-b border-gray-50 pb-4 gap-2">
                                    <span className="text-gray-400">Account Name:</span>
                                    <span className="font-black text-gray-900">manyaseema Volunteer Org.</span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between border-b border-gray-50 pb-4 gap-2">
                                    <span className="text-gray-400">Account No:</span>
                                    <span className="font-black text-gray-900">9876 5432 1010</span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between border-b border-gray-50 pb-4 gap-2">
                                    <span className="text-gray-400">Bank & Branch:</span>
                                    <span className="font-black text-gray-900">EcoBank, Vizag Branch</span>
                                </div>
                                <div className="flex flex-col md:flex-row justify-between pb-4 gap-2">
                                    <span className="text-gray-400">IFSC Code:</span>
                                    <span className="font-black text-gray-900 uppercase">ecob0001234</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 4. Monthly Sustainer CTA */}
                <section className="py-24 md:py-40 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 italic tracking-tighter leading-tight">Become a Monthly Hero</h2>
                        <p className="text-lg md:text-2xl text-accent-bg/80 mb-12 md:mb-16 font-light leading-relaxed italic max-w-2xl mx-auto">
                            Reliable change happens through consistent support. Join 500+ monthly donors who scale our impact day by day.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-white text-primary px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 italic tracking-tight">
                                    Start Monthly Support
                                </button>
                            </Link>
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-white hover:text-primary transition-all transform hover:-translate-y-2 italic tracking-tight">
                                    Inquire for CSR
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
