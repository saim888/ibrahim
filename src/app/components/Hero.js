"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* LEFT IMAGE */}
            <div className="  w-full lg:w-2/3 flex items-center justify-center z-10">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    className="main-image w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* RIGHT TEXT */}
            <motion.div
                className="w-full lg:w-1/2 flex justify-center px-4 lg:pl-8 mt-6 lg:mt-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="relative flex items-stretch text-center lg:text-right flex-wrap">
                    <div>
                        <h1 className="head1 sm:text-2xl md:text-3xl font-normal">
                            SECURE SOLUTIONS FOR
                        </h1>
                        <h1 className=" head2 text-2xl sm:text-3xl md:text-4xl font-bold">
                            TOMORROW&#39;S
                        </h1>
                        <h1 className=" head2 text-2xl sm:text-3xl md:text-4xl font-bold">
                            CHALLENGES
                        </h1>
                    </div>
                    <div
                        className="flex items-center justify-center ml-2 px-2"
                        style={{ backgroundColor: "#8a9fc4" }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                            IT
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* --- DECORATIVE IMAGES --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="logo-main absolute w-24 "
                initial={{ scale: 1 }}
            />
            <img src="/img/1.png" alt="Top Left" className="img-top-left" />
            <img src="/img/2.png" alt="Top Right" className="img-top-right" />
            <img src="/img/center.png" alt="Center Top" className="img-center-top" />
            <img
                src="/img/4.png"
                alt="Bottom Right Corner"
                className="img-bottom-right-corner"
            />
            <img
                src="/img/bottom-right.png"
                alt="Bottom Right"
                className="img-bottom-right"
            />
            <img src="/img/5.png" alt="5" className="img-5" />
        </section>
    );
}
