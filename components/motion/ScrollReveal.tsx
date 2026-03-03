"use strict";
"use client";

import { m, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    distance?: number;
    staggerChildren?: number;
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 30,
    staggerChildren = 0,
    className,
    ...props
}: ScrollRevealProps) {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <m.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration,
                    delay,
                    ease: [0.4, 0, 0.2, 1],
                    staggerChildren,
                }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={className}
            {...props}
        >
            {children}
        </m.div>
    );
}
