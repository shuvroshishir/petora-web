"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
    FaArrowRight,
    FaHeart,
    FaPaw,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Banner = () => {

    return (
        <section className="section relative overflow-hidden bg-background">

            {/* Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl dark:bg-primary/10" />

            <div className="container">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Content */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.6,
                        }}

                        className="space-y-8"
                    >

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-accent px-4 py-2 text-sm font-medium text-primary">

                            <FaHeart />

                            Give Pets a Forever Home

                        </div>

                        {/* Heading */}
                        <div className="space-y-5">

                            <h1 className="max-w-2xl text-5xl font-black leading-tight text-foreground md:text-6xl">

                                Find Your
                                <span className="text-primary">
                                    {" "}
                                    Perfect{" "}
                                </span>

                                Furry Companion Today

                            </h1>

                            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">

                                Discover loving pets waiting
                                for a caring home. Browse
                                adorable companions and
                                start your adoption journey
                                with Petora.

                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">

                            <Link
                                href="/all-pets"
                                className="group inline-flex items-center gap-3 rounded-full bg-gradient px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105"
                            >

                                Adopt Now

                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

                            </Link>

                            <Link
                                href="/about"
                                className="rounded-full border border-primary px-7 py-3.5 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                            >

                                Learn More

                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">

                            <div>

                                <h3 className="text-3xl font-black text-foreground">
                                    500+
                                </h3>

                                <p className="text-muted-foreground">
                                    Pets Adopted
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-black text-foreground">
                                    120+
                                </h3>

                                <p className="text-muted-foreground">
                                    Happy Families
                                </p>

                            </div>

                            <div>

                                <h3 className="text-3xl font-black text-foreground">
                                    24/7
                                </h3>

                                <p className="text-muted-foreground">
                                    Adoption Support
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right Grid Images */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}

                        transition={{
                            duration: 0.7,
                        }}

                        className="relative mx-auto mt-10 w-full max-w-[620px] lg:mt-0"
                    >

                        {/* Floating Badge */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}

                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}

                            className="absolute left-2 top-10 z-20 hidden rounded-3xl border border-primary/10 bg-background/85 px-5 py-4 shadow-2xl backdrop-blur-xl md:block"
                        >

                            <div className="flex items-center gap-4">

                                <div className="flex-center h-14 w-14 rounded-2xl bg-primary/10 text-2xl text-primary">

                                    <FaPaw />

                                </div>

                                <div>

                                    <h4 className="text-xl font-black text-foreground">
                                        500+
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        Pets Adopted
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* Grid */}
                        <div className="grid h-[420px] grid-cols-2 gap-4 sm:h-[520px]">

                            {/* Big Image */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: [0, -4, 0],
                                }}

                                transition={{
                                    opacity: {
                                        duration: 0.8,
                                        delay: 0.2,
                                    },

                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}

                                whileHover={{
                                    y: -4,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}

                                className="relative row-span-2 overflow-hidden rounded-[30px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] sm:rounded-[40px]"
                            >

                                <Image
                                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                                    alt="Dog"
                                    fill
                                    priority
                                    sizes="(max-width:768px) 100vw, 50vw"
                                    className="object-cover transition duration-700 hover:scale-110"
                                />

                                {/* Shine */}
                                <motion.div
                                    animate={{
                                        x: ["-120%", "220%"],
                                    }}

                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 2,
                                        delay: 1,
                                    }}

                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                {/* Floating Text */}
                                <motion.div
                                    animate={{
                                        y: [0, -6, 0],
                                    }}

                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}

                                    className="absolute bottom-4 left-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl"
                                >

                                    <h3 className="text-lg font-black text-white">
                                        Charlie
                                    </h3>

                                    <p className="text-sm text-white/80">
                                        Friendly Golden Retriever
                                    </p>

                                </motion.div>

                            </motion.div>

                            {/* White Persian Cat */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: [0, -4, 0],
                                }}

                                transition={{
                                    opacity: {
                                        duration: 0.8,
                                        delay: 0.2,
                                    },

                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}

                                whileHover={{
                                    y: -4,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}

                                className="group relative overflow-hidden rounded-[26px] shadow-[0_15px_40px_-12px_rgba(0,0,0,0.25)] sm:rounded-[32px]"
                            >

                                <Image
                                    src="https://images.unsplash.com/photo-1631347253505-85f28e041f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlJTIwY2F0fGVufDB8fDB8fHww"
                                    alt="White Persian Cat"
                                    fill
                                    sizes="(max-width:768px) 100vw, 25vw"
                                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                                />

                                {/* Shine */}
                                <motion.div
                                    animate={{
                                        x: ["-120%", "220%"],
                                    }}

                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 2,
                                        delay: 1,
                                    }}

                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                />

                            </motion.div>

                            {/* bird */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: [0, 4, 0],
                                }}

                                transition={{
                                    opacity: {
                                        duration: 0.8,
                                        delay: 0.4,
                                    },

                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}

                                whileHover={{
                                    y: -4,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}

                                className="group relative overflow-hidden rounded-[26px] shadow-[0_15px_40px_-12px_rgba(0,0,0,0.25)] sm:rounded-[32px]"
                            >

                                <Image
                                    src="https://mostbeautifulbirds.com/wp-content/uploads/2025/02/Scarlet-Most-Beautiful-birds.webp"
                                    alt="Rabbit"
                                    fill
                                    sizes="(max-width:768px) 100vw, 25vw"
                                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                                />

                                {/* Shine */}
                                <motion.div
                                    animate={{
                                        x: ["-120%", "220%"],
                                    }}

                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 2,
                                        delay: 2,
                                    }}

                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                />

                            </motion.div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default Banner;