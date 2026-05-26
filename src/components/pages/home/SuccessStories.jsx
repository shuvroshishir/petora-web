import Image from "next/image";

import {
    FaStar,
} from "react-icons/fa6";

const SuccessStories = () => {

    const stories = [
        {
            petName: "Coco",
            petImage:
                "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=687&auto=format&fit=crop",

            reviewer: "Emma Watson",

            reviewerImage:
                "https://randomuser.me/api/portraits/women/44.jpg",

            story:
                "Coco filled our days with energy and joy. We couldn’t imagine life without her anymore. We always love Coco",
        },

        {
            petName: "Luna",
            petImage:
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",

            reviewer: "David Miller",

            reviewerImage:
                "https://randomuser.me/api/portraits/men/32.jpg",

            story:
                "Luna was shy at first, but now she’s the heart of our home. Adoption was the best decision ever.",
        },

        {
            petName: "Sarah",
            petImage:
                "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1170&auto=format&fit=crop",

            reviewer: "Sophia Lee",

            reviewerImage:
                "https://randomuser.me/api/portraits/women/68.jpg",

            story:
                "Adopting Sarah completely changed our lives. She brought endless happiness and love into our family.",
        },
    ];

    return (
        <section className="section overflow-hidden bg-background">

            <div className="container">

                {/* Header */}
                <div className="text-center">



                    <h2 className="section-title text-foreground">
                        Success Stories
                    </h2>

                    <p className="section-description mx-auto">
                        Heartwarming stories from families
                        who found perfect
                        companions through Petora.
                    </p>
                    <div className="mt-5 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                        Happy Families
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-9 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {stories.map((story, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[32px] border border-primary/10 bg-accent shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Glow */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                            {/* Pet Image */}
                            <div className="relative h-72 overflow-hidden">

                                <Image
                                    src={story.petImage}
                                    alt={story.petName}
                                    fill
                                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Pet Name */}
                                <div className="absolute bottom-5 left-5">

                                    <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                                        {story.petName}
                                    </div>

                                </div>

                            </div>

                            {/* Content */}
                            <div className="relative p-6">

                                {/* Stars */}
                                <div className="flex items-center gap-1 text-yellow-400">

                                    {Array.from({
                                        length: 5,
                                    }).map(
                                        (_, i) => (
                                            <FaStar
                                                key={
                                                    i
                                                }
                                            />
                                        )
                                    )}

                                </div>

                                {/* Story */}
                                <p className="mt-5 leading-8 text-muted-foreground">
                                    &quot;
                                    {story.story}
                                    &quot;
                                </p>

                                {/* Reviewer */}
                                <div className="mt-8 flex items-center gap-4">

                                    {/* Reviewer Image */}
                                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-primary/10">

                                        <Image
                                            src={
                                                story.reviewerImage
                                            }
                                            alt={
                                                story.reviewer
                                            }
                                            fill
                                            sizes="56px"
                                            className="object-cover"
                                        />

                                    </div>

                                    {/* Reviewer Info */}
                                    <div>

                                        <h3 className="font-bold text-foreground">
                                            {
                                                story.reviewer
                                            }
                                        </h3>

                                        <p className="text-sm text-muted-foreground">
                                            Pet Adopter
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default SuccessStories;