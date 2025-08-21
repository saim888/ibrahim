"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            // --- MAIN CONTAINER ---
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            <img
                src="/img/1.png"
                alt="Decoration"
                className="absolute top-[-6vh] left-[-17vw] w-[40vw] max-w-[470px] hidden lg:block"
            />

            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute top-4 left-4 w-32 lg:top-[2.3rem] lg:left-[6rem] lg:w-[30rem] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            <img
                src="/img/2.png"
                alt="Decoration"
                className="absolute top-[-27vh] right-0 w-[34vw] max-w-[410px] hidden lg:block"
            />

            <img
                src="/img/center.png"
                alt="Decorations"
                className="absolute top-[-51vh] left-[49%] -translate-x-1/2 w-[50vw] max-w-[500px] hidden lg:block"
            />


        </section>

    );
}