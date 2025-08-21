"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#0C2340] text-white flex items-center justify-center px-6 md:px-12 lg:px-20 py-10 overflow-hidden">
            <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Image */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-start"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        src="/img/main.png" // replace with your image
                        alt="Secure IT"
                        width={600}
                        height={400}
                        className="w-full max-w-[600px] h-auto rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Text */}
                <motion.div
                    className="flex-1 flex flex-col justify-center text-center lg:text-left"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-sm md:text-base font-light tracking-widest mb-2">
                        SECURE SOLUTIONS FOR
                    </h2>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                        TOMORROW’S
                    </h1>
                    <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="bg-gray-300 text-[#0C2340] px-3 py-1 rounded-md font-bold text-lg sm:text-xl lg:text-3xl">
                            IT
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">CHALLENGES</h1>
                    </div>
                </motion.div>
            </div>

            {/* Logo */}
            <div className="absolute top-6 left-6">
                <Image
                    src="/img/logo.png" // replace with your logo
                    alt="Ciphercore Technologies"
                    width={180}
                    height={60}
                    className="object-contain"
                />
            </div>

            {/* Decorative Pattern */}
            <div className="absolute bottom-6 right-6 opacity-20">
                <img src="/img/4.png" alt="Pattern" className="w-32 sm:w-48 lg:w-64" />
            </div>
        </section>
    );
}