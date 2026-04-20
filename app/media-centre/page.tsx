import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function MediaCentre() {
    const news = [
        { title: "Manyaseema Receives National Impact Award", excerpt: "Manyaseema was honoured at the 7th BNO Awards for outstanding contribution to rural community development and environmental conservation in Andhra Pradesh.", date: "Feb 28, 2024", tag: "Award" },
        { title: "100th Village Cluster Transformation", excerpt: "A landmark milestone as MVO completes its 100th village cluster program, directly improving livelihoods for over 2,000 tribal families across the Eastern Ghats.", date: "Jan 15, 2024", tag: "Success" },
        { title: "New Partnerships for Rural Health", excerpt: "MVO signs MoUs with two regional health networks to expand mobile clinic coverage, bringing primary healthcare access to 40 previously underserved villages.", date: "Dec 10, 2023", tag: "Partnership" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* Hero */}
                <section className="pt-20 pb-8 md:py-32 bg-light-gray relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <ScrollReveal direction="up" className="text-center">
                            <h1 className="text-3xl md:text-9xl font-heading font-black text-gray-900 mb-4 md:mb-8 leading-tight tracking-tighter">
                                The <span className="text-primary underline underline-offset-8 md:underline-offset-[16px] decoration-4 decoration-primary/10">Latest</span> Updates.
                            </h1>
                            <p className="text-sm md:text-2xl text-gray-500 max-w-3xl mx-auto mb-6 md:mb-16 leading-relaxed font-light">
                                Follow our journey through stories of resilience, milestones of growth, and the latest news from the heart of rural India.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="absolute top-0 right-0 p-40 opacity-[0.02] pointer-events-none grayscale translate-x-1/2 -translate-y-1/2 scale-150 hidden md:block">
                        <span className="text-[30rem]">🗞️</span>
                    </div>
                </section>

                {/* Latest News */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 md:mb-24 flex items-center justify-between">
                            <ScrollReveal direction="left">
                                <h2 className="text-xl md:text-4xl font-heading font-black text-gray-900 tracking-tighter">Featured Headlines</h2>
                            </ScrollReveal>
                            <div className="hidden md:block w-1/2 h-[2px] bg-gray-100" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12">
                            {news.map((item, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-6 md:p-12 rounded-[20px] md:rounded-[50px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between">
                                    <div className="space-y-4 md:space-y-8">
                                        <span className="bg-primary/5 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.25em] group-hover:bg-primary group-hover:text-white transition-all inline-block">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-lg md:text-3xl font-heading font-black text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs md:text-base text-gray-500 font-light leading-relaxed">{item.excerpt}</p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-50 pt-5 md:pt-8 mt-5">
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.date}</p>
                                        <button className="text-primary font-black hover:translate-x-2 transition-transform text-sm">Read →</button>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Media Gallery */}
                <section className="py-10 md:py-40 bg-accent-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-32">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Gallery</h2>
                            <p className="text-xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">Moments of Impact</p>
                        </ScrollReveal>

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 md:gap-10 space-y-5 md:space-y-10">
                            {[
                                { src: "clippings/clip-1.jpeg", h: 280 },
                                { src: "clippings/clip-2.jpeg", h: 380 },
                                { src: "clippings/clip-7.jpeg", h: 280 },
                                { src: "clippings/clip-4.jpeg", h: 320 },
                                { src: "clippings/clip-7.jpeg", h: 280 },
                                { src: "clippings/clip-12.jpeg", h: 380 },
                                { src: "clippings/clip-10.jpeg", h: 320 },
                                { src: "clippings/clip-8.jpeg", h: 280 },
                                { src: "clippings/clip-9.jpeg", h: 380 },
                            ].map((img, i) => (
                                <ScrollReveal key={i} direction="up" delay={i * 0.05} className="break-inside-avoid relative group rounded-[40px] overflow-hidden shadow-xl border-4 border-white cursor-pointer transition-all hover:-rotate-1">
                                    <img
                                        src={img.src}
                                        alt="Gallery item"
                                        className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        style={{ height: img.h }}
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="bg-white text-primary px-6 py-2 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl scale-50 group-hover:scale-100 transition-transform">Expand View</span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press Contact */}
                <section className="py-12 md:py-32 bg-white text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="space-y-5 md:space-y-10">
                            <div className="text-4xl md:text-6xl mb-4">📢</div>
                            <h3 className="text-xl md:text-4xl font-heading font-black text-gray-900">Press & Media Inquiries</h3>
                            <p className="text-gray-500 font-light text-sm md:text-xl leading-relaxed">
                                Are you a journalist or storyteller? We'd love to share our data and stories with you. Reach out to our media relations team.
                            </p>
                            <div className="pt-4 md:pt-8">
                                <a href="mailto:info@manyaseema.ngo" className="text-base md:text-2xl font-black text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-2">info@manyaseema.ngo</a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
        </div>
    );
}
