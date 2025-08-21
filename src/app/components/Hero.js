"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden"
            style={{ backgroundColor: "#05233c", maxWidth: "100vw", margin: "0 auto" }}
        >
            {/* LEFT IMAGE */}
            <div className="w-full lg:w-2/3 flex items-center z-10">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    className="hero-main-img object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* TEXT CONTENT */}
            <motion.div
                // PADDING CHANGED HERE: lg:p-8 is now lg:p-24 (which is 6rem)
                className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4">
                    {/* Text block */}
                    <div className="text-center lg:text-right">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-normal">
                            SECURE SOLUTIONS FOR
                        </h1>
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold">
                            TOMORROW'S
                        </h1>
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold">
                            CHALLENGES
                        </h1>
                    </div>
                    {/* "IT" box */}
                    <div
                        className="flex items-center justify-center bg-[#8a9fc4] px-4 py-1"
                    >
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-black">
                            IT
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* BACKGROUND DECORATIONS */}
            <img
                src="/img/2.png"
                alt="Decoration"
                className="absolute right-0 transform -translate-y-1/2 z-[9999] w-[560px] h-[480px]"
                style={{ top: "-3%" }}
            />


            <img
                src="/img/center.png"
                alt="Decoration"
                className="absolute top-[-49vh] left-1/2 -translate-x-1/2 w-[50vw] max-w-[500px]"
            />

            <img
                src="/img/logo.png"
                alt="Decoration"
                className="absolute top-6 left-6 z-10 w-[465px]"
            />




            <img
                src="/img/1.png"
                alt="Decoration"
                className="absolute left-[-17vw] w-[40vw] max-w-[470px] hidden lg:block"
                style={{ top: "-6%" }}
            />


        </section>
    );
}
