import {
    FaShieldHeart,
    FaStar,
    FaCertificate,
    FaUserGroup,
} from "react-icons/fa6";

const TrustedPlatform = () => {
    const stats = [
        {
            icon: <FaShieldHeart size={30} />,
            number: "100%",
            title: "Trusted Adoption Process",
        },
        {
            icon: <FaStar size={30} />,
            number: "4.9/5",
            title: "User Satisfaction Rating",
        },
        {
            icon: <FaCertificate size={30} />,
            number: "Certified",
            title: "Verified Pet Listings",
        },
        {
            icon: <FaUserGroup size={30} />,
            number: "5K+",
            title: "Happy Pet Lovers",
        },
    ];

    return (
        <section className="section bg-accent">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title text-foreground">
                        Trusted by Pet Lovers Everywhere
                    </h2>

                    <p className="section-description mx-auto">
                        Petora provides a safe, trusted, and caring platform
                        for connecting loving families with adorable pets.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="card transition-default flex flex-col items-center p-8 text-center hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex-center mb-5 h-16 w-16 rounded-2xl bg-primary text-white">
                                {stat.icon}
                            </div>

                            <h3 className="text-3xl font-black text-foreground">
                                {stat.number}
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                {stat.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedPlatform;