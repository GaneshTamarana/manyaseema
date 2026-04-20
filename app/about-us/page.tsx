"use strict";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <main>
                {/* 1. Hero Section */}
                <section className="pt-20 pb-8 md:py-32 relative overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-bg -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
                            <ScrollReveal direction="left" className="w-full lg:w-1/2">
                                <h1 className="text-2xl sm:text-5xl md:text-8xl font-heading font-black text-gray-900 leading-[1.1] mb-5 tracking-tighter">
                                    About <br />
                                    <span className="text-primary">Manyaseema</span>
                                </h1>
                                <p className="text-sm md:text-xl text-gray-600 mb-7 leading-relaxed max-w-xl font-light">
                                    Manyaseema is a non-profit, non-political, and community-based organization working with tribal and rural communities in the Eastern Ghats of Andhra Pradesh. Established in 1998 and registered in 2001, the organization focuses on sustainable livelihood development, environmental conservation, and empowerment of marginalized communities.
                                </p>
                                <Link href="/join-us">
                                    <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-black text-base md:text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 tracking-tight">
                                        Join Our Movement
                                    </button>
                                </Link>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[24px] md:rounded-[60px] blur-2xl group-hover:bg-primary/10 transition-all" />
                                <div className="relative rounded-[20px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl aspect-video md:aspect-auto">
                                    <Image
                                        src="/about-hero.jpeg"
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

                {/* 2. Timeline Section */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-32">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Journey</h2>
                            <p className="text-xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">From a single village to a national movement.</p>
                        </ScrollReveal>

                        <div className="relative space-y-8 md:space-y-32">
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-accent-bg hidden md:block" />

                            {[
                                { year: "2001", title: "The Foundation", desc: "Manyaseema was formally established and registered to work with tribal communities in the Eastern Ghats of Andhra Pradesh." },
                                { year: "2001-2004", title: "Community Forest Management (CFM)", desc: "Implemented community forest management initiatives with support from the World Bank focusing on plantation, livelihood training, and sustainable forest use." },
                                { year: "2003-2006", title: "Rehabilitation Action Plan (RAP)", desc: "Supported tribal communities shifting from Podu cultivation to sustainable livelihoods through check dam construction and small livelihood enterprises." },
                                { year: "2008–2010", title: "Youth & Child Development Programs", desc: "Implemented child rights protection and youth capacity-building programs with support from government and development organizations." },
                                { year: "2011–2012", title: "NTFP Value Addition Training", desc: "Training programs were conducted to improve processing and marketing of forest produce such as honey and amla." },
                                { year: "2013–2014", title: "Value Addition Programs Expanded", desc: "Programs focused on value addition of amla, adda leaf products, and tamarind to improve tribal incomes." },
                                { year: "2014–2016", title: "Area Based MFP Development Program", desc: "Large-scale training programs were conducted to promote value addition and marketing of Minor Forest Produce across tribal villages." },
                                { year: "2016–2017", title: "Biodiversity Conservation Programs", desc: "Biodiversity documentation and environmental conservation initiatives were implemented in tribal areas." },
                                { year: "2020–2021", title: "Van Dhan Vikas Kendras", desc: "Community groups were formed to strengthen collection, processing, and marketing of forest produce." },
                                { year: "2022–2025", title: "Farmer Producer Organizations (FPOs)", desc: "Formation of Sugumuna FPO and Arunatara FPO with NABARD support to improve market access and collective marketing for tribal farmers." }
                            ].map((milestone, idx) => (
                                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"} flex-col text-center`}>
                                    <ScrollReveal direction={idx % 2 === 0 ? "left" : "right"} className="md:w-1/2 w-full p-4 md:p-12 bg-light-gray rounded-[16px] md:rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all group">
                                        <span className="text-primary font-black text-xl md:text-4xl mb-3 md:mb-6 block">{milestone.year}</span>
                                        <h3 className="text-base md:text-3xl font-black text-gray-900 mb-2 md:mb-6 tracking-tight">{milestone.title}</h3>
                                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-light">{milestone.desc}</p>
                                    </ScrollReveal>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-xl z-20 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Core Values Section */}
                <section className="py-10 md:py-40 bg-accent-bg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Values</h2>
                            <p className="text-xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">Principles that Guide Us</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                            {[
                                { title: "Integrity", desc: "We maintain the highest ethical standards in every project and partnership.", icon: "💎" },
                                { title: "Community First", desc: "Our initiatives are designed by and for the people we serve.", icon: "🤝" },
                                { title: "Transparency", desc: "Full accountability of funds and impact reports shared openly.", icon: "👁️" },
                                { title: "Sustainability", desc: "We build systems that last beyond our direct intervention.", icon: "🌍" },
                                { title: "Empowerment", desc: "Enabling individuals to become the architects of their own growth.", icon: "🔥" },
                                { title: "Accountability", desc: "Taking ownership of our results and learning from every challenge.", icon: "⚖️" }
                            ].map((value, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="bg-white p-5 md:p-12 rounded-[20px] md:rounded-[40px] border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all group cursor-default">
                                    <div className="text-3xl md:text-5xl mb-4 md:mb-8 bg-accent-bg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center rounded-2xl md:rounded-3xl group-hover:scale-110 transition-transform duration-500">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-base md:text-2xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors tracking-tight">{value.title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">{value.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. SDG Alignment Section */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Commitment</h2>
                            <p className="text-xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">Aligned with Global Goals</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8">
                            {[
                                { n: "13", t: "Climate Action", c: "bg-[#00966C]" },
                                { n: "4", t: "Quality Education", c: "bg-[#C5192D]" },
                                { n: "5", t: "Gender Equality", c: "bg-[#FF3A21]" },
                                { n: "6", t: "Clean Water", c: "bg-[#26BDE2]" },
                                { n: "8", t: "Health & Well-being", c: "bg-[#A21942]" },
                                { n: "17", t: "Partnerships", c: "bg-[#19486A]" }
                            ].map((goal, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className={`${goal.c} p-3 md:p-8 rounded-[16px] md:rounded-[32px] text-white aspect-square flex flex-col justify-between hover:scale-110 hover:-rotate-2 transition-all cursor-pointer shadow-xl relative overflow-hidden group`}>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    <span className="text-xl md:text-3xl font-black font-heading relative z-10">{goal.n}</span>
                                    <span className="text-[8px] md:text-sm font-black leading-tight relative z-10 uppercase tracking-tighter">{goal.t}</span>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Leadership Section */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal direction="up" className="text-center mb-8 md:mb-24">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">The Team</h2>
                            <p className="text-xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter">Passionate Minds Behind MANYASEEMA</p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-16">
                            {[
                                { name: "Srinivasarao CH", role: "CEO & Founder", bio: "25+ years in social service.", photo: "/team/srinu.jpeg" },
                                { name: "Anusha Chitrada", role: "Head of Operations", bio: "Expert in community mobilization.", photo: "/team/anusha.jpeg" },
                                { name: "Yesubabu B", role: "Project Coordinator", bio: "Focusing on agri-tech innovation.", photo: "/team/Yesubabu.jpeg" },
                                { name: "Veerababu Yelleti", role: "District Coordinator, Polavaram, East godavari", bio: "Expanding MVO's reach in the region.", photo: "/team/veerababu.jpeg" },
                                { name: "Srinivas Varma G", role: "District Coordinator, Eluru, Krishna", bio: "Expanding MVO's reach in the region.", photo: "/team/varma1.jpeg" },
                            ].map((member, i) => (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1} className="text-center group">
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 mx-auto mb-4 md:mb-6">
                                        <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 blur-xl group-hover:bg-primary/25 transition-all duration-700" />
                                        <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
                                            <Image
                                                src={member.photo}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 176px"
                                            />
                                        </div>
                                    </div>
                                    <h4 className="text-sm md:text-xl font-black text-gray-900 mb-1">{member.name}</h4>
                                    <p className="text-primary font-black text-[9px] md:text-xs uppercase tracking-[0.15em] mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-xs md:text-sm font-light px-2">{member.bio}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Impact Philosophy Section */}
                <section className="py-10 md:py-40 bg-gradient-to-b from-white to-accent-bg relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
                        <span className="text-[10rem] md:text-[40rem] font-serif">"</span>
                    </div>
                    <ScrollReveal direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <p className="text-xl md:text-7xl font-heading font-black text-gray-900 leading-[1.2] tracking-tighter">
                            "True development begins when communities become <span className="text-primary underline underline-offset-4 md:underline-offset-[12px] decoration-4 decoration-primary/20">self-reliant.</span>"
                        </p>
                    </ScrollReveal>
                </section>

                {/* 7. Transparency Section */}
                <section className="py-10 md:py-40 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                            <ScrollReveal direction="left" className="space-y-6 md:space-y-12">
                                <div>
                                    <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Trust</h2>
                                    <h3 className="text-xl md:text-5xl font-heading font-black text-gray-900 tracking-tighter">Governance & Compliance</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10">
                                    <div className="p-4 md:p-8 rounded-[16px] md:rounded-[32px] bg-light-gray border border-gray-50">
                                        <h4 className="font-black text-base md:text-xl mb-2">NGO Registration</h4>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium mt-2">Certificate of Registration of Societies</p>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium">Reg No: 984</p>
                                    </div>
                                    <div className="p-4 md:p-8 rounded-[16px] md:rounded-[32px] bg-light-gray border border-gray-50">
                                        <h4 className="font-black text-base md:text-xl mb-2">Other Compliances</h4>
                                        <p className="text-gray-500 text-xs md:text-sm font-medium">12A, CSR1, 80G, NGO Darpan</p>
                                    </div>
                                </div>
                                <p className="text-sm md:text-xl text-gray-600 leading-relaxed font-light">
                                    We adhere to international standards of NGO governance, ensuring every contribution is handled with extreme ethical care.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal direction="right" className="bg-primary/5 rounded-[24px] md:rounded-[60px] p-6 md:p-16 flex flex-col justify-center space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.05] rotate-12">
                                    <span className="text-7xl md:text-9xl">📄</span>
                                </div>
                                <h4 className="text-lg md:text-3xl font-black text-gray-900 mb-2 leading-tight tracking-tight">Ready to see our impact?</h4>
                                <div className="flex flex-col space-y-3 md:space-y-6">
                                    <button className="bg-primary text-white w-full py-4 md:py-6 rounded-2xl font-black text-base md:text-xl hover:bg-primary-hover shadow-2xl flex items-center justify-center space-x-3 group">
                                        <span>Download Annual Report 2024</span>
                                        <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2.5" /></svg>
                                    </button>
                                    <button className="border-2 border-primary text-primary w-full py-4 md:py-6 rounded-2xl font-black text-base md:text-xl hover:bg-primary hover:text-white transition-all shadow-lg">
                                        View Impact Report 2023
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* 8. CTA Section */}
                <section className="py-10 md:py-32 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                    <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                        <h2 className="text-2xl md:text-7xl font-heading font-black mb-5 md:mb-10 tracking-tighter leading-tight">Be Part of the Change</h2>
                        <p className="text-sm md:text-2xl text-accent-bg/80 mb-8 md:mb-16 max-w-3xl mx-auto font-light">
                            There's a place for you in our mission to transform India's rural heartlands. Join us today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-10">
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <button className="w-full bg-white text-primary px-8 md:px-16 py-4 md:py-6 rounded-2xl font-black text-base md:text-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 tracking-tight">
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
