"use client";

import { motion } from "framer-motion";

// Data ko alag array mai rakhna code ko saaf aur asaan banata hai
const features = [
    {
        title: "Architectural Leadership Rooted in Execution",
        description: "We lead with experience, delivering hands-on results across identity, infrastructure, and IT transformation."
    },
    {
        title: "Proven Success in High-Risk and Regulated Environments",
        description: "From healthcare to finance, we’ve designed and secured systems where failure isn’t an option."
    },
    {
        title: "Fluent in the Tools That Matter",
        description: "Our team works directly with Delinea, CyberArk, BeyondTrust, and Microsoft Entra; not just advising, but also implementing."
    },
    {
        title: "Flexible Engagement, Real Outcomes",
        description: "Whether you need a strategic advisor, an embedded specialist, or a full project team, CipherCore scales to meet your challenge."
    }
];

export default function Why() {
    return (
        // --- MAIN SECTION ---
        // 1. Flexbox layout jo mobile par stack hoga aur desktop par side-by-side.
        <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#1a4562] font-tt-commons overflow-hidden">
            
            {/* --- DECORATIVE IMAGES (Responsively positioned) --- */}
            <img src="/img/45.png" alt="Top Right Decor" className="absolute top-[-5%] right-[0%] w-[40rem] h-auto z-0" />
            <img src="/img/66.png" alt="Bottom Right Decor" className="absolute bottom-[-15%] right-[20%] w-[20rem] h-auto opacity-40 z-0" />

            {/* --- LEFT COLUMN (Text Content) --- */}
            {/* 1. Yeh column 55% width lega. Padding di gayi hai. */}
            <div className="w-full lg:w-[56%] flex flex-col justify-center pb-16 px-8 sm:px-12 lg:pl-20 z-10">
                {/* Header: WHY + Logo */}
                <motion.div
                    className="flex items-center justify-center "
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[40px] font-bold text-[#8a9fc4]">WHY</h2>
                    <img src="/img/logo.png" alt="CipherCore Logo" className="w-64 h-auto ml-2" />
                </motion.div>

                {/* Features Section */}
                <motion.div
                    className="space-y-8" // Feature blocks ke darmiyan space
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{marginTop: "3rem"}}
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <img src="/img/lock.png" alt="lock icon" className="h-12 w-auto flex-shrink-0" />
                            <div>
                                <h4 className="text-white text-2xl lg:text-[28px] font-bold leading-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-300 text-lg lg:text-xl font-light mt-1">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* --- RIGHT COLUMN (Image) --- */}
            {/* 1. Yeh column 45% width lega aur mobile par hide ho jayega (ya aap isay dikha bhi saktay hain). */}
            {/* --- RIGHT COLUMN (Image) --- */}
<div className="hidden lg:flex w-[45%] items-center justify-end p-0">
  <motion.div
    className="w-full h-auto flex justify-end"
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
   <img
  src="/img/44.png" 
  alt="Team working on cybersecurity"
  className="w-full h-full object-cover rounded-lg z-[999]"
/>

  </motion.div>
</div>

        </section>
    );
}