"use strict";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* 1. Hero Section */}
                <section className="py-24 md:py-32 relative overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-bg -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            <ScrollReveal direction="left" className="w-full lg:w-1/2">
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter italic">
                                    About <br />
                                    <span className="text-primary">Manyaseema</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light italic">
                                    Manyaseema is a non-profit, non-political, and community-based organization working with tribal and rural communities in the Eastern Ghats of Andhra Pradesh. Established in 1998 and registered in 2001, the organization focuses on sustainable livelihood development, environmental conservation, and empowerment of marginalized communities.                                </p>
                                <Link href="/join-us">
                                    <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 italic tracking-tight">
                                        Join Our Movement
                                    </button>
                                </Link>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[40px] md:rounded-[60px] blur-2xl group-hover:bg-primary/10 transition-all" />
                                <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white shadow-2xl aspect-video md:aspect-auto">
                                    <Image
                                        src="/about-hero.png"
                                        alt="NGO Activity"
                                        width={800}
                                        height={700}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 2. Our Story Section (Timeline) */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-16 md:mb-32">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Our Journey</h2>
                            <p className="text-3xl md:text-6xl font-heading font-black text-gray-900 italic tracking-tighter italic">From a single village to a national movement.</p>
                        </ScrollReveal>

                        <div className="relative space-y-16 md:space-y-32">
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-accent-bg hidden md:block" />

                            {[
                                { year: "2012", title: "The Foundation", desc: "MVO was founded by a group of passionate volunteers with the dream of a self-reliant rural India." },
                                { year: "2015", title: "Early Impact", desc: "Successfully transformed 10 village clusters, implementing digital literacy and basic healthcare." },
                                { year: "2019", title: "Expansion Phase", desc: "Scaled operations across 3 states, partnering with leading CSR wings to enhance infrastructure." },
                                { year: "2024", title: "Current Vision", desc: "Pioneering sustainable agri-tech and women-led cooperatives in over 150 villages." }
                            ].map((milestone, idx) => (
                                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"} flex-col text-center`}>
                                    <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"} className="md:w-1/2 w-full p-8 md:p-12 bg-light-gray rounded-[32px] md:rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all group">
                                        <span className="text-primary font-black text-3xl md:text-4xl mb-4 md:mb-6 block italic">{milestone.year}</span>
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6 italic tracking-tight">{milestone.title}</h3>
                                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light italic">{milestone.desc}</p>
                                    </ScrollReveal>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-xl z-20 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Our Core Values Section */}
                <section className="py-24 md:py-40 bg-accent-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-16 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Values</h2>
                            <p className="text-3xl md:text-6xl font-heading font-black text-gray-900 italic tracking-tighter">Principles that Guide Us</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {[
                                { title: "Integrity", desc: "We maintain the highest ethical standards in every project and partnership.", icon: "💎" },
                                { title: "Community First", desc: "Our initiatives are designed by and for the people we serve.", icon: "🤝" },
                                { title: "Transparency", desc: "Full accountability of funds and impact reports shared openly.", icon: "👁️" },
                                { title: "Sustainability", desc: "We build systems that last beyond our direct intervention.", icon: "🌍" },
                                { title: "Empowerment", desc: "Enabling individuals to become the architects of their own growth.", icon: "🔥" },
                                { title: "Accountability", desc: "Taking ownership of our results and learning from every challenge.", icon: "⚖️" }
                            ].map((value, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all group cursor-default">
                                    <div className="text-4xl md:text-5xl mb-6 md:mb-8 bg-accent-bg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-2xl md:rounded-3xl group-hover:scale-110 transition-transform duration-500">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors italic tracking-tight">{value.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light italic">{value.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Leadership Section */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-16 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">The Team</h2>
                            <p className="text-3xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">Passionate Minds Behind MVO</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                            {[
                                { name: "Arjun Sharma", role: "CEO & Founder", bio: "15+ years in social strategy." },
                                { name: "Priya Lakshmi", role: "Head of Operations", bio: "Expert in community mobilization." },
                                { name: "Rahul Verma", role: "Sustainability Lead", bio: "Focusing on agri-tech innovation." },
                                { name: "Ananya Rao", role: "Volunteer Coord.", bio: "Building MVO's global network." }
                            ].map((member, i) => (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1} className="text-center group">
                                    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 md:mb-8">
                                        <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-xl group-hover:bg-primary/20 transition-all duration-700" />
                                        <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl bg-gray-50 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                            <span className="text-6xl md:text-7xl opacity-30">👤</span>
                                        </div>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-2 italic">{member.name}</h4>
                                    <p className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">{member.role}</p>
                                    <p className="text-gray-500 text-sm italic font-light px-4">{member.bio}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Impact Philosophy Section */}
                <section className="py-24 md:py-40 bg-gradient-to-b from-white to-accent-bg relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
                        <span className="text-[20rem] md:text-[40rem] font-serif">"</span>
                    </div>
                    <ScrollReveal direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <p className="text-3xl md:text-7xl font-heading font-black text-gray-900 leading-[1.2] italic tracking-tighter">
                            "True development begins when communities become <span className="text-primary underline underline-offset-[8px] md:underline-offset-[12px] decoration-4 decoration-primary/20">self-reliant.</span>"
                        </p>
                    </ScrollReveal>
                </section>

                {/* 6. Transparency Section */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                            <ScrollReveal direction="left" className="space-y-10 md:space-y-12">
                                <div>
                                    <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Trust</h2>
                                    <h3 className="text-3xl md:text-5xl font-heading font-black text-gray-900 italic tracking-tighter">Governance & Compliance</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                                    <div className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-light-gray border border-gray-50">
                                        <h4 className="font-black text-lg md:text-xl mb-2 italic">NGO Registration</h4>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium">Reg No: 1234/567-XYZ</p>
                                    </div>
                                    <div className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-light-gray border border-gray-50">
                                        <h4 className="font-black text-lg md:text-xl mb-2 italic">FCRA Compliant</h4>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium">Valid until 2028</p>
                                    </div>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic font-light">
                                    We adhere to international standards of NGO governance, ensuring every contribution is handled with extreme ethical care.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="bg-primary/5 rounded-[40px] md:rounded-[60px] p-10 md:p-16 flex flex-col justify-center space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-[0.05] rotate-12">
                                    <span className="text-7xl md:text-9xl">📄</span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 italic leading-tight tracking-tight">Ready to see our impact?</h4>
                                <div className="flex flex-col space-y-4 md:space-y-6">
                                    <button className="bg-primary text-white w-full py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-primary-hover shadow-2xl flex items-center justify-center space-x-4 group italic">
                                        <span>Download Annual Report 2024</span>
                                        <svg className="w-5 md:w-6 h-5 md:h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2.5" /></svg>
                                    </button>
                                    <button className="border-2 border-primary text-primary w-full py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-primary hover:text-white transition-all shadow-lg italic">
                                        View Impact Report 2023
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 7. CTA Section */}
                <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                        <h2 className="text-4xl md:text-7xl font-heading font-black mb-10 italic tracking-tighter leading-tight">Be Part of the Change</h2>
                        <p className="text-lg md:text-2xl text-accent-bg/80 mb-12 md:mb-16 max-w-3xl mx-auto font-light italic">
                            There's a place for you in our mission to transform India's rural heartlands. Join us today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10">
                            <Link href="/join-us" className="w-full sm:w-auto">
                                <button className="w-full bg-white text-primary px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 italic tracking-tight">
                                    Volunteer Now
                                </button>
                            </Link>
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <button className="w-full bg-transparent border-2 border-white text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-white hover:text-primary transition-all transform hover:-translate-y-2 italic tracking-tight">
                                    Partner With Us
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
