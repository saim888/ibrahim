"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero">
            <img src="/img/1.png" alt="Decoration" className="img1" />
            <img src="/img/2.png" alt="Decoration" className="img2" />
            <img src="/img/center.png" alt="Decoration" className="imgCenter" />
            <img src="/img/bottom-right.png" alt="Bottom Right" className="imgBottomRight" />
            <img src="/img/4.png" alt="Bottom Right Corner" className="img4" />
            <img src="/img/5.png" alt="5" className="img5" />

            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="logo"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            <div className="leftColumn">
                <motion.img
                    src="/img/main.png"
                    alt="Hero"
                    className="mainImage"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            <motion.div
                className="rightColumn"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <div className="textContainer">
                    <div className="textBlock">
                        <h1 className="textSmall">SECURE SOLUTIONS FOR</h1>
                        <h1 className="textLarge">TOMORROW'S</h1>
                        <h1 className="textLarge">CHALLENGES</h1>
                    </div>
                    <div className="itBox">
                        <h1 className="itText">IT</h1>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
