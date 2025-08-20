"use client"

import { motion } from "framer-motion";

export default function HowWeDoIt() {
    return (
        <section className="relative h-[98vh] flex flex-col px-8 bg-[#1a4562] ">
            <img
                src="/img/how.png"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Heading */}
            <div
                className="absolute flex flex-col z-10"
                style={{
                    top: "68px",
                    left: "69%",
                    transform: "translateX(-43%)",
                    textAlign: "left",
                    maxWidth: "1000px",
                    width : '45%'
                }}
            >
                <motion.h2
                    style={{
                        fontFamily: "TT Commons Pro, sans-serif",
                        fontSize: "42px",
                        fontWeight: "bolder",
                        color: "#9fbef5",
                        marginBottom: "1rem",
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    HOW WE DO IT
                </motion.h2>

                <motion.h3
                    className="font-norwester text-[34px] font-bold text-white mb-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    DISCOVER. DESIGN. DELIVER
                </motion.h3>
            </div>

            {/* Content */}
           <motion.div
  className="relative z-10 max-w-5xl w-full flex flex-col items-center space-y-6"
  style={{
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "TT Commons Pro, sans-serif",
    fontSize: "20px",
    textAlign: "left",
    alignItems: "flex-start",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.h4
    style={{
      fontSize: "30px",
      fontWeight: "bold",
      color: "#ffffff",
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Our engagement model is simple and scalable:
  </motion.h4>

  <motion.h5
    className="mb-2 text-[28px] leading-[2rem]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <span className="font-bold">Discovery –</span> Uncover access risks,
    security gaps, and infrastructure challenges through collaborative
    analysis and technical discovery.
  </motion.h5>

  <motion.h5
    className="mb-2 text-[28px] leading-[2rem]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <span className="font-bold">Design –</span> Architect a tailored,
    scalable solution aligned to your environment and operational goals.
  </motion.h5>

  <motion.h5
    className="mb-2 text-[28px] leading-[2rem]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <span className="font-bold">Delivery –</span> Execute with precision.
    We implement securely, document thoroughly, and train your teams for
    lasting success.
  </motion.h5>
</motion.div>

        </section>
    );
}
