"use strict";
"use client";

import Link from "next/link";
import { m } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 md:pt-24 pb-12 font-sans overflow-hidden" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20 text-center sm:text-left">
                    <div className="space-y-6 md:space-y-8 flex flex-col items-center sm:items-start">
                        <Link href="/" aria-label="MVO Home">
                            <span className="text-3xl font-heading font-black text-white tracking-tighter italic">
                                MVO<span className="text-secondary">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-xs text-sm md:text-base italic font-light">
                            Transforming rural landscapes through passion, precision, and partnership. Join us in making a difference today.
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-6 md:mb-8 text-lg underline underline-offset-8 decoration-primary/50 italic tracking-tight">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-400">
                            {["Home", "About Us", "History", "Our Team", "Impact Stories"].map(l => (
                                <li key={l}>
                                    <Link
                                        href={l === "Home" ? "/" : `/${l.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="hover:text-primary transition-colors text-sm md:text-base outline-offset-4 focus-visible:text-primary italic font-medium tracking-tight"
                                    >
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-6 md:mb-8 text-lg underline underline-offset-8 decoration-primary/50 italic tracking-tight">Programs</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-400">
                            {["Rural Education", "Health Clinics", "Agri-Tech Support", "Water Sanitation"].map(l => (
                                <li key={l} className="text-sm md:text-base italic font-medium tracking-tight">{l}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-6 md:mb-8 text-lg underline underline-offset-8 decoration-primary/50 italic tracking-tight">Contact Info</h3>
                        <ul className="space-y-4 md:space-y-6 text-gray-400">
                            <li className="flex items-start md:items-center space-x-4 group">
                                <span className="text-primary font-bold transition-transform" aria-hidden="true">📍</span>
                                <span className="text-sm md:text-base italic font-medium tracking-tight">123 Development Hub, <br />Rural District, India</span>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <span className="text-primary font-bold transition-transform" aria-hidden="true">📞</span>
                                <span className="text-sm md:text-base italic font-medium tracking-tight">+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs md:text-sm italic font-medium">© {new Date().getFullYear()} Manyaseema Volunteer Organization. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        {["Terms", "Privacy", "Cookies"].map(l => (
                            <Link key={l} href="#" className="text-gray-500 hover:text-white text-[10px] md:text-xs transition-colors outline-offset-4 focus-visible:text-white italic font-bold tracking-widest">{l}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
