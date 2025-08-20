"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center text-white overflow-hidden"
            style={{ backgroundColor: "#05233c" }}
        >
            <div className="w-full h-full flex items-center z-10">
                <div className="w-2/3 h-full flex items-center justify-center">
                    <motion.img
                        src="/img/main.png"
                        alt="Hero"
                        // CHANGE: Aapke diye gaye styles yahan apply kar diye gaye hain.
                        className="relative top-[1%] w-auto h-[90%] object-contain scale-100" // <-- CHANGED
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>

                <motion.div
                    className="w-1/2 flex justify-start pl-4 lg:pl-8"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="relative flex items-stretch w-fit">
                        <div>
                            <h1 className="text-[31px] leading-[1] font-normal whitespace-nowrap">
                                SECURE SOLUTIONS FOR
                            </h1>
                            <h1 className="text-[37.6px] leading-[1] font-bold text-right whitespace-nowrap">
                                TOMORROW&#39;S
                            </h1>
                            <h1 className="text-[37.6px] leading-[1] font-bold text-right whitespace-nowrap">
                                CHALLENGES
                            </h1>
                        </div>
                        <div
                            className="flex items-center justify-center ml-2 px-2"
                            style={{ backgroundColor: "#8a9fc4" }}
                        >
                            <h1 className="text-[37.6px] leading-[1] font-bold text-right whitespace-nowrap text-black">
                                IT
                            </h1>
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* --- Decorative Images --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute w-64 md:w-96 lg:w-[26rem] top-[-3rem] md:top-[-5rem] lg:top-[-5.3rem] left-8 md:left-16 lg:left-20 z-20"
                initial={{ scale: 1 }}
            />
            <img
                src="/img/1.png"
                alt="Top Left"
                className="absolute top-[-5%] left-[-14%] w-[15rem] lg:w-[25rem] h-auto opacity-50"
            />
            <img src="/img/2.png" alt="Top Right" className="absolute top-[-35%] right-[0%] w-[33rem] lg:w-[33rem] h-auto"/>
            <img src="/img/center.png" alt="Center Top" className="absolute top-[-64%] left-[21%] w-[39rem] h-auto"/>
            <img src="/img/4.png" alt="Bottom Right Corner" className="absolute bottom-[-1%] right-[-5%] w-[10rem] lg:w-[16rem] h-auto z-20"/>
            <img
                src="/img/bottom-right.png"
                alt="Bottom Right"
                className="absolute w-[39rem] h-[38rem] right-[-410px] bottom-[-263px] z-[9999]"
            />
            <img
                src="/img/5.png"
                alt="Bottom Right"
                className="absolute"
                style={{ width: "18rem", height: "20rem", right: "35px", bottom: "114px" }}
            />
        </section>



    );
}