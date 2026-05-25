import Image from "next/image";

import {
    FaLocationDot,
    FaShieldDog,
    FaSyringe,
    FaMars,
    FaArrowLeft,
} from "react-icons/fa6";

import AdoptionForm from "@/components/pages/allPets/AdoptionForm";

import { getSinglePet } from "@/actions/getSinglePet";

import { getCurrentUser } from "@/utils/getCurrentUser";
import { PiHeartbeatFill } from "react-icons/pi";
import Link from "next/link";
import { Button } from "@heroui/react";
import NoAdoptionCard from "@/components/pages/allPets/NoAdoptionCard";
import AlreadyRequestedCard from "@/components/pages/allPets/AlreadyRequestedCard";

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;

    const pet = await getSinglePet(id);

    const user = await getCurrentUser();

    const existingRequestRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/existing?petId=${pet._id}&email=${user.email}`,
        { cache: "no-store" }
    );
    const existingRequest = await existingRequestRes.json();

    return (
        <section className="section">

            <div className="container">
                {/* Top Header */}
                <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    {/* Left */}
                    <div>

                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Pet Details
                        </p>

                        <h1 className="mt-2 text-3xl font-black text-foreground sm:text-5xl">
                            Meet {pet.petName}
                        </h1>

                    </div>

                    {/* Right */}
                    <Link href="/all-pets">

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 border-2 border-primary/20 px-6 font-semibold text-primary hover:bg-primary/10"
                        >
                            <FaArrowLeft />
                            Back to All Pets
                        </Button>

                    </Link>

                </div>

                <div className="grid gap-8 xl:grid-cols-[1fr_420px]">

                    {/* Left */}
                    <div>

                        {/* Hero */}
                        <div className="overflow-hidden rounded-[36px] border border-primary/10 bg-background">

                            {/* Image */}
                            <div className="relative h-[320px] md:h-[500px]">

                                <Image
                                    src={pet.image}
                                    alt={pet.petName}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 900px"
                                    priority
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Species */}
                                <div className="absolute left-6 top-6 rounded-full bg-background/90 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-md">
                                    {pet.species}
                                </div>

                                {/* Bottom */}
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">

                                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                                        <div>

                                            <h1 className="text-4xl font-black text-white md:text-6xl">
                                                {pet.petName}
                                            </h1>

                                            <p className="mt-2 text-lg text-white/80">
                                                {pet.breed}
                                            </p>

                                        </div>

                                        {/* Fee */}
                                        <div className="w-fit rounded-3xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl">

                                            <p className="text-sm text-white/70">
                                                Adoption Fee
                                            </p>

                                            <h2 className="mt-1 text-4xl font-black text-white">
                                                ${pet.adoptionFee}
                                            </h2>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Stats */}
                            <div className="grid gap-5 border-t border-primary/10 p-5 sm:grid-cols-2 lg:grid-cols-4">

                                <div className="rounded-3xl bg-accent p-5">

                                    <div className="flex items-center gap-2 text-primary">
                                        <PiHeartbeatFill />
                                        <p className="text-sm">
                                            Age
                                        </p>
                                    </div>

                                    <h3 className="mt-2 text-3xl font-black">
                                        {pet.age}
                                    </h3>

                                    <p className="mt-1">
                                        Years Old
                                    </p>

                                </div>

                                <div className="rounded-3xl bg-accent p-5">

                                    <div className="flex items-center gap-2 text-primary">
                                        <FaMars />
                                        <p className="text-sm">
                                            Gender
                                        </p>
                                    </div>

                                    <h3 className="mt-3 text-2xl font-black">
                                        {pet.gender}
                                    </h3>

                                </div>

                                <div className="rounded-3xl bg-accent p-5">

                                    <div className="flex items-center gap-2 text-primary">
                                        <FaShieldDog />
                                        <p className="text-sm">
                                            Health
                                        </p>
                                    </div>

                                    <h3 className="mt-3 text-2xl font-black">
                                        {pet.healthStatus}
                                    </h3>

                                </div>

                                <div className="rounded-3xl bg-accent p-5">

                                    <div className="flex items-center gap-2 text-primary">
                                        <FaSyringe />
                                        <p className="text-sm">
                                            Vaccination
                                        </p>
                                    </div>

                                    <h3 className="mt-3 text-xl font-black">
                                        {pet.vaccinationStatus}
                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* About */}
                        <div className="mt-8 rounded-[36px] border border-primary/10 bg-accent p-6 md:p-8">

                            {/* Location */}
                            <div className="flex items-center gap-4">

                                <div className="flex-center h-14 w-14 rounded-2xl bg-primary/10 text-xl text-primary">
                                    <FaLocationDot />
                                </div>

                                <div>

                                    <p className="text-sm text-muted-foreground">
                                        Located In
                                    </p>

                                    <h3 className="text-2xl font-bold text-foreground">
                                        {pet.location}
                                    </h3>

                                </div>

                            </div>

                            {/* Description */}
                            <div className="mt-10 ">

                                <h2 className="text-4xl font-black text-foreground">
                                    About {pet.petName}
                                </h2>

                                <p className="mt-5 leading-9 text-muted-foreground">
                                    {pet.description}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right */}
                    <div className="xl:sticky xl:top-28 xl:h-fit">

                        {
                            pet.ownerEmail === user.email ?
                                <NoAdoptionCard />
                                :
                                existingRequest ?
                                    <AlreadyRequestedCard />
                                    :
                                    < AdoptionForm
                                        pet={pet}
                                        user={user}
                                    />
                        }

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PetDetailsPage;