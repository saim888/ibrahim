"use client"

import { motion } from "framer-motion";

export default function WhatWeDo() {
    return (
        <section
            className="relative h-[109vh] py-20 px-8"
            style={{ backgroundColor: "#05233c" }}
        >
            <div
                className="absolute top-0 flex items-center justify-center"
                style={{
                    left: "0%",
                    width: "45%",
                    height: "70vh",
                    backgroundColor: "rgb(26, 69, 98)",
                    zIndex: 1,
                }}
            >
                <h2
                    style={{
                        fontFamily: "TT Commons Pro, sans-serif",
                        fontSize: "42px",
                        fontWeight: "bold",
                        color: "#9fbef5",
                        textAlign: "center",
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        WHAT WE DO
                    </motion.span>
                </h2>
            </div>

            <img
                src="/img/33.png"
                alt="Lower Left"
                className="absolute z-[9999]"
                style={{ bottom: "105px", left: "125px", width: "30rem", height: "25rem" }}
            />
            <img
                src="/img/32.png"
                alt="Top Right"
                className="absolute z-[9999]"
                style={{ top: "50px", right: "0px", width: "16rem", height: "14rem" }}
            />



            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col justify-center"
                style={{ width: "54%", marginLeft: "50%" }}
            >
                <ul
                    className="text-white font-light"
                    style={{
                        fontFamily: "TT Commons Pro, sans-serif",
                        lineHeight: "2.5rem",
                        textAlign: "left",
                    }}
                >
                    {/* Intro heading */}
                    <li className="list-none">
                        <h3 className="font-bold mb-4 text-[24px]" style={{ width: "75%" }}>
                            Strategic solutions, built with a deep understanding of your environment.
                        </h3>
                    </li>

                    {/* PAM Section */}
                    <li className="font-bold mt-4 text-[22px] list-none">
                        Privileged Access Management (PAM)
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Secure credential vaulting & rotation
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Just-in-time access provisioning
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Session monitoring with real-time alerts
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Governance over vendor and third-party access
                    </li>

                    {/* Identity & IAM Section */}
                    <li className="font-bold mt-4 text-[22px] list-none">
                        Identity Architecture & IAM
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        SSO and adaptive MFA integration
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Role-based access control (RBAC)
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Automated user lifecycle (JML) workflows
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Design for Azure AD and AWS IAM
                    </li>

                    {/* Hybrid Infrastructure Section */}
                    <li className="font-bold mt-4 text-[22px] list-none">
                        Hybrid Infrastructure Security
                    </li>
                    <li className="text-[20px] ml-6 list-disc">Cloud-native PAM for AWS</li>
                    <li className="text-[20px] ml-6 list-disc">
                        Secure access for on-prem/legacy systems
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Compliance frameworks (ISO 27001, SOC 2, HIPAA)
                    </li>

                    {/* IT Transformation Section */}
                    <li className="font-bold mt-4 text-[22px] list-none">
                        IT Transformation
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Cloud migration & hybrid strategy
                    </li>
                    <li className="text-[20px] ml-6 list-disc">Network modernization</li>
                    <li className="text-[20px] ml-6 list-disc">
                        Application optimization & hardening
                    </li>
                    <li className="text-[20px] ml-6 list-disc">
                        Data center & server lifecycle engineering
                    </li>
                </ul>
            </motion.div>
        </section>
    );
}
