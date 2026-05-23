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
                        "Adopting a pet from Petora is simple and secure. First, browse available pets and choose the one that matches your lifestyle and preferences. Open the pet details page to view important information such as breed, age, vaccination status, health condition, and location. Then, submit an adoption request form with your contact information and adoption details. Once the pet owner reviews and approves your request, both parties can communicate and complete the adoption process safely.",
                },
                {
                    title: "Can I cancel my adoption request after submitting it?",
                    content:
                        "Yes. You can easily manage all your adoption requests from the 'My Requests' section in your dashboard. If your request is still pending and has not been approved by the pet owner, you can cancel it anytime. Once cancelled, the pet owner will be notified automatically, and the request will be removed from your active requests list.",
                },
                {
                    title: "How do I know if a pet is still available for adoption?",
                    content:
                        "Each pet listing on Petora displays its current adoption status in real time. If a pet is already adopted or unavailable, the listing will clearly indicate it. You can also check the latest activity on the pet details page to ensure the pet is still accepting adoption requests.",
                },
            ],
        },

        {
            title: "Pet Listings",
            items: [
                {
                    title: "Can I add my own pet for adoption?",
                    content:
                        "Yes. Registered users can create and manage pet listings directly from their dashboard. While adding a pet, you can provide detailed information including pet name, species, breed, age, gender, vaccination status, health condition, adoption fee, location, and pet images. Providing accurate and complete information helps adopters make informed decisions and increases the chances of finding a loving home quickly.",
                },
                {
                    title: "Are all pets verified before adoption?",
                    content:
                        "Petora encourages responsible and transparent pet adoption. Every pet listing is reviewed before being published to ensure that important information such as health condition, vaccination details, and ownership information is properly provided. While we strive to maintain a trusted platform, adopters are also encouraged to communicate directly with pet owners before finalizing the adoption.",
                },
                {
                    title: "Can I edit or remove my pet listing later?",
                    content:
                        "Yes. You have full control over your pet listings. From your dashboard, you can update pet information, upload new images, change adoption status, or remove the listing entirely whenever needed. This ensures your pet information always stays accurate and up to date.",
                },
            ],
        },

        {
            title: "Support & Safety",
            items: [
                {
                    title: "Is Petora free to use?",
                    content:
                        "Yes. Creating an account, browsing pets, and submitting adoption requests are completely free on Petora. However, some pet owners may request a small adoption fee to help cover vaccination, medical care, food, or other pet-related expenses. Any adoption fee will always be clearly mentioned in the pet listing.",
                },
                {
                    title: "How does Petora ensure a safe adoption experience?",
                    content:
                        "Petora focuses on creating a safe, trusted, and transparent adoption environment for both adopters and pet owners. We encourage users to provide accurate pet information, maintain respectful communication, and verify important details before completing an adoption. Users can also report suspicious activity or inappropriate listings directly through the platform for review.",
                },
                {
                    title: "What should I do if I face a problem during the adoption process?",
                    content:
                        "If you experience any issue while using Petora, you can contact our support team through the contact page or support section. Whether it is related to adoption requests, pet listings, communication issues, or account problems, our team will review the situation and provide assistance as quickly as possible.",
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