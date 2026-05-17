"use strict";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
    title: "Support Us | Manyaseema Volunteer Organization",
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
                <section className="relative pt-20 pb-8 md:pt-48 md:pb-32 bg-primary text-white overflow-hidden">
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
                            <h2 className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Invest in Resilience</h2>
                            <h1 className="text-2xl sm:text-5xl md:text-8xl font-heading font-black mb-4 md:mb-8 tracking-tighter leading-tight">
                                Fuel the <span className="text-accent-bg">Transformation.</span>
                            </h1>
                            <p className="text-sm md:text-2xl text-accent-bg/80 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
                                We've moved beyond charity. Every rupee you contribute is a direct investment in sustainable, community-led growth in rural Andhra Pradesh.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 2. Impact Dashboard */}
                <section className="py-10 md:py-40 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                            {/* Left: Quick Scan & Pay */}
                            <div className="lg:col-span-5 space-y-5 md:space-y-8 lg:sticky lg:top-32">
                                <ScrollReveal direction="left" className="bg-light-gray rounded-[24px] md:rounded-[60px] p-5 md:p-12 border border-gray-100 shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] rotate-12 hidden md:block">
                                        <span className="text-9xl">📱</span>
                                    </div>
                                    <h3 className="text-lg md:text-3xl font-black text-gray-900 mb-4 tracking-tight">Scan to Support</h3>
                                    <div className="bg-white p-4 md:p-6 rounded-[20px] md:rounded-[32px] shadow-inner border border-gray-100 flex flex-col items-center justify-center space-y-4 mb-5 md:mb-8">
                                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                                            <Image
                                                src="/upi-qr.png"
                                                alt="Manyaseema UPI QR Code — Scan to donate"
                                                fill
                                                className="object-contain rounded-2xl"
                                            />
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-bold tracking-[0.15em]">UPI ID: 333787663417989@cnrb</p>

                                        {/* BHIM + UPI trust badges */}
                                        <div className="flex items-center justify-center gap-6 pt-1">
                                            <Image src="/logos/bhim-logo.png" alt="BHIM" width={64} height={40} className="object-contain h-10 w-auto" />
                                            <div className="w-px h-8 bg-gray-200" />
                                            <Image src="/logos/upi-logo.png" alt="UPI" width={96} height={48} className="object-contain h-12 w-auto" />
                                        </div>
                                    </div>

                                    {/* Payment app logos */}
                                    <div className="flex flex-wrap justify-center items-center gap-2">
                                        <div className="h-9 bg-white rounded-xl px-3 py-1.5 flex items-center shadow-sm border border-gray-100">
                                            <Image src="/logos/phone-pe.png" alt="PhonePe" width={72} height={24} className="object-contain h-5 w-auto" />
                                        </div>
                                        <div className="h-9 bg-white rounded-xl px-3 py-1.5 flex items-center shadow-sm border border-gray-100">
                                            <Image src="/logos/gpay.png" alt="Google Pay" width={72} height={24} className="object-contain h-5 w-auto" />
                                        </div>
                                        <div className="h-9 bg-white rounded-xl px-3 py-1.5 flex items-center shadow-sm border border-gray-100">
                                            <Image src="/logos/paytm.png" alt="Paytm" width={72} height={24} className="object-contain h-5 w-auto" />
                                        </div>
                                        <div className="h-9 bg-white rounded-xl px-3 py-1.5 flex items-center shadow-sm border border-gray-100">
                                            <Image src="/logos/canara-ail.png" alt="Canara AI1" width={72} height={24} className="object-contain h-5 w-auto" />
                                        </div>
                                        <div className="h-9 bg-white rounded-xl px-3 py-1.5 flex items-center shadow-sm border border-gray-100">
                                            <Image src="/logos/canara-cbdc.png" alt="Canara CBDC" width={72} height={24} className="object-contain h-5 w-auto" />
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" delay={0.2} className="bg-primary/5 rounded-[20px] md:rounded-[40px] p-5 md:p-10 border border-primary/10">
                                    <h4 className="text-base font-black text-primary mb-2">Automated 80G Receipts</h4>
                                    <p className="text-sm text-gray-600 font-light">After scanning, please WhatsApp or Email your transaction screenshot to get your tax-exemption certificate immediately.</p>
                                </ScrollReveal>
                            </div>

                            {/* Right: Impact Tiers */}
                            <div className="lg:col-span-7 space-y-5 md:space-y-8">
                                <ScrollReveal direction="up" className="mb-5 md:mb-10">
                                    <h3 className="text-xl md:text-4xl font-heading font-black text-gray-900 tracking-tight">Choose Your Impact</h3>
                                    <p className="text-gray-500 font-light mt-1 text-sm">Select a specific initiative to fuel today.</p>
                                </ScrollReveal>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    {impactTiers.map((tier, idx) => (
                                        <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-5 md:p-10 rounded-[20px] md:rounded-[40px] border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all group flex flex-col justify-between cursor-pointer relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[40px] -mr-6 -mt-6 group-hover:scale-110 transition-transform duration-500" />
                                            <div>
                                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{tier.icon}</div>
                                                <div className="text-xl md:text-3xl font-black text-primary mb-1 tracking-tight">{tier.amount}</div>
                                                <h4 className="text-base font-black text-gray-900 mb-2 tracking-tight">{tier.label}</h4>
                                                <p className="text-sm text-gray-500 font-light leading-relaxed">{tier.desc}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Bank Transfer */}
                <section className="py-10 md:py-40 bg-accent-bg relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-20">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Corporate & Large Gifts</h2>
                            <p className="text-xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter">Traditional Wire Transfer</p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" className="bg-white rounded-[20px] md:rounded-[60px] p-5 md:p-20 shadow-2xl relative overflow-hidden border border-gray-50">
                            <div className="grid gap-4 md:gap-8 font-light text-sm md:text-xl text-gray-600">
                                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-100 pb-4 gap-1">
                                    <span className="text-gray-400">Account Name:</span>
                                    <span className="font-black text-gray-900">Manyaseema Volunteer Organization</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-100 pb-4 gap-1">
                                    <span className="text-gray-400">Account No:</span>
                                    <span className="font-black text-gray-900">110262417989</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-100 pb-4 gap-1">
                                    <span className="text-gray-400">Bank & Branch:</span>
                                    <span className="font-black text-gray-900">Canara Bank, Narsipatnam Branch</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between pb-2 gap-1">
                                    <span className="text-gray-400">IFSC Code:</span>
                                    <span className="font-black text-gray-900 uppercase">CNRB0006087</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 4. Monthly Sustainer CTA */}
                <section className="py-10 md:py-40 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-2xl md:text-7xl font-heading font-black mb-5 md:mb-10 tracking-tighter leading-tight">Become a Monthly Hero</h2>
                        <p className="text-sm md:text-2xl text-accent-bg/80 mb-8 md:mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                            Reliable change happens through consistent support. Join 500+ monthly donors who scale our impact day by day.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-white text-primary px-8 md:px-16 py-4 md:py-6 rounded-2xl font-black text-base md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 tracking-tight">
                                    Start Monthly Support
                                </button>
                            </Link>
                            <Link href="/contact-us">
                                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 md:px-16 py-4 md:py-6 rounded-2xl font-black text-base md:text-2xl hover:bg-white hover:text-primary transition-all transform hover:-translate-y-2 tracking-tight">
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
