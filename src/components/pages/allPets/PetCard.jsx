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
        <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/10 bg-white dark:bg-[#1f1f1f] shadow-sm transition-all duration-300 hover:-translate-y-1 ">

            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">

                <Image
                    src={image}
                    alt={petName}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Tags */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">

                    {/* Species */}
                    <div className="rounded-full bg-background/90 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md">
                        {species}
                    </div>

                    {/* Gender */}
                    <div className="flex-center h-11 w-11 rounded-full bg-background/90 text-primary backdrop-blur-md">
                        {gender === "Male" ? (
                            <FaMars />
                        ) : (
                            <FaVenus />
                        )}
                    </div>

                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-5">

                    <div className="flex items-end justify-between gap-4">

                        {/* Name */}
                        <div className="min-w-0 flex-1">

                            <h2 className="truncate text-3xl font-black text-white">
                                {petName}
                            </h2>

                            <p className="mt-1 line-clamp-2 text-sm text-white/80">
                                {breed}
                            </p>

                        </div>

                        {/* Fee */}
                        <div className="shrink-0 rounded-2xl bg-primary px-4 py-2 text-center shadow-lg">

                            <p className="text-xs font-medium text-white/80">
                                Adoption Fee
                            </p>

                            <h4 className="mt-1 text-lg font-black text-white">
                                ${adoptionFee}
                            </h4>

                        </div>

                    </div>

                </div>

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Meta */}
                <div className="flex items-center gap-4 rounded-2xl bg-accent p-4">

                    {/* Age */}
                    <div className="shrink-0">

                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Age
                        </p>

                        <h4 className="mt-1 text-xl font-black text-foreground">
                            {age} Years
                        </h4>

                    </div>

                    {/* Divider */}
                    <div className="h-12 w-px shrink-0 bg-primary/10" />

                    {/* Location */}
                    <div className="min-w-0 flex-1">

                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Location
                        </p>

                        <div className="mt-1 flex items-center gap-2">

                            <FaLocationDot className="shrink-0 text-primary" />

                            <span className="truncate font-semibold text-foreground">
                                {location}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-3">

                    {/* Details */}
                    <div className="flex-1">

                        <Link
                            href={`/all-pets/${_id}`}
                            className="block"
                        >
                            <Button
                                size="lg"
                                className="bg-gradient h-12 w-full font-semibold text-white hover:brightness-105"
                            >
                                View Details
                            </Button>
                        </Link>

                    </div>

                    {/* Adopt */}
                    <div className="flex-1">

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 w-full border-2 border-primary/20 font-semibold text-primary hover:bg-primary/10"
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