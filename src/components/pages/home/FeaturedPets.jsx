"use client";

import { useRef } from "react";

import {
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa6";

import PetCard from "../allPets/PetCard";

const FeaturedPets = ({ pets }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const scrollAmount = 360;

        scrollRef.current.scrollBy({
            left:
                direction === "left"
                    ? -scrollAmount
                    : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="section overflow-hidden bg-accent">

            <div className="container">

                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    <div>
                        <h2 className="section-title text-foreground">
                            Featured Pets
                        </h2>

                        <p className="section-description">
                            Meet adorable pets waiting for their forever homes.
                        </p>
                    </div>

                    {/* Slider Buttons */}
                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => scroll("left")}
                            className="flex-center h-12 w-12 rounded-2xl border border-primary/10 bg-background text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                            <FaArrowLeft />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="flex-center h-12 w-12 rounded-2xl border border-primary/10 bg-background text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                            <FaArrowRight />
                        </button>

                    </div>

                </div>

                {/* Slider */}
                <div
                    ref={scrollRef}
                    className="mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >

                    {pets.map((pet) => (
                        <div
                            key={pet._id}
                            className="w-[320px] shrink-0"
                        >
                            <PetCard pet={pet} />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default FeaturedPets;