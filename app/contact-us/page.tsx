"use strict";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <section className="py-32 bg-light-gray relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal direction="up" className="text-center">
                            <h1 className="text-6xl md:text-9xl font-heading font-black text-gray-900 mb-8 leading-tight tracking-tighter italic">
                                Get in <span className="text-primary underline underline-offset-[16px] decoration-4 decoration-primary/10">Touch</span>.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-8 leading-relaxed font-light italic">
                                Have a question, feedback, or want to explore an idea? We're here to listen and collaborate.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute top-0 left-0 p-40 opacity-[0.02] pointer-events-none translate-x-[-20%] translate-y-[-20%] scale-150">
                        <span className="text-[30rem]">📞</span>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                            {/* Contact Form */}
                            <ScrollReveal direction="left" className="space-y-16">
                                <div>
                                    <h2 className="text-3xl font-black text-gray-900 mb-6 italic tracking-tight">Send a Message</h2>
                                    <p className="text-gray-500 font-light italic">Fields marked with * are required.</p>
                                </div>

                                <form className="space-y-10" aria-label="Contact Information">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-primary">Full Name *</label>
                                            <input id="full-name" type="text" required className="w-full bg-light-gray border-none rounded-2xl py-5 px-8 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-4">
                                            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary">Email Address *</label>
                                            <input id="email" type="email" required className="w-full bg-light-gray border-none rounded-2xl py-5 px-8 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-primary">Subject</label>
                                        <select id="subject" className="w-full bg-light-gray border-none rounded-2xl py-5 px-8 text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Donation Help</option>
                                            <option>Volunteer Question</option>
                                            <option>Corporate Partnership</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary">Message *</label>
                                        <textarea id="message" rows={6} required className="w-full bg-light-gray border-none rounded-2xl py-5 px-8 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="Tell us how we can help..." />
                                    </div>
                                    <button type="submit" className="bg-primary text-white w-full py-6 rounded-2xl font-black text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 italic tracking-tight focus-visible:ring-4 focus-visible:ring-primary/30">
                                        Send Message
                                    </button>
                                </form>
                            </ScrollReveal>

                            {/* Office Details */}
                            <ScrollReveal direction="right" className="space-y-16">
                                <div className="bg-accent-bg rounded-[60px] p-16 md:p-24 space-y-16 border border-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-45 group-hover:rotate-90 transition-transform duration-1000">
                                        <span className="text-9xl">🏛️</span>
                                    </div>

                                    <div className="space-y-10">
                                        <h3 className="text-3xl font-black text-gray-900 italic tracking-tight underline underline-offset-[12px] decoration-4 decoration-primary/10">Main Office</h3>
                                        <div className="space-y-8">
                                            <div className="flex items-start space-x-8 group">
                                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">📍</div>
                                                <div className="space-y-2">
                                                    <p className="text-xs font-black uppercase tracking-widest text-primary">Location</p>
                                                    <p className="text-xl text-gray-700 font-light italic">2-112, Devangula Street, Rolugunta Village, Rolugunta Mandal, Anakapalli Dist., Andhrapradesh, 531114.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-8 group">
                                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">📞</div>
                                                <div className="space-y-2">
                                                    <p className="text-xs font-black uppercase tracking-widest text-primary">Phone</p>
                                                    <p className="text-xl text-gray-700 font-light italic">+91 9441919864</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-8 group">
                                                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">✉️</div>
                                                <div className="space-y-2">
                                                    <p className="text-xs font-black uppercase tracking-widest text-primary">Email</p>
                                                    <p className="text-xl text-gray-700 font-light italic">manyaseema.ngo@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-16 border-t border-white/50 space-y-10">
                                        <h4 className="text-xl font-black text-gray-900 italic tracking-tight">Social Connect</h4>
                                        <div className="flex space-x-6">
                                            {["FB", "TI", "LI", "IG"].map(s => (
                                                <div key={s} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-[10px] text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:-translate-y-2">
                                                    {s}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="h-96 rounded-[60px] bg-light-gray flex items-center justify-center overflow-hidden border-8 border-white shadow-2xl relative group">
                                    <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
                                        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Map" />
                                    </div>
                                    <div className="relative z-10 bg-white/90 backdrop-blur-md px-10 py-5 rounded-2xl shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <p className="text-primary font-black uppercase tracking-widest text-xs italic">View on Google Maps</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
