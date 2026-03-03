"use strict";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

export const metadata: Metadata = {
    title: "Our Impact & Success Stories | Rural NGO Andhra Pradesh",
    description: "Explore the measurable impact of Manyaseema Volunteer Organization (MVO). From education to health, see how we are transforming rural lives in Andhra Pradesh.",
};

export default function Impact() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* 1. Hero Section */}
                <section className="py-24 md:py-32 bg-light-gray relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal direction="up" distance={40}>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tighter italic">
                                Making a <span className="text-primary">Measurable Difference.</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light italic">
                                Our impact is defined by the stories of the individuals we serve and the sustainable systems we create. Explore the data behind our mission.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-primary/10 blur-3xl opacity-50" />
                </section>

                {/* 2. Key Statistics Dashboard */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                            {[
                                { label: "Village Clusters", val: 150, suffix: "+", sub: "Across 4 regions", icon: "🏘️" },
                                { label: "Direct Beneficiaries", val: 250, suffix: "K+", sub: "Families impacted", icon: "👨‍👩‍👧‍👦" },
                                { label: "Students Enrolled", val: 45, suffix: "K+", sub: "In MVO schools", icon: "📚" },
                                { label: "Women Empowered", val: 85, suffix: "K+", sub: "In local collectives", icon: "🚺" }
                            ].map((stat, i) => (
                                <ScrollReveal key={i} direction="up" delay={i * 0.15} className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                                    <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-3 tracking-tight tabular-nums italic">
                                        <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-lg md:text-xl font-black text-gray-900 mb-2 italic tracking-tight">{stat.label}</p>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium italic">{stat.sub}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Featured Success Story */}
                <section className="py-24 md:py-40 bg-accent-bg relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <ScrollReveal direction="left" className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-primary/10 rounded-[40px] md:rounded-[50px] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                                <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl aspect-video md:aspect-auto">
                                    <Image
                                        src="/impact-success.png"
                                        alt="Success Story"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="w-full lg:w-1/2">
                                <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Success Story</h2>
                                <h3 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mb-8 md:mb-10 leading-tight italic tracking-tighter italic">
                                    "Education gave me the wings I didn't know I had."
                                </h3>
                                <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed italic font-light">
                                    Meet Meera, a 14-year-old from a remote village. Through MVO's Digital Literacy Program, she learned to code and is now building an app to help local farmers track weather patterns.
                                </p>
                                <Link href="/works-done" className="text-primary font-black inline-flex items-center space-x-3 border-b-2 border-primary/20 pb-2 hover:border-primary transition-all text-lg italic tracking-tight">
                                    <span>Explore more stories</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 4. SDG Alignment Section */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-16 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Our Commitment</h2>
                            <p className="text-3xl md:text-6xl font-heading font-black text-gray-900 italic tracking-tighter italic">Aligned with Global Goals</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                            {[
                                { n: "1", t: "No Poverty", c: "bg-[#E5243B]" },
                                { n: "4", t: "Quality Education", c: "bg-[#C5192D]" },
                                { n: "5", t: "Gender Equality", c: "bg-[#FF3A21]" },
                                { n: "6", t: "Clean Water", c: "bg-[#26BDE2]" },
                                { n: "8", t: "Decent Work", c: "bg-[#A21942]" },
                                { n: "17", t: "Partnerships", c: "bg-[#19486A]" }
                            ].map((goal, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className={`${goal.c} p-6 md:p-8 rounded-[24px] md:rounded-[32px] text-white aspect-square flex flex-col justify-between hover:scale-110 hover:-rotate-2 transition-all cursor-pointer shadow-xl relative overflow-hidden group`}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    <span className="text-2xl md:text-3xl font-black font-heading relative z-10">{goal.n}</span>
                                    <span className="text-[10px] md:text-sm font-black leading-tight relative z-10 uppercase tracking-tighter">{goal.t}</span>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Reports Section */}
                <section className="py-24 md:py-32 bg-light-gray">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-24 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 border border-gray-50 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                            <div className="w-full lg:w-3/5 text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-6 italic leading-tight tracking-tighter italic">Rooted in Transparency.</h3>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic">
                                    We believe that our stakeholders deserve to know exactly how their contributions are driving change. Download our latest impact reports to see our detailed financials and outcomes.
                                </p>
                            </div>
                            <div className="w-full lg:w-2/5 flex flex-col space-y-4 md:space-y-6">
                                <button className="bg-primary text-white py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-primary-hover shadow-xl transition-all transform hover:-translate-y-1 italic">
                                    2024 Impact Report (PDF)
                                </button>
                                <button className="border-2 border-primary text-primary py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-primary hover:text-white transition-all shadow-lg transform hover:-translate-y-1 italic">
                                    Audited Financials
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* 6. CTA Section */}
                <section className="py-24 md:py-40 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 italic tracking-tighter leading-tight">Ready to multiply impact?</h2>
                        <p className="text-lg md:text-2xl text-accent-bg/80 mb-12 md:mb-16 font-light leading-relaxed italic">
                            Your support directly translates into tangible change. Help us reach the next 150 villages and empower 1 million lives by 2030.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10">
                            <Link href="/join-us" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto bg-white text-primary px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 italic tracking-tight">
                                    Donate Now
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-white hover:text-primary transition-all transform hover:-translate-y-2 italic tracking-tight">
                                Start a Fundraiser
                            </button>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
