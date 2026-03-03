"use strict";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

export const metadata: Metadata = {
  title: "Empowering Rural Andhra Pradesh | MVO NGO India",
  description: "Join Manyaseema Volunteer Organization (MVO), the leading rural NGO in Andhra Pradesh. We specialize in sustainable development, agri-tech, and community empowerment.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.png"
              alt="MVO Hero"
              fill
              className="object-cover brightness-50"
              priority={true}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
            <ScrollReveal direction="up" distance={50} duration={0.8}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter italic">
                Empowering Lives <br />
                <span className="text-accent-bg">Building Futures.</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl italic">
                Manyaseema Volunteer Organization (MVO) is dedicated to transforming rural India through sustainable development and community-led initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <Link href="/join-us" className="w-full sm:w-auto">
                  <button className="w-full bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 italic tracking-tight">
                    Join Our Mission
                  </button>
                </Link>
                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-white hover:text-primary transition-all shadow-xl transform hover:-translate-y-1 italic tracking-tight">
                  Donate Now
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-1 h-12 rounded-full bg-white/20 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* 2. Our Mission Section */}
        <section className="py-24 md:py-40 bg-white" aria-labelledby="mission-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" className="text-center mb-16 md:mb-24">
              <h2 id="mission-title" className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Our Purpose</h2>
              <p className="text-3xl md:text-6xl font-heading font-black text-gray-900 leading-tight tracking-tighter italic">Why We Exist</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { title: "Sustainable Growth", desc: "Developing self-reliant rural ecosystems that thrive through local resources.", icon: "🌱" },
                { title: "Educational Equity", desc: "Ensuring every child has access to quality education and digital literacy.", icon: "🎓" },
                { title: "Health & Wellness", desc: "Bringing modern healthcare facilities to the doorstep of rural families.", icon: "🏥" }
              ].map((m, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} className="group bg-light-gray p-8 md:p-12 rounded-[40px] hover:bg-primary transition-all duration-700 hover:shadow-2xl cursor-default border border-transparent hover:border-primary/10 focus-within:ring-4 focus-within:ring-primary/30">
                  <div className="text-5xl md:text-6xl mb-8 md:mb-10 group-hover:scale-125 transition-transform duration-700 ease-out" aria-hidden="true">{m.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 group-hover:text-white transition-colors italic tracking-tight">{m.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 group-hover:text-gray-100 transition-colors leading-relaxed font-light italic">
                    {m.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Vision Section */}
        <section className="py-24 md:py-40 bg-accent-bg overflow-hidden relative" aria-labelledby="vision-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <ScrollReveal direction="left" className="w-full lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto">
                  <Image
                    src="/vision.png"
                    alt="Collective Action in Rural India"
                    width={800}
                    height={1000}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="w-full lg:w-1/2">
                <h2 id="vision-title" className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">The Future</h2>
                <h3 className="text-3xl md:text-6xl font-heading font-black text-gray-900 mb-8 md:mb-10 leading-tight tracking-tighter italic">
                  A vision for a more inclusive and <span className="text-primary border-b-4 border-primary/10 pb-2">prosperous India.</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-700 mb-10 md:mb-12 leading-relaxed font-light italic">
                  We envision a future where geographical boundaries don't define opportunities. Where every village is a hub of innovation, health, and happiness.
                </p>
                <div className="grid gap-6 md:gap-8">
                  {["Zero Illiteracy in focus villages", "Complete Sanitation coverage", "100% Women workforce participation"].map((item, id) => (
                    <div key={id} className="flex items-center space-x-6 group">
                      <div className="bg-primary p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-primary transition-colors italic">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. Impact Statistics Section */}
        <section className="py-20 md:py-32 bg-primary text-white relative" aria-label="Key Impact Statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 text-center">
              {[
                { label: "Villages", val: 150, suffix: "+" },
                { label: "Beneficiaries", val: 250, suffix: "K+" },
                { label: "Volunteers", val: 5000, suffix: "+" },
                { label: "Partners", val: 45, suffix: "+" },
                { label: "Awards", val: 12, suffix: "" }
              ].map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="space-y-2 md:space-y-4">
                  <div className="text-5xl md:text-7xl font-black font-heading tabular-nums italic tracking-tighter">
                    <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <p className="text-accent-bg/80 uppercase tracking-[0.2em] text-[10px] md:text-xs font-black">{stat.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Companies We Worked With */}
        <section className="py-20 md:py-32 bg-white" aria-label="Our Partners">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" className="text-center mb-16 md:mb-20">
              <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Trusted Partners & Supporters</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-16">
              {["EcoBank", "RuralLink", "FutureIndia", "GreenSphere", "VillageCore", "ImpactCorp"].map((brand, i) => (
                <ScrollReveal key={brand} direction="up" delay={i * 0.1} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer focus-visible:opacity-100 outline-offset-8">
                  <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter italic">{brand}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Awards Section */}
        <section className="py-24 md:py-40 bg-light-gray relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <ScrollReveal direction="left">
                <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Milestones</h2>
                <p className="text-3xl md:text-5xl font-heading font-black text-gray-900 leading-tight italic tracking-tighter">Global Recognition</p>
              </ScrollReveal>
              <ScrollReveal direction="right" className="w-full md:w-auto">
                <button className="text-primary font-black text-lg border-b-2 border-primary/20 hover:border-primary pb-1 transition-all italic tracking-tight">
                  View our journey →
                </button>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { title: "Best Rural NGO", year: "2024", org: "Social Impact Awards" },
                { title: "Community Leader", year: "2023", org: "National Volunteers Assoc" },
                { title: "Green Initiative", year: "2024", org: "Eco-Friendly Forum" }
              ].map((award, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 scale-110 md:scale-150 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700">
                    <span className="text-7xl md:text-9xl">🏆</span>
                  </div>
                  <p className="text-primary font-black text-xl md:text-2xl mb-4 italic tracking-tighter">{award.year}</p>
                  <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-4 italic leading-tight tracking-tight">{award.title}</h4>
                  <p className="text-gray-500 font-medium text-sm md:text-base italic">{award.org}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
