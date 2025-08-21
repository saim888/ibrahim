"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            // --- MAIN CONTAINER ---
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* --- DECORATIVE BACKGROUND IMAGES (Your latest values) --- */}
            <img src="/img/1.png" alt="Decoration" className="absolute top-[-6vh] left-[-17vw] w-[40vw] max-w-[470px] hidden lg:block" />
            <img src="/img/2.png" alt="Decoration" className="absolute top-[-27vh] right-0 w-[34vw] max-w-[410px] hidden lg:block" />
            <img src="/img/center.png" alt="Decoration" className="absolute top-[-51vh] left-[49%] -translate-x-1/2 w-[50vw] max-w-[500px] hidden lg:block" />

            <img src="/img/bottom-right.png" alt="Bottom Right" className="absolute bottom-[-20vh] right-[-24vw] w-[50vw] max-w-[500px] hidden lg:block z-0" />

            <img src="/img/4.png" alt="Bottom Right Corner" className="absolute bottom-0 right-[-5.3vw] w-[20vw] max-w-[220px] hidden lg:block z-20" />

            <img src="/img/5.png" alt="5" className="absolute bottom-[23vh] right-[2vw] w-[20vw] max-w-[200px] hidden lg:block z-10" />

            {/* --- LOGO --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute top-4 left-4 w-32 lg:top-[2.3rem] lg:left-[6rem] lg:w-[30rem] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* --- LEFT COLUMN (MAIN IMAGE) --- */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-24 lg:pt-0 z-10 pl-0">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    className="w-auto h-[60vh] lg:h-[80vh] max-w-full object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>


            {/* --- RIGHT COLUMN (TEXT CONTENT) - PADDING UPDATED --- */}
            <motion.div
                // PADDING CHANGED HERE: lg:p-8 is now lg:p-24 (which is 6rem)
                className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 lg:p-24"
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
        </section>
    );
}