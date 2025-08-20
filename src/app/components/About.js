"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sentence = [
    "We help businesses",
    "protect what matters most,",
    "with precision, zero",
    "standing access, and",
    "transformative IT strategies."
];

export default function About() {
    const fullText = "Redefining Privileged Access, One Policy at a Time.";

    return (
        <section
            id="about"
            className="relative flex flex-col justify-center items-center min-h-[90vh] py-20 px-4 sm:px-8 text-center bg-[#1a4562] overflow-hidden"
        >
            {/* Background & Decorative Images (No changes) */}
            <Image src="/img/transparent.png" alt="Overlay" layout="fill" objectFit="cover" className="absolute inset-0" />
            <Image src="/img/circle.png" alt="Center Left" width={560} height={480} className="absolute left-[-356px] top-1/2 transform -translate-y-1/2 z-[9999]" />
            <motion.div className="absolute w-[25rem] h-[23rem] right-[-36px] bottom-[30px] z-[9999]" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 3.5, ease: "easeOut", type: "spring", stiffness: 120, damping: 35 }}>
                <Image src="/img/spiral.png" alt="Bottom Right" layout="fill" objectFit="contain" />
            </motion.div>
            <div className="absolute w-[21rem] h-[25rem] right-[-127px] top-[-280px] z-[9999]">
                <Image src="/img/12.png" alt="Top Right" layout="fill" objectFit="contain" />
            </div>

            {/* --- Section Content --- */}
            <div className="relative z-10 max-w-4xl space-y-16 font-tt-commons">

                {/* --- First Text Block --- */}
                <motion.p
                    className="text-white text-xl md:text-2xl lg:text-[30px] font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
                    viewport={{ once: true }}
                >
                    {fullText}
                </motion.p>

                {/* --- Second Text Block --- */}
                <div className="text-gray-200 text-3xl md:text-4xl lg:text-[42px] font-medium leading-tight lg:leading-snug">
                    {sentence.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: index * 0.4,
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            {line}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}