"use strict";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { HeroBackgroundSlider } from "@/components/ui/HeroBackgroundSlider";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export const metadata: Metadata = {
  title: "Manyaseema : Empowering rural Andhrapradesh",
  description: "Join Manyaseema Volunteer Organization (MVO), the leading rural NGO in Andhra Pradesh. We specialize in sustainable development, agri-tech, and community empowerment.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden">
          <HeroBackgroundSlider />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:py-0">
            <ScrollReveal direction="up" distance={40} duration={0.7}>
              <h1 className="text-2xl sm:text-5xl md:text-8xl font-heading font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tighter">
                Empowering Lives
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={40} duration={0.7} delay={0.15}>
              <h1 className="text-2xl sm:text-5xl md:text-8xl font-heading font-black text-accent-bg leading-[1.1] mb-5 md:mb-8 tracking-tighter">
                Preserving Nature
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={30} duration={0.6} delay={0.3}>
              <p className="text-sm md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-light max-w-2xl">
                Manyaseema works with tribal communities in the Eastern Ghats of Andhra Pradesh,
                promoting sustainable livelihoods, Minor Forest Produce value addition,
                and environmental conservation.
              </p>
              {/* Stat strip */}
              <div className="flex items-center gap-6 md:gap-10 mb-7 md:mb-10">
                {[
                  { val: "250+", label: "Villages" },
                  { val: "10K+", label: "Beneficiaries" },
                  { val: "12+", label: "Years" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6">
                    {i > 0 && <div className="w-px h-8 bg-white/20" />}
                    <div>
                      <p className="text-lg md:text-3xl font-black text-white font-heading tracking-tighter">{s.val}</p>
                      <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-bold">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <Link href="/contact-us" className="w-full sm:w-auto">
                  <button className="w-full bg-primary text-white px-6 md:px-12 py-3 md:py-5 rounded-2xl font-black text-base md:text-xl hover:bg-primary-hover shadow-2xl transition-all transform hover:-translate-y-1 tracking-tight">
                    Join Our Mission
                  </button>
                </Link>
                <Link href="/support-us" className="w-full sm:w-auto">
                  <button className="w-full bg-white/10 backdrop-blur-md border-2 border-white text-white px-6 md:px-12 py-3 md:py-5 rounded-2xl font-black text-base md:text-xl hover:bg-white hover:text-primary transition-all shadow-xl transform hover:-translate-y-1 tracking-tight">
                    Donate Now
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. Our Mission Section */}
        <section className="py-10 md:py-40 bg-white" aria-labelledby="mission-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" className="text-center mb-8 md:mb-24">
              <h2 id="mission-title" className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Purpose</h2>
              <p className="text-xl md:text-6xl font-heading font-black text-gray-900 leading-tight tracking-tighter">Why We Exist</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12">
              {[
                { title: "BioDiversity & Environmental Conservation", desc: "Promoting environmental conservation, biodiversity protection, and restoration of forests, water bodies, and natural ecosystems in the Eastern Ghats.", icon: "🌱" },
                { title: "Strengthening Livelihoods", desc: "Strengthening livelihoods of tribal communities through value addition of Minor Forest Produce, agriculture, and community-based enterprises.", icon: "🎓" },
                { title: "Skill Development & Value Addition", desc: "Training tribal communities in processing and value addition of forest produce such as tamarind, honey, turmeric, and other local resources.", icon: "🏥" }
              ].map((m, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} className="group bg-light-gray p-5 md:p-12 rounded-[20px] md:rounded-[40px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default border border-gray-100 hover:border-primary/20">
                  <div className="text-4xl md:text-5xl mb-5 md:mb-8 group-hover:scale-110 transition-transform duration-500" aria-hidden="true">{m.icon}</div>
                  <h3 className="text-lg md:text-3xl font-black mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">{m.title}</h3>
                  <p className="text-sm md:text-lg text-gray-600 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Vision Section */}
        <section className="py-10 md:py-40 bg-accent-bg overflow-hidden relative" aria-labelledby="vision-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
              <ScrollReveal direction="left" className="w-full lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative rounded-[24px] md:rounded-[60px] overflow-hidden shadow-2xl aspect-[4/5]">
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
                <h2 id="vision-title" className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Our Initiatives</h2>
                <h3 className="text-xl md:text-6xl font-heading font-black text-gray-900 mb-5 md:mb-10 leading-tight tracking-tighter">
                  Projects transforming livelihood and <span className="text-primary border-b-4 border-primary/10 pb-1">Nature restoration.</span>
                </h3>
                <p className="text-sm md:text-xl text-gray-700 mb-6 md:mb-12 leading-relaxed font-light max-w-2xl">
                  Manyaseema implements community-driven projects across the Eastern Ghats of Andhra Pradesh focusing on tribal livelihoods, Minor Forest Produce value addition, environmental conservation, and skill development.
                </p>
                <div className="grid gap-4 md:gap-8">
                  {["Zero Illiteracy in focus villages", "Complete Sanitation coverage", "100% Women workforce participation"].map((item, id) => (
                    <div key={id} className="flex items-start space-x-4 group">
                      <div className="bg-primary p-2 mt-1 rounded-full shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-xl font-medium text-gray-800 group-hover:text-primary transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. Impact Statistics Section */}
        <section className="py-10 md:py-32 bg-primary text-white relative" aria-label="Key Impact Statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-16 text-center">
              {[
                { label: "Villages", val: 250, suffix: "+" },
                { label: "Beneficiaries", val: 10, suffix: "K+" },
                { label: "Trainings", val: 60, suffix: "+" },
                { label: "Partners", val: 15, suffix: "+" },
                { label: "Years of Work", val: 12, suffix: "+" }
              ].map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="space-y-2 md:space-y-4">
                  <div className="text-3xl md:text-7xl font-black font-heading tabular-nums tracking-tighter">
                    <AnimatedCounter value={stat.val} suffix={stat.suffix} />
                  </div>
                  <p className="text-accent-bg/80 uppercase tracking-[0.15em] text-[9px] md:text-xs font-black">{stat.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Partners Section */}
        <section className="py-10 md:py-20 bg-white" aria-label="Our Partners">
          <ScrollReveal direction="up" className="text-center mb-8 md:mb-16">
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Trusted Partners & Supporters</p>
          </ScrollReveal>
          <LogoMarquee
            items={[
              { name: "TRIFED", logo: "logos/trifed.png" },
              { name: "NABARD", logo: "logos/NABARD.png" },
              { name: "APSBDB", logo: "logos/APBDB.png" },
              { name: "Goonj", logo: "logos/Goonj.png" },
              { name: "Keystone Foundation", logo: "logos/Keystone.png" },
              { name: "Varaha", logo: "logos/Varaha.png" },
              { name: "APFD", logo: "logos/APFD.png" },
              { name: "APMAB", logo: "logos/APMAB.png" }
            ]}
            bgClass="bg-accent-bg"
            fadeColor="#E8F5E9"
          />
        </section>

        {/* 6. Awards Section */}
        <section className="py-10 md:py-40 bg-light-gray relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-24 gap-4">
              <ScrollReveal direction="left">
                <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">Milestones</h2>
                <p className="text-xl md:text-5xl font-heading font-black text-gray-900 leading-tight tracking-tighter">Global Recognition</p>
              </ScrollReveal>
              <ScrollReveal direction="right" className="w-full md:w-auto">
                <Link href="/about-us">
                  <button className="text-primary font-black text-base border-b-2 border-primary/20 hover:border-primary pb-1 transition-all tracking-tight">
                    View our journey →
                  </button>
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              {[
                { title: "Best Rural NGO", year: "2024", org: "7TH BNO Awards" },
                { title: "Community Leader", year: "2023", org: "National Volunteers Assoc" },
                { title: "Green Initiative", year: "2024", org: "Eco-Friendly Forum" }
              ].map((award, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.15} className="bg-white p-5 md:p-12 rounded-[20px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 scale-110 md:scale-150 opacity-[0.03] group-hover:opacity-[0.08] group-hover:rotate-12 transition-all duration-700">
                    <span className="text-7xl md:text-9xl">🏆</span>
                  </div>
                  <p className="text-primary font-black text-lg md:text-2xl mb-3 tracking-tighter">{award.year}</p>
                  <h4 className="text-lg md:text-2xl font-black text-gray-900 mb-3 leading-tight tracking-tight">{award.title}</h4>
                  <p className="text-gray-500 font-medium text-sm md:text-base">{award.org}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
