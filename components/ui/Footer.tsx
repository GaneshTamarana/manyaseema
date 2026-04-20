"use strict";
"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-10 md:pt-24 pb-8 md:pb-12 font-sans overflow-hidden" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-10 md:mb-20 text-left">
                    <div className="col-span-2 sm:col-span-1 space-y-4 md:space-y-8 flex flex-col items-start">
                        <Link href="/" className="group flex items-center space-x-3" aria-label="MVO Home">
                            <div className="group-hover:scale-110 transition-transform duration-500">
                                <Image
                                    src="/logo.png"
                                    alt="MVO Logo"
                                    width={56}
                                    height={56}
                                    quality={90}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-base font-heading font-black text-white tracking-tight">MANYASEEMA</span>
                                <span className="text-xs font-semibold text-secondary tracking-wide">Voluntary Organization</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-xs text-sm font-light">
                            Transforming rural landscapes through passion, precision, and partnership.
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-4 md:mb-8 text-sm md:text-lg underline underline-offset-8 decoration-primary/50 tracking-tight">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-4 text-gray-400">
                            {["Home", "About Us", "Programs", "Media Centre", "Contact Us"].map(l => (
                                <li key={l}>
                                    <Link
                                        href={l === "Home" ? "/" : `/${l.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="hover:text-primary transition-colors text-xs md:text-base outline-offset-4 focus-visible:text-primary font-medium tracking-tight"
                                    >
                                        {l}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-4 md:mb-8 text-sm md:text-lg underline underline-offset-8 decoration-primary/50 tracking-tight">Programs</h3>
                        <ul className="space-y-2 md:space-y-4 text-gray-400">
                            {["Digital Shiksha", "Matri Shakti", "Gram Swasthya", "Krishi Unnati"].map(l => (
                                <li key={l} className="text-xs md:text-base font-medium tracking-tight">{l}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start">
                        <h3 className="font-black mb-4 md:mb-8 text-sm md:text-lg underline underline-offset-8 decoration-primary/50 tracking-tight">Contact Info</h3>
                        <ul className="space-y-3 md:space-y-6 text-gray-400">
                            <li className="flex items-start space-x-3 group">
                                <span className="text-primary font-bold shrink-0" aria-hidden="true">📍</span>
                                <span className="text-xs md:text-sm font-medium tracking-tight">2-112, Devangula Street, Rolugunta Village, Anakapalli Dist., AP 531114</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <span className="text-primary font-bold shrink-0" aria-hidden="true">📞</span>
                                <span className="text-xs md:text-sm font-medium tracking-tight">+91 9441919864</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <span className="text-primary font-bold shrink-0" aria-hidden="true">✉️</span>
                                <span className="text-xs md:text-sm font-medium tracking-tight">info@manyaseema.ngo</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-medium">© {new Date().getFullYear()} Manyaseema Volunteer Organization. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        {["Terms", "Privacy", "Cookies"].map(l => (
                            <Link key={l} href="#" className="text-gray-500 hover:text-white text-[10px] md:text-xs transition-colors outline-offset-4 focus-visible:text-white font-bold tracking-widest">{l}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
