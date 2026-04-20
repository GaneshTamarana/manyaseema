"use strict";
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Programs", href: "/programs" },
    { name: "Media Centre", href: "/media-centre" },
    { name: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

    // Only allow transparent navbar on the home page
    const isHomePage = pathname === "/";
    const forceSolid = !isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const showSolid = isScrolled || isMenuOpen || forceSolid;

    return (
        <nav
            aria-label="Global Navigation"
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                showSolid
                    ? "bg-white/95 backdrop-blur-md py-2 md:py-4 shadow-sm border-b border-gray-100"
                    : "bg-transparent py-3 md:py-6"
            )}
        >
            {showSolid && (
                <m.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                    style={{ scaleX }}
                />
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 relative z-50">
                        <Link href="/" className="group flex items-center space-x-3" aria-label="MVO Home">
                            <div className="group-hover:scale-110 transition-transform duration-500">
                                <Image
                                    src="/logo.png"
                                    alt="MVO Logo"
                                    width={60}
                                    height={60}
                                    priority
                                    quality={100}
                                    className="object-contain md:w-[80px] md:h-[80px]"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className={cn(
                                    "text-xl sm:text- font-heading font-black tracking-tight transition-colors duration-300",
                                    showSolid ? "text-primary" : "text-white"
                                )}>
                                    MANYASEEMA
                                </span>
                                <span className="text-[15px] sm:text-sm font-semibold tracking-wide text-secondary">
                                    Voluntary Organization
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8" role="list">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "relative font-medium transition-all duration-300 hover:text-primary outline-offset-4 focus-visible:text-primary",
                                        showSolid ? "text-gray-600" : "text-white/90",
                                        isActive && (showSolid ? "text-primary" : "text-white")
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <m.div
                                            layoutId="navUnderline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link href="/support-us">
                            <m.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Join Manyaseema Volunteer Organization"
                                className={cn(
                                    "px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md active:scale-95 outline-offset-4",
                                    showSolid
                                        ? "bg-primary text-white hover:bg-primary-hover"
                                        : "bg-white text-primary border border-primary/20 hover:border-primary"
                                )}
                            >
                                Support Us
                            </m.button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <span className={cn(
                                "h-0.5 bg-current transition-all duration-300",
                                isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6",
                                !showSolid && "bg-white"
                            )} />
                            <span className={cn(
                                "h-0.5 bg-current transition-all duration-300",
                                isMenuOpen ? "opacity-0" : "w-4",
                                !showSolid && "bg-white"
                            )} />
                            <span className={cn(
                                "h-0.5 bg-current transition-all duration-300",
                                isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5",
                                !showSolid && "bg-white"
                            )} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-0 left-0 w-full bg-white md:hidden pt-16 pb-6 px-5 shadow-xl border-b border-gray-100"
                    >
                        <div className="flex flex-col">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                return (
                                    <m.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.04 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center py-3 text-base font-heading font-black tracking-tight border-b border-gray-50",
                                                isActive ? "text-primary" : "text-gray-500"
                                            )}
                                        >
                                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />}
                                            {item.name}
                                        </Link>
                                    </m.div>
                                );
                            })}
                        </div>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            className="mt-5"
                        >
                            <Link href="/support-us">
                                <button className="w-full bg-primary text-white py-3.5 rounded-2xl font-black text-base shadow-lg">
                                    Support Us
                                </button>
                            </Link>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
