"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";

const images = [
    "/hero-1.png",
    "/hero-2.png",
    "/hero-3.png"
];

export function HeroBackgroundSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence>
                <m.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <m.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`MVO Hero Slide ${currentIndex + 1}`}
                            fill
                            className="object-cover brightness-50"
                            priority={currentIndex === 0}
                            sizes="100vw"
                        />
                    </m.div>
                </m.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? "bg-white w-12" : "bg-white/30 w-6 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
