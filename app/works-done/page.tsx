"use strict";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function WorksDone() {
    const projects = [
        { title: "Solar Light Installation", category: "Infrastructure", image: "/project-1.png", village: "Kantamala", date: "Jan 2024" },
        { title: "Digital Literacy Hub", category: "Education", image: "/impact-success.png", village: "Rayagada", date: "Dec 2023" },
        { title: "Clean Water Project", category: "Health", image: "/vision.png", village: "Koraput", date: "Oct 2023" },
        { title: "Primary Health Center", category: "Health", image: "/hero.png", village: "Nuapada", date: "Aug 2023" },
        { title: "Women Entrepreneurship", category: "Economic", image: "/project-1.png", village: "Nabarangpur", date: "May 2023" },
        { title: "Afforestation Drive", category: "Environment", image: "/hero.png", village: "Kalahandi", date: "Mar 2023" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Header */}
                <section className="py-24 md:py-32 bg-white border-b border-gray-100" aria-labelledby="projects-header">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
                            <ScrollReveal direction="left" className="w-full lg:max-w-3xl">
                                <h2 id="projects-header" className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 italic">Project Gallery</h2>
                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-gray-900 leading-[1.1] tracking-tighter italic">
                                    Projects that <br />
                                    <span className="text-primary">Transform Lives.</span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="flex flex-wrap gap-3 md:gap-4" role="tablist" aria-label="Filter projects by category">
                                {["All", "Education", "Health", "Infrastructure"].map((filter, i) => (
                                    <button
                                        key={filter}
                                        role="tab"
                                        aria-selected={filter === "All"}
                                        className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-black transition-all transform hover:scale-105 outline-offset-4 italic tracking-tight ${filter === "All" ? "bg-primary text-white shadow-xl hover:shadow-primary/30" : "bg-light-gray text-gray-500 hover:bg-primary/10"}`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Project Grid */}
                <section className="py-24 md:py-40 bg-white" aria-label="Our Projects">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                            {projects.map((project, idx) => (
                                <ScrollReveal
                                    key={idx}
                                    direction="up"
                                    delay={idx * 0.1}
                                    className="group cursor-pointer focus-within:ring-4 focus-within:ring-primary/20 rounded-[40px] md:rounded-[50px] outline-none"
                                    role="article"
                                    aria-label={`${project.title} in ${project.village}`}
                                >
                                    <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full mb-8 md:mb-10 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700 border-2 md:border-4 border-white">
                                        <Image
                                            src={project.image}
                                            alt=""
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                            priority={idx < 3}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-6 md:top-8 left-6 md:left-8">
                                            <span className="bg-white/95 backdrop-blur-md text-primary text-[10px] md:text-xs font-black px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-2xl uppercase tracking-[0.2em] shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-3 md:space-y-4 px-4">
                                        <div className="flex justify-between items-center text-[10px] md:text-xs font-black uppercase tracking-widest">
                                            <p className="text-primary italic tracking-wide">{project.village}</p>
                                            <p className="text-gray-400">{project.date}</p>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-primary transition-colors italic leading-tight tracking-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Map Preview */}
                <section className="py-24 md:py-40 bg-accent-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="bg-white rounded-[40px] md:rounded-[70px] p-10 md:p-32 text-center shadow-2xl relative overflow-hidden border border-gray-50">
                            <div className="absolute top-0 right-0 p-16 md:p-32 opacity-[0.03] rotate-12 pointer-events-none scale-100 md:scale-150">
                                <span className="text-[10rem] md:text-[25rem]">🗺️</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-heading font-black text-gray-900 mb-8 md:mb-10 italic tracking-tighter italic">Our Footprint is Growing</h2>
                            <p className="text-lg md:text-2xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light italic">
                                From the most isolated hamlets to fast-growing rural hubs, our projects are mapping a new future for India. Join us in expanding this legacy.
                            </p>
                            <button className="w-full sm:w-auto bg-primary text-white px-12 md:px-16 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-2 italic tracking-tight">
                                Explore Full Impact Map
                            </button>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </div>
    );
}
