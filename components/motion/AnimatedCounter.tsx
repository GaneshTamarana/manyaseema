"use strict";
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, m } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export function AnimatedCounter({ value, duration = 2, suffix = "", className }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isInView && isMounted) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView, isMounted]);

    useEffect(() => {
        if (!isMounted) return;
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
            }
        });
    }, [springValue, suffix, isMounted]);

    return (
        <span className={className}>
            <span ref={ref} aria-hidden="true" suppressHydrationWarning />
            <span className="sr-only">
                {Intl.NumberFormat("en-US").format(value)}
                {suffix}
            </span>
        </span>
    );
}
