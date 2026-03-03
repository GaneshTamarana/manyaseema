"use strict";

import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { m } from "framer-motion";

export default function JoinUs() {
    const roles = [
        { title: "Field Volunteer", icon: "🤝", desc: "Work directly in our focus villages on education, health, and solar projects. Ideal for students and gap-year travelers." },
        { title: "Digital Advocate", icon: "🌐", desc: "Help us manage our social media, create content, and run online fundraisers from anywhere in the world." },
        { title: "Professional Mentor", icon: "🎓", desc: "Share your expertise in agri-tech, finance, or health to train our local community leaders." },
        { title: "Event Coordinator", icon: "📅", desc: "Help us organize local awareness drives, charity galas, and volunteer meetups." }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <section className="py-32 bg-accent-bg relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <ScrollReveal direction="up" className="max-w-4xl mx-auto">
                            <h1 className="text-6xl md:text-9xl font-heading font-black text-gray-900 mb-8 leading-tight tracking-tighter italic">
                                Become a <span className="text-primary italic underline underline-offset-[16px] decoration-4 decoration-primary/10">Force</span> for Good.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light italic">
                                You don't need a degree in development to make a difference. You just need passion and the willingness to learn.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute bottom-0 right-0 p-40 opacity-[0.03] rotate-12 pointer-events-none translate-x-1/2 translate-y-1/2 scale-150">
                        <span className="text-[40rem]">✨</span>
                    </div>
                </section>

                {/* Roles Section */}
                <section className="py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Opportunities</h2>
                            <p className="text-4xl md:text-6xl font-heading font-black text-gray-900 italic tracking-tighter">Choose Your Role</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {roles.map((role, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-light-gray p-12 rounded-[50px] border border-transparent hover:border-primary/10 hover:shadow-2xl transition-all group flex flex-col justify-between cursor-default">
                                    <div className="space-y-8">
                                        <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{role.icon}</div>
                                        <h3 className="text-3xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors italic leading-tight">{role.title}</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed font-light italic">{role.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section className="py-40 bg-white border-t border-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="bg-primary text-white rounded-[70px] p-16 md:p-32 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 opacity-[0.05] -rotate-12 pointer-events-none scale-150">
                                <span className="text-[20rem]">📝</span>
                            </div>

                            <div className="relative z-10 space-y-20">
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 italic">Join the Movement</h2>
                                    <p className="text-xl text-accent-bg/80 font-light italic">Tell us about yourself and we'll find the perfect spot for you.</p>
                                </div>

                                <form className="space-y-12" aria-label="Volunteer Application Form">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div className="space-y-4">
                                            <label htmlFor="volunteer-name" className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-bg">Your Name *</label>
                                            <input id="volunteer-name" type="text" required className="w-full bg-white/10 border-b-2 border-white/20 py-5 px-0 text-white placeholder-white/40 focus:border-white transition-all outline-none bg-transparent" placeholder="Full Name" />
                                        </div>
                                        <div className="space-y-4">
                                            <label htmlFor="volunteer-email" className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-bg">Email Address *</label>
                                            <input id="volunteer-email" type="email" required className="w-full bg-white/10 border-b-2 border-white/20 py-5 px-0 text-white placeholder-white/40 focus:border-white transition-all outline-none bg-transparent" placeholder="email@address.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="interest" className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-bg">Interested In *</label>
                                        <select id="interest" required className="w-full bg-transparent border-b-2 border-white/20 py-5 px-0 text-white/50 focus:border-white transition-all outline-none appearance-none">
                                            <option className="text-gray-900" value="">Select an Opportunity</option>
                                            <option className="text-gray-900" value="field">Field Volunteer</option>
                                            <option className="text-gray-900" value="digital">Digital Advocate</option>
                                            <option className="text-gray-900" value="pro">Professional Mentor</option>
                                            <option className="text-gray-900" value="event">Event Coordinator</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="motivation" className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-bg">Why do you want to join MVO? *</label>
                                        <textarea id="motivation" rows={4} required className="w-full bg-white/10 border-b-2 border-white/20 py-5 px-0 text-white placeholder-white/40 focus:border-white transition-all outline-none bg-transparent resize-none" placeholder="Share your motivation..." />
                                    </div>
                                    <div className="flex justify-center pt-10">
                                        <button type="submit" className="bg-white text-primary px-20 py-6 rounded-2xl font-black text-2xl hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 italic focus-visible:ring-4 focus-visible:ring-white/50">
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Corporate Partnerships */}
                <section className="py-24 bg-light-gray">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="bg-white rounded-[50px] p-16 md:p-24 shadow-xl flex flex-col md:flex-row items-center justify-between gap-16">
                            <div className="md:w-2/3">
                                <h3 className="text-4xl font-heading font-black text-gray-900 mb-6 italic leading-tight">Corporate Partnerships</h3>
                                <p className="text-xl text-gray-500 leading-relaxed font-light italic">
                                    Are you looking to align your Corporate Social Responsibility (CSR) goals with high-impact rural development? Let's build a sustainable partnership that changes lives at scale.
                                </p>
                            </div>
                            <div className="md:w-1/3 w-full">
                                <button className="w-full border-4 border-primary text-primary py-6 rounded-2xl font-black text-xl hover:bg-primary hover:text-white transition-all italic shadow-lg">
                                    Contact Partnerships Team
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </div>
    );
}
