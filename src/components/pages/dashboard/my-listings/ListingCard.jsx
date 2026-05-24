"use client"

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardList, FaEye, FaPenToSquare, FaTrash } from "react-icons/fa6";


const ListingCard = ({ pet }) => {
    return (
        <div className="rounded-2xl border border-primary/10 bg-white dark:bg-[#1f1f1f] shadow overflow-hidden transition-default hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

                <Image
                    src={pet.image}
                    alt={pet.petName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                {/* Status */}
                <div className="absolute right-4 top-4 rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary shadow-lg">

                    {
                        pet.adoptionStatus ===
                            "available"
                            ? "Available"
                            : "Adopted"
                    }

                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">

                    <h2 className="text-3xl font-black">
                        {pet.petName}
                    </h2>

                    <p className="mt-1 text-white/80">
                        {pet.breed}
                    </p>

                </div>

            </div>

            {/* Body */}
            <div className="space-y-5 p-5">

                {/* Price */}
                <div className="flex items-center justify-between rounded-2xl bg-accent p-4">

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Adoption Fee
                        </p>

                        <h3 className="mt-1 text-2xl font-black text-primary">
                            $
                            {pet.adoptionFee}
                        </h3>

                    </div>

                    <div className="text-right">

                        <p className="text-sm text-muted-foreground">
                            Requests
                        </p>

                        <h3 className="mt-1 text-2xl font-black text-foreground">
                            {
                                pet.requests
                            }
                        </h3>

                    </div>

                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">

                    {/* View */}
                    <Link
                        href={`/all-pets/${pet._id}`}
                        className="w-full"
                    >
                        <Button
                            size="lg"
                            className="w-full border-green-500/20 font-semibold text-green-500 hover:bg-green-500/10"
                            variant="outline"
                        >
                            <FaEye />

                            View
                        </Button>
                    </Link>

                    {/* Edit */}
                    <Button
                        size="lg"
                        className="w-full border-blue-500/20 font-semibold text-blue-500 hover:bg-blue-500/10"

                        variant="outline"
                    >
                        <FaPenToSquare />

                        Edit
                    </Button>

                    {/* Requests */}
                    <Button
                        size="lg"
                        className=" w-full border-yellow-500/20 font-semibold text-amber-500 hover:bg-yellow-500/10"
                        variant="outline"
                    >
                        <FaClipboardList />

                        Requests
                    </Button>

                    {/* Delete */}
                    <Button
                        size="lg"
                        className=" w-full border-red-500/20 font-semibold text-red-500 hover:bg-red-500/10"
                        variant="outline"
                    >
                        <FaTrash />

                        Delete
                    </Button>

                </div>

            </div>

        </div>
    );
};

export default ListingCard;