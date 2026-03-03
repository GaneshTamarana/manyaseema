"use strict";

import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function MediaCentre() {
    const news = [
        { title: "MVO Receives National Impact Award", date: "Feb 28, 2024", category: "Awards", tag: "Award" },
        { title: "100th Village Cluster Transformation", date: "Jan 15, 2024", category: "Milestone", tag: "Success" },
        { title: "New Partnerships for Rural Health", date: "Dec 10, 2023", category: "Announcements", tag: "Partnership" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero */}
                <section className="py-32 bg-light-gray relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal direction="up" className="text-center">
                            <h1 className="text-6xl md:text-9xl font-heading font-black text-gray-900 mb-8 leading-tight tracking-tighter italic">
                                The <span className="text-primary underline underline-offset-[16px] decoration-4 decoration-primary/10">Latest</span> Updates.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light italic">
                                Follow our journey through stories of resilience, milestones of growth, and the latest news from the heart of rural India.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute top-0 right-0 p-40 opacity-[0.02] pointer-events-none grayscale translate-x-1/2 -translate-y-1/2 scale-150">
                        <span className="text-[30rem]">🗞️</span>
                    </div>
                </section>

                {/* Latest News */}
                <section className="py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-24 flex items-center justify-between">
                            <ScrollReveal direction="left">
                                <h2 className="text-4xl font-heading font-black text-gray-900 italic tracking-tighter">Featured Headlines</h2>
                            </ScrollReveal>
                            <div className="hidden md:block w-1/2 h-[2px] bg-gray-100" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {news.map((item, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-12 rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between h-[450px]">
                                    <div className="space-y-8">
                                        <span className="bg-primary/5 text-primary text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] group-hover:bg-primary group-hover:text-white transition-all">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-3xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors leading-tight italic">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.date}</p>
                                        <button className="text-primary font-black hover:translate-x-2 transition-transform">Read →</button>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Media Gallery */}
                <section className="py-40 bg-accent-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-32">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Gallery</h2>
                            <p className="text-4xl md:text-6xl font-heading font-black text-gray-900 italic tracking-tighter">Moments of Impact</p>
                        </ScrollReveal>

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                            {[
                                { src: "/media-event.png", h: 400 },
                                { src: "/impact-success.png", h: 600 },
                                { src: "/program-training.png", h: 400 },
                                { src: "/hero.png", h: 500 },
                                { src: "/vision.png", h: 400 },
                                { src: "/about-hero.png", h: 600 }
                            ].map((img, i) => (
                                <ScrollReveal key={i} direction="up" delay={i * 0.05} className="break-inside-avoid relative group rounded-[40px] overflow-hidden shadow-xl border-4 border-white cursor-pointer transition-all hover:-rotate-1">
                                    <img
                                        src={img.src}
                                        alt="Gallery item"
                                        className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        style={{ height: img.h }}
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="bg-white text-primary px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl scale-50 group-hover:scale-100 transition-transform">Expand View</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press Contact */}
                <section className="py-32 bg-white text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="space-y-10">
                            <div className="text-6xl mb-8">📢</div>
                            <h3 className="text-4xl font-heading font-black text-gray-900 italic">Press & Media Inquiries</h3>
                            <p className="text-gray-500 font-light text-xl leading-relaxed italic">
                                Are you a journalist or storyteller? We'd love to share our data and stories with you. Reach out to our media relations team.
                            </p>
                            <div className="pt-8">
                                <a href="mailto:media@mvo-org.in" className="text-2xl font-black text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-2 italic">media@mvo-org.in</a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </div>
    );
}
