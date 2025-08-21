"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
    return (
        <section
            id="services"
            className="relative min-h-screen flex justify-center items-center py-20 px-4 sm:px-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/img/who.png')" }}
        >
            {/* Decorative Images (No changes) */}
            <img src="/img/5.png" alt="Top Left" className="absolute z-[9999]" style={{ top: "-17rem", left: "5rem", width: "30rem", height: "35rem", transform: "scaleX(-1)" }} />
            <img src="/img/22.png" alt="Bottom Left" className="absolute z-[9999]" style={{ bottom: "-288px", left: "-148px", width: "30rem", height: "30rem" }} />

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center space-y-12">

                {/* Heading WHO WE ARE (No changes) */}
                <motion.h3
                    className="font-tt-commons text-3xl lg:text-[42px] font-bold text-[#8a9fc4]"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    WHO WE ARE
                </motion.h3>

                <div className="font-tt-commons text-xl lg:text-[30px] font-light text-white text-left leading-relaxed space-y-8">

                    {/* --- First Paragraph with Logo (Using FLOAT method - The CORRECT way) --- */}
                    <motion.div
                        className="clearfix" // Yeh class float ko clear karne ke liye zaroori hai
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="/img/logo.png"
                            alt="CipherCore Logo"
                            className="absolute img-log "
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <p>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is a cybersecurity engineering firm focused on Identity, Privileged Access,
                            and IT transformation. We help businesses secure the foundations of their
                            digital environments, whether that means architecting from scratch,
                            deploying modern IAM/PAM platforms, or augmenting internal teams. From
                            startup to enterprise, we build solutions that scale cleanly and
                            securely.
                        </p>
                    </motion.div>

                    {/* --- Second & Third Paragraphs (No changes) --- */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Our team brings deep technical leadership and real-world execution. We’ve
                        led privileged access deployments in highly regulated industries, guided IT
                        transformations from consumer-grade chaos to enterprise readiness, and
                        equipped in-house teams with the tools and training to succeed.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Whether you need architecture, implementation, or trusted augmentation,
                        CipherCore delivers with clarity, control, and commitment.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}