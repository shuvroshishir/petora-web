"use client";

import {
    FaPaw,
    FaStethoscope,
    FaHeartCircleCheck,
} from "react-icons/fa6";

const PetAdoptionProcess = () => {
    const steps = [
        {
            icon: <FaPaw size={28} />,
            title: "Choose Your Pet",
            description:
                "Browse hundreds of adorable pets and find the perfect companion for your lifestyle.",
        },
        {
            icon: <FaStethoscope size={28} />,
            title: "Verified Health Check",
            description:
                "All pets go through proper health and vaccination verification before adoption.",
        },
        {
            icon: <FaHeartCircleCheck size={28} />,
            title: "Bring Them Home",
            description:
                "Complete the adoption process and welcome your new furry friend into your family.",
        },
    ];

    return (
        <section className="section bg-background">
            <div className="container">
                {/* Section Header */}
                <div className="text-center">
                    <h2 className="section-title text-foreground">
                        Simple Adoption Process
                    </h2>

                    <p className="section-description mx-auto">
                        Adopting your new best friend is easy, safe, and
                        stress-free with Petora.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="card transition-default relative overflow-hidden p-8 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Step Number */}
                            <span className="absolute right-6 top-5 text-6xl font-black text-primary/10">
                                0{index + 1}
                            </span>

                            {/* Icon */}
                            <div className="flex-center mb-6 h-16 w-16 rounded-2xl bg-primary text-white">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-foreground">
                                {step.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PetAdoptionProcess;