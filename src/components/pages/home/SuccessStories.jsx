import Image from "next/image";

const SuccessStories = () => {
    const stories = [
        {
            name: "Coco",
            image:
                "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story:
                "Coco filled our days with energy and joy. We couldn’t imagine life without her anymore. ",
        },
        {
            name: "David & Luna",
            image:
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
            story:
                "Luna was shy at first, but now she’s the heart of our home. Adoption was the best decision ever.",
        },
        {
            name: "Sarah",
            image:
                "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            story:
                "Adopting Sarah completely changed our lives. He brought endless happiness and love into our family.",
        },
    ];

    return (
        <section className="section bg-background">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title text-foreground">
                        Success Stories
                    </h2>

                    <p className="section-description mx-auto">
                        Real adoption stories from happy families who found
                        their perfect furry companions.
                    </p>
                </div>

                <div className="grid-layout mt-12">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="card overflow-hidden transition-default hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Image
                                src={story.image}
                                alt={story.name}
                                width={500}
                                height={300}
                                className="h-64 w-full object-cover rounded-lg"
                            />

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-foreground">
                                    {story.name}
                                </h3>

                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    {story.story}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;