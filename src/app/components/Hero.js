"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            // --- MAIN CONTAINER ---
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* --- DECORATIVE BACKGROUND IMAGES (Values adjusted for better responsiveness) --- */}
            <img src="/img/1.png" alt="Decoration" className="absolute top-[-5vh] left-[-10vw] w-[35vw] max-w-[450px] hidden lg:block" />
            <img src="/img/2.png" alt="Decoration" className="absolute top-[-20vh] right-[-5vw] w-[30vw] max-w-[400px] hidden lg:block" />
            <img src="/img/center.png" alt="Decoration" className="absolute top-[-40vh] left-1/2 -translate-x-1/2 w-[45vw] max-w-[500px] hidden lg:block" />
            <img src="/img/bottom-right.png" alt="Bottom Right" className="absolute bottom-[-15vh] right-[-15vw] w-[45vw] max-w-[500px] hidden lg:block z-0" />
            <img src="/img/4.png" alt="Bottom Right Corner" className="absolute bottom-0 right-[-2vw] w-[18vw] max-w-[200px] hidden lg:block z-20" />
            <img src="/img/5.png" alt="5" className="absolute bottom-[10vh] right-[2vw] w-[18vw] max-w-[190px] hidden lg:block z-10" />

            {/* --- LOGO (CHANGED: Using vw for scaling) --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                // CHANGED: Fixed rem units replaced with vw units for proportional scaling
                className="absolute top-[3vh] left-[3vw] w-[20vw] max-w-[280px] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* --- LEFT COLUMN (MAIN IMAGE) --- */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-24 lg:pt-0 z-10 pl-4 lg:pl-[3vw]">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    // CHANGED: Added max-h to control height on very tall screens
                    className="w-auto h-[60vh] lg:h-[80vh] max-h-[700px] max-w-full object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* --- RIGHT COLUMN (TEXT CONTENT) --- */}
            <motion.div
                // CHANGED: Fixed padding lg:p-24 replaced with proportional padding
                className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 lg:px-[5vw]"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4">
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
                    <div className="flex items-center justify-center bg-[#8a9fc4] px-4 py-1">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-black">
                            IT
                        </h1>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}