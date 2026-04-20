"use strict";

import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-8 md:py-32 bg-light-gray relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal direction="up" className="text-center">
                            <h1 className="text-3xl md:text-9xl font-heading font-black text-gray-900 mb-4 md:mb-8 leading-tight tracking-tighter">
                                Get in <span className="text-primary underline underline-offset-8 md:underline-offset-[16px] decoration-4 decoration-primary/10">Touch</span>.
                            </h1>
                            <p className="text-sm md:text-2xl text-gray-500 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
                                Have a question, feedback, or want to explore an idea? We're here to listen and collaborate.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute top-0 left-0 p-40 opacity-[0.02] pointer-events-none translate-x-[-20%] translate-y-[-20%] scale-150 hidden md:block">
                        <span className="text-[30rem]">📞</span>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32">
                            {/* Contact Form */}
                            <ScrollReveal direction="left" className="space-y-8 md:space-y-16">
                                <div>
                                    <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight">Send a Message</h2>
                                    <p className="text-gray-500 font-light text-sm">Fields marked with * are required.</p>
                                </div>

                                <form className="space-y-6 md:space-y-10" aria-label="Contact Information">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                                        <div className="space-y-3">
                                            <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-primary">Full Name *</label>
                                            <input id="full-name" type="text" required className="w-full bg-light-gray border-none rounded-2xl py-4 px-6 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary">Email Address *</label>
                                            <input id="email" type="email" required className="w-full bg-light-gray border-none rounded-2xl py-4 px-6 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-primary">Subject</label>
                                        <select id="subject" className="w-full bg-light-gray border-none rounded-2xl py-4 px-6 text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none text-sm">
                                            <option>General Inquiry</option>
                                            <option>Donation Help</option>
                                            <option>Volunteer Question</option>
                                            <option>Corporate Partnership</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary">Message *</label>
                                        <textarea id="message" rows={5} required className="w-full bg-light-gray border-none rounded-2xl py-4 px-6 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-sm" placeholder="Tell us how we can help..." />
                                    </div>
                                    <button type="submit" className="bg-primary text-white w-full py-4 md:py-6 rounded-2xl font-black text-base md:text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 tracking-tight focus-visible:ring-4 focus-visible:ring-primary/30">
                                        Send Message
                                    </button>
                                </form>
                            </ScrollReveal>

                            {/* Office Details */}
                            <ScrollReveal direction="right" className="space-y-6 md:space-y-16">
                                <div className="bg-accent-bg rounded-[24px] md:rounded-[60px] p-6 md:p-24 space-y-8 md:space-y-16 border border-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-45 group-hover:rotate-90 transition-transform duration-1000 hidden md:block">
                                        <span className="text-9xl">🏛️</span>
                                    </div>

                                    <div className="space-y-6 md:space-y-10">
                                        <h3 className="text-lg md:text-3xl font-black text-gray-900 tracking-tight underline underline-offset-8 decoration-4 decoration-primary/10">Main Office</h3>
                                        <div className="space-y-5 md:space-y-8">
                                            <div className="flex items-start space-x-4 md:space-x-8 group">
                                                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-lg md:text-2xl shadow-sm group-hover:scale-110 transition-transform shrink-0">📍</div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Location</p>
                                                    <p className="text-sm md:text-xl text-gray-700 font-light">2-112, Devangula Street, Rolugunta Village, Rolugunta Mandal, Anakapalli Dist., Andhrapradesh, 531114.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4 md:space-x-8 group">
                                                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-lg md:text-2xl shadow-sm group-hover:scale-110 transition-transform shrink-0">📞</div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Phone</p>
                                                    <p className="text-sm md:text-xl text-gray-700 font-light">+91 9441919864</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4 md:space-x-8 group">
                                                <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-lg md:text-2xl shadow-sm group-hover:scale-110 transition-transform shrink-0">✉️</div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Email</p>
                                                    <p className="text-sm md:text-xl text-gray-700 font-light">info@manyaseema.ngo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 md:pt-16 border-t border-white/50 space-y-4 md:space-y-10">
                                        <h4 className="text-base md:text-xl font-black text-gray-900 tracking-tight">Social Connect</h4>
                                        <div className="flex space-x-3 md:space-x-6">
                                            {["FB", "TI", "LI", "IG"].map(s => (
                                                <div key={s} className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-[10px] text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:-translate-y-2">
                                                    {s}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Google Maps Embed */}
                                <div className="h-56 md:h-96 rounded-[24px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-white shadow-2xl">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d579.100171266212!2d82.66699981740241!3d17.71546949974552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1776611138168!5m2!1sen!2sin" width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Manyaseema Office Location"
                                    />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
