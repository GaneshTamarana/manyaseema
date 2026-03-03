"use strict";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Programs() {
    const programs = [
        {
            title: "Digital Shiksha",
            desc: "Bridging the digital divide by setting up solar-powered computer labs and providing digital literacy training to rural youth.",
            icon: "💻",
            features: ["Solar-powered labs", "Certified instructors", "Job placement support"]
        },
        {
            title: "Matri Shakti",
            desc: "Empowering women through self-help groups (SHGs), vocational training, and financial literacy workshops.",
            icon: "👩‍🌾",
            features: ["Micro-finance access", "Market linkages", "Leadership mentoring"]
        },
        {
            title: "Gram Swasthya",
            desc: "Bringing essential healthcare to the doorstep including mobile clinics, hygiene awareness, and maternal health support.",
            icon: "🏥",
            features: ["Mobile clinics", "Sanitation drives", "Nutritional support"]
        },
        {
            title: "Krishi Unnati",
            desc: "Promoting sustainable agriculture through modern techniques, organic farming, and efficient water management.",
            icon: "🌾",
            features: ["Drip irrigation", "Organic certification", "Soil health testing"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero */}
                <section className="py-24 md:py-40 bg-accent-bg overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                            <ScrollReveal direction="left" className="w-full lg:w-1/2">
                                <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6">Our Initiatives</h2>
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-gray-900 leading-[1.1] mb-8 md:mb-10 tracking-tighter italic">
                                    Programs Built for <br />
                                    <span className="text-primary">Lasting Impact.</span>
                                </h1>
                                <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed font-light italic">
                                    We don't believe in one-size-fits-all solutions. Our programs are tailored to the unique economic and social landscape of each community.
                                </p>
                                <div className="flex sm:flex-row space-x-8 md:space-x-12">
                                    <div className="flex flex-col">
                                        <span className="text-4xl md:text-5xl font-black font-heading text-primary italic">12+</span>
                                        <span className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Active Programs</span>
                                    </div>
                                    <div className="w-[1px] h-12 md:h-16 bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span className="text-4xl md:text-5xl font-black font-heading text-primary italic">85%</span>
                                        <span className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Sustainability Rate</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[40px] md:rounded-[70px] blur-3xl" />
                                <div className="rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:rotate-1 aspect-video md:aspect-auto">
                                    <Image
                                        src="/program-training.png"
                                        alt="Training Program"
                                        width={800}
                                        height={700}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000"
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Programs Grid */}
                <section className="py-24 md:py-40 bg-white" aria-labelledby="programs-grid-title">
                    <h2 id="programs-grid-title" className="sr-only">Our Core Programs</h2>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                            {programs.map((program, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.15} className="flex flex-col md:flex-row bg-light-gray rounded-[32px] md:rounded-[50px] overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-primary/5 focus-within:ring-4 focus-within:ring-primary/20">
                                    <div className="p-8 md:p-16 md:w-2/3 space-y-6 md:space-y-8">
                                        <div className="text-5xl md:text-6xl mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{program.icon}</div>
                                        <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors italic leading-tight tracking-tight">{program.title}</h3>
                                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light italic">{program.desc}</p>
                                        <ul className="space-y-3 md:space-y-4" aria-label={`${program.title} Features`}>
                                            {program.features.map((feature, fidx) => (
                                                <li key={fidx} className="flex items-center space-x-3 md:space-x-4 text-[10px] md:text-sm font-black text-gray-700 uppercase tracking-wide italic">
                                                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" aria-hidden="true" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-primary/5 md:w-1/3 flex items-center justify-center p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/20">
                                        <button
                                            aria-label={`View details for ${program.title} program`}
                                            className="bg-white text-primary w-full py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all shadow-xl group-hover:scale-105 outline-offset-4 focus-visible:bg-primary focus-visible:text-white italic"
                                        >
                                            View Hub
                                        </button>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 md:py-40 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-8 md:mb-10 italic tracking-tighter leading-tight">Support a Program</h2>
                        <p className="text-lg md:text-2xl text-accent-bg/80 mb-12 md:mb-16 font-light leading-relaxed max-w-2xl mx-auto italic">
                            Sponsor a Digital Shiksha lab or a Matri Shakti collective today. Every contribution is a seed for generational change.
                        </p>
                        <button className="w-full sm:w-auto bg-white text-primary px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 italic tracking-tight">
                            Become a Program Sponsor
                        </button>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
