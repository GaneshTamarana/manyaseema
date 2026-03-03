"use strict";
"use client";

import { LazyMotion, domMax } from "framer-motion";
import { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
    return (
        <LazyMotion features={domMax} strict>
            {children}
        </LazyMotion>
    );
}
