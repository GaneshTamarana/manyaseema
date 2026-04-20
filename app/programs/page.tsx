"use strict";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Programs() {
    const programs = [
        {
            title: "MFP Value Addition",
            desc: "Training tribal communities in processing and value addition of Minor Forest Produce — tamarind, honey, amla, adda leaf products, and turmeric — to improve incomes and market access.",
            icon: "🍯",
            features: ["Tamarind & honey processing", "Market linkages", "Quality grading & packaging"]
        },
        {
            title: "Farmer Producer Organizations",
            desc: "Formation of Sugumuna FPO and Arunatara FPO with NABARD support to strengthen collective marketing, improve bargaining power, and expand market access for tribal farmers.",
            icon: "🌾",
            features: ["Sugumuna FPO", "Arunatara FPO", "NABARD partnership"]
        },
        {
            title: "Van Dhan Vikas Kendras",
            desc: "Community groups formed to strengthen collection, primary processing, and marketing of forest produce under the Van Dhan scheme, improving tribal livelihoods at the grassroot level.",
            icon: "🌳",
            features: ["Forest produce collection", "Primary processing units", "Community ownership"]
        },
        {
            title: "Biodiversity Conservation",
            desc: "Documentation and conservation of biodiversity in tribal areas of the Eastern Ghats, restoring forests, water bodies, and natural ecosystems through community-led initiatives.",
            icon: "🦋",
            features: ["Biodiversity documentation", "Ecosystem restoration", "Community forest management"]
        },
        {
            title: "Livelihood & Skill Development",
            desc: "Vocational and skills training programs for tribal youth and women including rehabilitation of Podu cultivators into sustainable livelihoods through check dams and small enterprises.",
            icon: "🤝",
            features: ["Check dam construction", "Vocational training", "Women-led enterprises"]
        },
        {
            title: "Youth & Child Development",
            desc: "Child rights protection, youth capacity-building, and educational support programs implemented in partnership with government and development organizations across tribal villages.",
            icon: "📚",
            features: ["Child rights protection", "Youth capacity building", "Educational support"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero */}
                <section className="pt-20 pb-8 md:py-40 bg-accent-bg overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                            <ScrollReveal direction="left" className="w-full lg:w-1/2">
                                <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-6">Our Initiatives</h2>
                                <h1 className="text-2xl sm:text-5xl md:text-8xl font-heading font-black text-gray-900 leading-[1.1] mb-5 md:mb-10 tracking-tighter">
                                    Programs Built for <br />
                                    <span className="text-primary">Lasting Impact.</span>
                                </h1>
                                <p className="text-sm md:text-2xl text-gray-600 mb-6 md:mb-12 leading-relaxed font-light">
                                    We don't believe in one-size-fits-all solutions. Our programs are tailored to the unique economic and social landscape of each community.
                                </p>
                                <div className="flex flex-row space-x-6 md:space-x-12">
                                    <div className="flex flex-col">
                                        <span className="text-2xl md:text-5xl font-black font-heading text-primary">12+</span>
                                        <span className="text-[9px] md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Active Programs</span>
                                    </div>
                                    <div className="w-[1px] h-10 md:h-16 bg-gray-200" />
                                    <div className="flex flex-col">
                                        <span className="text-2xl md:text-5xl font-black font-heading text-primary">85%</span>
                                        <span className="text-[9px] md:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Sustainability Rate</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[24px] md:rounded-[70px] blur-3xl" />
                                <div className="rounded-[20px] md:rounded-[60px] overflow-hidden shadow-2xl transition-transform duration-1000 group-hover:rotate-1 aspect-video md:aspect-auto">
                                    <Image
                                        src="/program-hero.jpeg"
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
                <section className="py-10 md:py-40 bg-white" aria-labelledby="programs-grid-title">
                    <h2 id="programs-grid-title" className="sr-only">Our Core Programs</h2>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            {programs.map((program, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.15} className="flex flex-col bg-light-gray rounded-[20px] md:rounded-[50px] overflow-hidden group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-primary/5">
                                    <div className="p-5 md:p-8 space-y-3 md:space-y-4">
                                        <div className="text-3xl md:text-5xl group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{program.icon}</div>
                                        <h3 className="text-lg md:text-2xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors leading-tight tracking-tight">{program.title}</h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">{program.desc}</p>
                                        <ul className="space-y-1.5 md:space-y-2" aria-label={`${program.title} Features`}>
                                            {program.features.map((feature, fidx) => (
                                                <li key={fidx} className="flex items-center space-x-2 text-xs md:text-sm font-black text-gray-700 uppercase tracking-wide">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" aria-hidden="true" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-10 md:py-40 bg-primary text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <h2 className="text-2xl md:text-7xl font-heading font-black mb-5 md:mb-10 tracking-tighter leading-tight">Support a Program</h2>
                        <p className="text-sm md:text-2xl text-accent-bg/80 mb-8 md:mb-16 font-light leading-relaxed max-w-2xl mx-auto">
                            Sponsor an MFP processing unit or support a Van Dhan Vikas Kendra today. Every contribution is a seed for generational change.
                        </p>
                        <Link href="/support-us">
                            <button className="w-full sm:w-auto bg-white text-primary px-8 md:px-16 py-4 md:py-6 rounded-2xl font-black text-base md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 tracking-tight">
                                Become a Program Sponsor
                            </button>
                        </Link>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
