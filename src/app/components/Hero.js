"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#05233c] text-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 overflow-hidden">

            {/* 1.png behind the logo */}
            <div className="hidden lg:block absolute top-[-4vw] left-[-18vw] w-[40vw] max-w-[515px] h-[30vw] lg:h-[450px] z-0">
                <img
                    src="/img/1.png"
                    alt="Decoration 1"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Logo */}
            <div
                className="absolute z-10"
                style={{ top: "2.5rem", left: "6rem" }}
            >
                <Image
                    src="/img/logo.png"
                    alt="Ciphercore Technologies"
                    width={430}
                    height={60}
                    className="object-contain"
                />
            </div>



            {/* Left Image */}
            <div className="flex-1 flex justify-center lg:justify-start mt-20 lg:mt-0 z-10">
                <motion.img
                    src="/img/main.png"
                    alt="Secure IT"
                    className="w-72 sm:w-96 lg:w-[500px] rounded-lg shadow-lg"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </div>

            {/* Right Text */}
            <motion.div
                className="flex-1 flex flex-col justify-center lg:pl-16 text-center lg:text-left mt-10 lg:mt-0 z-10"
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

            {/* Decorative pattern */}
            <div className="absolute bottom-6 right-6 opacity-20 z-0">
                <img src="/img/pattern.png" alt="Pattern" className="w-32 sm:w-48 lg:w-64" />
            </div>
        </section>
    );
}
