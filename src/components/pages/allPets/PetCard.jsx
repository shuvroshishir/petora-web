import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
    FaLocationDot,
    FaMars,
    FaVenus,
} from "react-icons/fa6";

const PetCard = ({ pet }) => {
    const {
        _id,
        petName,
        species,
        breed,
        age,
        gender,
        image,
        location,
        adoptionFee,
    } = pet;

    return (
        <div className="group overflow-hidden rounded-[28px] border border-primary/10 bg-white dark:bg-[#1f1f1f] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

                <Image
                    src={image}
                    alt={petName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                {/* Species */}
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md">
                    {species}
                </div>

                {/* Gender */}
                <div className="absolute right-4 top-4 flex-center h-11 w-11 rounded-full bg-background/90 text-primary backdrop-blur-md">
                    {gender === "Male" ? (
                        <FaMars />
                    ) : (
                        <FaVenus />
                    )}
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 w-full p-5">

                    <div className="flex items-end justify-between gap-4">

                        <div>
                            <h2 className="text-3xl font-black text-white">
                                {petName}
                            </h2>

                            <p className="mt-1 text-sm text-white/80">
                                {breed}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-primary px-4 py-2 text-center shadow-lg">
                            <p className="text-xs font-medium text-white/80">
                                Adoption Fee
                            </p>

                            <h4 className="text-lg font-bold text-white">
                                ${adoptionFee}
                            </h4>
                        </div>

                    </div>

                </div>

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Meta */}
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-accent p-4">

                    {/* Age */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Age
                        </p>

                        <h4 className="mt-1 text-lg font-bold text-foreground">
                            {age} Years
                        </h4>
                    </div>

                    {/* Divider */}
                    <div className="h-10 w-px bg-primary/10" />

                    {/* Location */}
                    <div className="flex-1 text-right">

                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Location
                        </p>

                        <div className="mt-1 flex items-center justify-end gap-2 text-foreground">
                            <FaLocationDot className="text-primary" />

                            <span className="truncate font-semibold">
                                {location}
                            </span>
                        </div>

                    </div>

                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">

                    <div className="flex-1">
                        <Link href={`/all-pets/${_id}`}>
                            <Button
                                size="lg"
                                className="bg-gradient w-full font-semibold text-white hover:brightness-105"
                            >
                                View Details
                            </Button>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full border-2 border-primary/20 hover:bg-primary/10 font-semibold text-primary"
                        >
                            Adopt Now
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PetCard;