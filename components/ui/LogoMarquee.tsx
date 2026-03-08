"use client";

import { m } from "framer-motion";

interface LogoMarqueeItem {
    name: string;
    logo?: string;
}

interface LogoMarqueeProps {
    items: LogoMarqueeItem[];
    bgClass?: string;
    fadeColor?: string;
}

export function LogoMarquee({ items, bgClass = "bg-accent-bg", fadeColor = "#E8F5E9" }: LogoMarqueeProps) {
    // Triple the items to ensure enough length for the loop
    const duplicatedItems = [...items, ...items, ...items];
    console.log("LogoMarquee items:", items);

    return (
        <div className={`relative w-full overflow-hidden py-16 ${bgClass}`}>
            {/* Fade Masks */}
            <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
            <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

            <m.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, "-33.333%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div
                        key={`${item.name}-${idx}`}
                        className="flex items-center justify-center px-12 md:px-20 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-default shrink-0"
                    >
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-12 md:h-16 w-auto object-contain block"
                                onError={(e) => {
                                    console.error(`Failed to load logo for ${item.name}: ${item.logo}`);
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        ) : (
                            <span className="text-xl md:text-3xl font-black text-gray-900 tracking-tighter italic select-none">
                                {item.name}
                            </span>
                        )}
                    </div>
                ))}
            </m.div>
        </div>
    );
}
