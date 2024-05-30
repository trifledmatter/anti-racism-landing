/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { type FC, type ReactNode, useRef } from "react";

interface TextRevealByWordProps {
    text: string;
    className?: string;
    invertColor?: boolean
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
    text,
    className,
    invertColor
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
            <div
                className={
                    "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
                }
            >
                <p
                    ref={targetRef}
                    className={
                        `flex flex-wrap p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl`
                    }
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start, end]} highlightColor={invertColor ? "text-white" : "text-black"}>
                                    {word}
                                </Word>
                            )

                        
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
    highlightColor?: string;
}

const Word: FC<WordProps> = ({ children, progress, range, highlightColor }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30 text-white/40"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={"text-white" }
            >
                {children}
            </motion.span>
        </span>
    );
};

export default TextRevealByWord;
