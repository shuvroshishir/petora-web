"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="section relative overflow-hidden bg-background">
            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl dark:bg-primary/10" />

            <div className="container">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-accent px-4 py-2 text-sm font-medium text-primary dark:border-neutral-700">
                            <FaHeart className="text-primary" />
                            Give Pets a Forever Home
                        </div>

                        {/* Heading */}
                        <div className="space-y-5">
                            <h1 className="max-w-2xl text-5xl font-black leading-tight text-foreground md:text-6xl">
                                Find Your
                                <span className="text-primary"> Perfect </span>
                                Furry Companion Today
                            </h1>

                            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                                Discover loving pets waiting for a caring home.
                                Browse adorable companions and start your
                                adoption journey with Petora.
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

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-[40px] border border-orange-100 bg-accent p-3 shadow-xl dark:border-neutral-800">
                            <Image
                                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                                alt="Cute Pet"
                                width={700}
                                height={700}
                                priority
                                className="h-125 w-full rounded-[32px] object-cover"
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 left-1/2 flex w-70 -translate-x-1/2 items-center gap-4 rounded-3xl border border-orange-100 bg-background p-4 shadow-xl dark:border-neutral-800">
                            <Image
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400&auto=format&fit=crop"
                                alt="Pet"
                                width={70}
                                height={70}
                                className="h-16 w-16 rounded-2xl object-cover"
                            />

                            <div>
                                <h4 className="font-bold text-foreground">
                                    Charlie
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    Friendly Golden Retriever
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Banner;