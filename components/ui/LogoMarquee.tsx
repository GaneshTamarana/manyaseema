"use client";

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
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`relative w-full overflow-hidden py- md:py-16 ${bgClass}`}>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                .marquee-track {
                    animation: marquee 6s linear infinite;
                    will-change: transform;
                }
                @media (max-width: 767px) {
                    .marquee-track {
                        animation-duration: 6s;
                    }
                }
            `}</style>

            <div className="absolute inset-y-0 left-0 w-8 md:w-24 z-10" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
            <div className="absolute inset-y-0 right-0 w-8 md:w-24 z-10" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

            <div className="marquee-track flex whitespace-nowrap">
                {duplicatedItems.map((item, idx) => (
                    <div
                        key={`${item.name}-${idx}`}
                        className="flex items-center justify-center px-5 md:px-16 opacity-100  transition-opacity duration-300 cursor-default shrink-0"
                    >
                        {item.logo ? (
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="h-8 md:h-25 w-auto object-contain block max-w-[80px] md:max-w-none"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        ) : (
                            <span className="text-sm md:text-2xl font-black text-gray-900 tracking-tighter select-none">
                                {item.name}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
