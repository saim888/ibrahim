"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* LEFT IMAGE */}
            <div className="w-full lg:w-2/3 flex items-center justify-center z-10">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    className="relative w-[80%] sm:w-[70%] md:w-[60%] lg:w-auto lg:h-[90%] object-contain"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* RIGHT TEXT */}
            <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 lg:pl-8 mt-6 lg:mt-0"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="relative flex items-stretch w-fit text-center lg:text-left">
                    <div>
                        <h1 className="text-[22px] sm:text-[28px] md:text-[31px] leading-[1] font-normal whitespace-nowrap">
                            SECURE SOLUTIONS FOR
                        </h1>
                        <h1 className="text-[28px] sm:text-[34px] md:text-[37.6px] leading-[1] font-bold whitespace-nowrap text-right">
                            TOMORROW&#39;S
                        </h1>
                        <h1 className="text-[28px] sm:text-[34px] md:text-[37.6px] leading-[1] font-bold whitespace-nowrap text-right">
                            CHALLENGES
                        </h1>
                    </div>
                    <div
                        className="flex items-center justify-center ml-2 px-2"
                        style={{ backgroundColor: "#8a9fc4" }}
                    >
                        <h1 className="text-[28px] sm:text-[34px] md:text-[37.6px] leading-[1] font-bold whitespace-nowrap text-black">
                            IT
                        </h1>
                    </div>
                </div>
            </motion.div>

            {/* --- DECORATIVE IMAGES --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute w-32 md:w-64 lg:w-[26rem] top-[-89px] left-8 md:left-16 lg:left-20 z-20"
                initial={{ scale: 1 }}
            />
            <img
                src="/img/1.png"
                alt="Top Left"
                className="absolute top-[-5%] left-[-14%] w-40 sm:w-56 lg:w-[25rem] h-auto opacity-50"
            />
            <img
                src="/img/2.png"
                alt="Top Right"
                className="absolute top-[-36%] right-0 w-48 sm:w-64 lg:w-[33rem] h-auto"
            />
            <img
                src="/img/center.png"
                alt="Center Top"
                className="absolute top-[-30%] sm:top-[-64%] left-[20%] w-64 sm:w-80 lg:w-[39rem] h-auto"
            />
            <img
                src="/img/4.png"
                alt="Bottom Right Corner"
                className="absolute bottom-0 right-[-55px] w-28 sm:w-40 lg:w-[16rem] h-auto z-20"
            />
            <img
                src="/img/bottom-right.png"
                alt="Bottom Right"
                className="absolute w-[20rem] sm:w-[30rem] lg:w-[33rem] h-auto right-[-24%] bottom-[-22%] z-[9999]"
            />
            <img
                src="/img/5.png"
                alt="5"
                className="absolute w-32 sm:w-40 lg:w-72 h-auto right-5 bottom-20"
            />
        </section>
    );
}
