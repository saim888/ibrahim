"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // CHANGE: Imported Image component

export function Contact() {
    return (
        <section
            id="contact"
            className="relative flex justify-center items-start min-h-screen overflow-hidden"
            style={{backgroundColor: "#05233c"}}
        >
            <div className="container mx-auto p-8 grid md:grid-cols-2 gap-16 z-10">
                {/* Form Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <div className="flex space-x-4 mt-1">
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@example.com"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Tell us a little about your company, project, or what brought you here.
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full text-white py-3 px-6 rounded-md"
                                style={{backgroundColor: "#1f2a4b"}}
                            >
                                Submit
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-2">Powered</p>
                        </div>
                    </form>
                </div>

                {/* Text Section */}
                <motion.div
                    className="text-white"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <h2 className="text-4xl font-bold mb-4" style={{color: "#8a9fc4"}}>
                        LET&apos;S WORK TOGETHER.
                    </h2>
                    <p className="text-xl text-gray-300">
                        Reach out today to discuss your IAM, PAM or IT challenges.
                    </p>
                </motion.div>
            </div>

            {/* CHANGE: Replaced <img> with <Image> and added dimensions */}
            <Image
                src="/img/wave.png"
                alt="Decorative wave design"
                width={300} // Please verify this width
                height={150} // Please verify this height
                className="absolute bottom-0 right-0 z-0"
            />

            {/* Footer Section */}
            <div className="absolute bottom-4 text-gray-400 text-sm z-10">
                © [2025] CipherCore Technologies, LLC. All rights reserved.
            </div>
        </section>
    );
}