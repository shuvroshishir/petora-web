import { FaHeart, FaHome } from "react-icons/fa";
import { FaShieldDog } from "react-icons/fa6";

const WhyAdoptPets = () => {
    const features = [
        {
            icon: <FaHeart size={26} />,
            title: "Save a Life",
            description:
                "Give homeless pets a second chance and help them find a loving forever home.",
        },
        {
            icon: <FaHome size={26} />,
            title: "Find Loyal Companionship",
            description:
                "Pets bring unconditional love, emotional support, and happiness to your family.",
        },
        {
            icon: <FaShieldDog size={26} />,
            title: "Support Ethical Adoption",
            description:
                "Adopting helps reduce unethical breeding and supports responsible pet care.",
        },
    ];

    return (
        <section className="section bg-background">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title text-foreground">
                        Why Adopt Pets?
                    </h2>

                    <p className="section-description mx-auto">
                        Adopting a pet changes lives — both yours and theirs.
                        Discover the joy of giving animals a safe and loving
                        home.
                    </p>
                </div>

                <div className="grid-layout mt-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card transition-default p-8 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex-center mb-5 h-14 w-14 rounded-2xl bg-primary text-white">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-foreground">
                                {feature.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAdoptPets;