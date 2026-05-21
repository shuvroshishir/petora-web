import { FaBowlFood, FaDog, FaSyringe } from "react-icons/fa6";

const PetCareTips = () => {
    const tips = [
        {
            icon: <FaBowlFood size={24} />,
            title: "Healthy Nutrition",
            description:
                "Provide balanced meals and fresh water daily to keep pets healthy and energetic.",
        },
        {
            icon: <FaDog size={24} />,
            title: "Daily Exercise",
            description:
                "Regular walks and playtime improve physical and mental health for your pets.",
        },
        {
            icon: <FaSyringe size={24} />,
            title: "Regular Vaccination",
            description:
                "Keep vaccinations updated to protect pets from common diseases and infections.",
        },
    ];

    return (
        <section className="section bg-accent">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title text-foreground">
                        Pet Care Tips
                    </h2>

                    <p className="section-description mx-auto">
                        Helpful tips to ensure your pets stay healthy, active,
                        and happy every day.
                    </p>
                </div>

                <div className="grid-layout mt-12">
                    {tips.map((tip, index) => (
                        <div
                            key={index}
                            className="card p-8 transition-default hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex-center mb-5 h-14 w-14 rounded-2xl bg-primary text-white">
                                {tip.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-foreground">
                                {tip.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PetCareTips;