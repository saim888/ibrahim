"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            // --- MAIN CONTAINER ---
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* --- DECORATIVE IMAGES (Your values, made responsive with clamp()) --- */}
            <img src="/img/1.png" alt="Decoration" className="absolute w-[clamp(250px,40vw,470px)] top-[clamp(-10rem,-6vh,-4rem)] left-[clamp(-15rem,-17vw,-10rem)] hidden lg:block" />
            <img src="/img/2.png" alt="Decoration" className="absolute w-[clamp(250px,34vw,410px)] top-[clamp(-20rem,-27vh,-15rem)] right-0 hidden lg:block" />
            <img src="/img/center.png" alt="Decoration" className="absolute w-[clamp(350px,50vw,550px)] top-[clamp(-40rem,-51vh,-30rem)] left-[49%] -translate-x-1/2 hidden lg:block" />
            <img src="/img/bottom-right.png" alt="Bottom Right" className="absolute w-[clamp(350px,50vw,600px)] bottom-[clamp(-20rem,-20vh,-15rem)] right-[clamp(-25rem,-24vw,-18rem)] hidden lg:block z-0" />
            <img src="/img/4.png" alt="Bottom Right Corner" className="absolute w-[clamp(150px,20vw,220px)] bottom-0 right-[clamp(-8rem,-5.3vw,-4rem)] hidden lg:block z-20" />
            <img src="/img/5.png" alt="5" className="absolute w-[clamp(150px,20vw,200px)] bottom-[clamp(10rem,23vh,15rem)] right-[clamp(1rem,2vw,3rem)] hidden lg:block z-10" />

            {/* --- LOGO (Your design, made responsive with clamp()) --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                // Using clamp for width, top, and left to make it perfectly responsive
                className="absolute w-[clamp(12rem,22vw,30rem)] top-[clamp(1.5rem,4vh,2.3rem)] left-[clamp(2rem,5vw,6rem)] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* --- LEFT COLUMN (MAIN IMAGE) --- */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-24 lg:pt-0 z-10 pl-[clamp(0rem,3vw,3rem)]">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    // Added max-h to prevent extreme stretching on tall screens
                    className="w-auto h-[60vh] lg:h-[80vh] max-h-[750px] max-w-full object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* --- RIGHT COLUMN (TEXT CONTENT) --- */}
            <motion.div
                // Using clamp for padding to scale it with screen size
                className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 lg:px-[clamp(2rem,8vw,6rem)]"
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