"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* ---- LOGO ---- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute top-4 left-4 w-32 lg:top-[2.3rem] lg:left-[6rem] lg:w-[30rem] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* ---- BACKGROUND DECORATION IMAGES ---- */}
            <Image src="/img/1.png" alt="Center Left" width={450} height={480} className="absolute left-[-197px] top-[20%] transform -translate-y-1/2 " />
            <img
                src="/img/2.png"
                alt="Decoration"
                className="absolute top-[-25vh] right-[1vw] w-[35vw] max-w-[410px] xl:w-[410px]"
            />
            <img
                src="/img/center.png"
                alt="Decoration"
                className="absolute top-[-48vh] left-1/2 -translate-x-1/2 w-[45vw] max-w-[500px] xl:w-[500px]"
            />
            <Image
                src="/img/bottom-right.png"
                alt="Bottom Right"
                width={500}
                height={480}
                className="absolute bottom-[-20vh] right-[-25vw] z-0"
            />

            <img
                src="/img/4.png"
                alt="Bottom Right Corner"
                className="absolute bottom-0 right-[-5vw] w-[18vw] max-w-[220px] xl:w-[220px] z-20"
            />
            <img
                src="/img/5.png"
                alt="5"
                className="absolute bottom-[20vh] right-[3vw] w-[18vw] max-w-[200px] xl:w-[200px] z-10"
            />

            {/* ---- LEFT COLUMN (MAIN IMAGE) ---- */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-20 lg:pt-0 z-10">
                <motion.img
                    src="/img/main.png"
                    alt="Heros"
                    className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* ---- RIGHT COLUMN (TEXT CONTENT) ---- */}
            <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 lg:p-24"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4 max-w-[500px] text-center lg:text-right">
                    {/* Text block */}
                    <div>
                        <h1 className="text-base sm:text-lg md:text-xl font-normal">
                            SECURE SOLUTIONS FOR
                        </h1>
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            TOMORROW'S
                        </h1>
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            CHALLENGES
                        </h1>
                    </div>
                    {/* "IT" box */}
                    <div className="flex items-center justify-center bg-[#8a9fc4] px-4 py-1 mt-2 sm:mt-0">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                            IT
                        </h1>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
