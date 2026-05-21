"use client";

import {
    FaPaw,
    FaStethoscope,
    FaHeartCircleCheck,
} from "react-icons/fa6";
import { ChevronDown } from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";


const PetAdoptionProcess = () => {
    const categories = [
        {
            title: "Pet Adoption",
            items: [
                {
                    title: "How can I adopt a pet from Petora?",
                    content:
                        "Browse available pets, open the pet details page, and submit an adoption request form. Once the owner approves your request, you can complete the adoption process.",
                },
                {
                    title: "Can I cancel my adoption request?",
                    content:
                        "Yes. You can manage and cancel your pending adoption requests anytime from the 'My Requests' section in your dashboard.",
                },
            ],
        },

        {
            title: "Pet Listings",
            items: [
                {
                    title: "Can I add my own pet for adoption?",
                    content:
                        "Yes. Registered users can add pet listings from the dashboard by providing pet details, health status, vaccination information, images, and location.",
                },
                {
                    title: "Are all pets verified before adoption?",
                    content:
                        "Yes. Pet owners provide detailed health and vaccination information, and every listing is reviewed to ensure a safe and trusted adoption experience.",
                },
            ],
        },

        {
            title: "Support & Safety",
            items: [
                {
                    title: "Is Petora free to use?",
                    content:
                        "Yes. Browsing pets and creating an account are completely free. Some pet owners may include an adoption fee to support pet care and medical expenses.",
                },
            ],
        },
    ];

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
                        How To Adopt
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

                {/* Faq */}
                <div className="flex w-full flex-col gap-6 mt-14">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                        <p className="mb-4 text-lg font-medium text-muted">
                            Everything you need to know about licensing and usage.
                        </p>
                    </div>
                    {categories.map((category) => (
                        <div key={category.title}>
                            <p className="text-md mb-2 font-medium text-muted">{category.title}</p>
                            <Accordion className="w-full" variant="surface">
                                {category.items.map((item, index) => (
                                    <Accordion.Item key={index}>
                                        <Accordion.Heading>
                                            <Accordion.Trigger>
                                                {item.title}
                                                <Accordion.Indicator>
                                                    <ChevronDown />
                                                </Accordion.Indicator>
                                            </Accordion.Trigger>
                                        </Accordion.Heading>
                                        <Accordion.Panel>
                                            <Accordion.Body>{item.content}</Accordion.Body>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default PetAdoptionProcess;