"use client";

import Image from "next/image";

// Ab yahan CSS import ki zaroorat nahi hai, kyunki styling globals.css se aayegi

export default function Hero() {
    return (
        <section className="hero-section">
            {/* ---- LOGO ---- */}
            <img
                src="/img/logo.png"
                alt="Logo"
                className="hero-logo"
            />

            {/* ---- BACKGROUND DECORATION IMAGES ---- */}
            <Image
                src="/img/1.png"
                alt="Center Left Decoration"
                width={450}
                height={480}
                className="hero-bg-image-1"
            />
            <img
                src="/img/2.png"
                alt="Top Right Decoration"
                className="hero-bg-image-2"
            />
            <img
                src="/img/center.png"
                alt="Top Center Decoration"
                className="hero-bg-image-center"
            />

            <div className="hero-bottom-right-container">
                <Image
                    src="/img/bottom-right.png"
                    alt="Bottom Right Decoration"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            <img
                src="/img/4.png"
                alt="Bottom Corner Decoration"
                className="hero-bg-image-4"
            />
            <img
                src="/img/5.png"
                alt="Bottom Decoration 5"
                className="hero-bg-image-5"
            />

            {/* ---- LEFT COLUMN (MAIN IMAGE) ---- */}
            <div className="hero-left-column">
                <img
                    src="/img/main.png"
                    alt="Hero Main Image"
                    className="hero-main-image"
                />
            </div>

            {/* ---- RIGHT COLUMN (TEXT CONTENT) ---- */}
            <div className="hero-right-column">
                <div className="hero-text-container">
                    {/* Text block */}
                    <div className="hero-text-block">
                        <h1 className="hero-heading">
                            SECURE SOLUTIONS FOR
                        </h1>
                        <h1 className="hero-heading-bold">
                            TOMORROW'S
                        </h1>
                        <h1 className="hero-heading-bold">
                            CHALLENGES
                        </h1>
                    </div>

                    {/* "IT" box */}
                    <div className="hero-it-box">
                        <h1 className="hero-it-text">IT</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}