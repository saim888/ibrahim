// "use client";
//
// import { motion } from "framer-motion";
//
// export default function Hero() {
//     return (
//         <section
//             className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16"
//             style={{ backgroundColor: "#05233c" }}
//         >
//             {/* --- DECORATIVE BACKGROUND IMAGES --- */}
//             <img src="/img/1.png" alt="Decoration" className="absolute top-[-6vh] left-[-17vw] w-[40vw] max-w-[470px] hidden lg:block" />
//             <img src="/img/2.png" alt="Decoration" className="absolute top-[-27vh] right-0 w-[34vw] max-w-[410px] hidden lg:block" />
//             <img src="/img/center.png" alt="Decoration" className="absolute top-[-51vh] left-[50%] -translate-x-1/2 w-[50vw] max-w-[500px] hidden lg:block" />
//             <img src="/img/bottom-right.png" alt="Bottom Right" className="absolute bottom-[-20vh] right-[-24vw] w-[50vw] max-w-[500px] hidden lg:block z-0" />
//             <img src="/img/4.png" alt="Bottom Right Corner" className="absolute bottom-0 right-[-5.3vw] w-[20vw] max-w-[220px] hidden lg:block z-20" />
//             <img src="/img/5.png" alt="5" className="absolute bottom-[23vh] right-[2vw] w-[20vw] max-w-[200px] hidden lg:block z-10" />
//
//             {/* --- LOGO --- */}
//             <motion.img
//                 src="/img/logo.png"
//                 alt="Logo"
//                 className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 sm:w-32 lg:top-[2.3rem] lg:left-[6rem] lg:w-[180px] z-30"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 1 }}
//             />
//
//             {/* --- MAIN CONTAINER WITH MAX WIDTH 1200PX --- */}
//             <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between z-10 gap-8 md:gap-12">
//
//                 {/* --- LEFT COLUMN (MAIN IMAGE) --- */}
//                 <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-24 lg:pt-0">
//                     <motion.img
//                         src="/img/main.png"
//                         alt="Hero"
//                         className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 1.5, ease: "easeOut" }}
//                     />
//                 </div>
//
//                 {/* --- RIGHT COLUMN (TEXT CONTENT) --- */}
//                 <motion.div
//                     className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 sm:p-6 lg:p-12"
//                     initial={{ x: 50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
//                 >
//                     <div className="flex flex-col sm:flex-row items-center lg:flex-col lg:items-start gap-4 max-w-[500px]">
//                         {/* Text block */}
//                         <div className="text-center lg:text-left">
//                             <h1 className="text-lg sm:text-xl md:text-2xl font-normal">SECURE SOLUTIONS FOR</h1>
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">TOMORROW'S</h1>
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">CHALLENGES</h1>
//                         </div>
//
//                         {/* "IT" box */}
//                         <div className="flex items-center justify-center bg-[#8a9fc4] px-4 py-1 mt-2 sm:mt-0">
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">IT</h1>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden px-4 sm:px-6 md:px-12 lg:px-16"
            style={{ backgroundColor: "#05233c" }}
        >
            {/* --- DECORATIVE BACKGROUND IMAGES --- */}
            <img
                src="/img/1.png"
                alt="Decoration"
                className="absolute top-[-6vh] left-[-10vw] sm:left-[-12vw] md:left-[-15vw] w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[40vw] max-w-[470px]"
            />
            <img
                src="/img/2.png"
                alt="Decoration"
                className="absolute top-[-27vh] right-[-5vw] sm:right-[-8vw] md:right-0 w-[30vw] sm:w-[25vw] md:w-[22vw] lg:w-[34vw] max-w-[410px]"
            />
            <img
                src="/img/center.png"
                alt="Decoration"
                className="absolute top-[-51vh] left-[50%] -translate-x-1/2 w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[50vw] max-w-[500px]"
            />
            <img
                src="/img/bottom-right.png"
                alt="Bottom Right"
                className="absolute bottom-[-20vh] right-[-20vw] sm:right-[-15vw] md:right-[-10vw] w-[40vw] sm:w-[35vw] md:w-[30vw] lg:w-[50vw] max-w-[500px] z-0"
            />
            <img
                src="/img/4.png"
                alt="Bottom Right Corner"
                className="absolute bottom-0 right-[-5vw] sm:right-[-3vw] md:right-0 w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[20vw] max-w-[220px] z-20"
            />
            <img
                src="/img/5.png"
                alt="5"
                className="absolute bottom-[23vh] right-[2vw] sm:bottom-[20vh] sm:right-[1vw] md:bottom-[18vh] md:right-[0.5vw] w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[20vw] max-w-[200px] z-10"
            />

            {/* --- LOGO --- */}
            <motion.img
                src="/img/logo.png"
                alt="Logo"
                className="absolute top-4 left-4 sm:top-6 sm:left-6 w-24 sm:w-32 lg:top-[2.3rem] lg:left-[6rem] lg:w-[180px] z-30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* --- MAIN CONTAINER WITH MAX WIDTH 1200PX --- */}
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between z-10 gap-8 md:gap-12">

                {/* --- LEFT COLUMN (MAIN IMAGE) --- */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-24 lg:pt-0">
                    <motion.img
                        src="/img/main.png"
                        alt="Heroo"
                        className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>

                {/* --- RIGHT COLUMN (TEXT CONTENT) --- */}
                <motion.div
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 p-4 sm:p-6 lg:p-12"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row items-center lg:flex-col lg:items-start gap-4 max-w-[500px]">
                        {/* Text block */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-normal">SECURE SOLUTIONS FOR</h1>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">TOMORROW'S</h1>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">CHALLENGES</h1>
                        </div>

                        {/* "IT" box */}
                        <div className="flex items-center justify-center bg-[#8a9fc4] px-4 py-1 mt-2 sm:mt-0">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">IT</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
