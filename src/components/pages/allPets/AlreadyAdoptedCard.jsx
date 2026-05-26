import Link from "next/link";

import { Button } from "@heroui/react";

import {
    FaArrowLeft,
    FaPaw,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const AlreadyRequestedCard = () => {
    return (
        <div className="rounded-4xl border border-primary/10 bg-background p-8 shadow-sm">

            {/* Icon */}
            <div className="flex-center mx-auto h-20 w-20 rounded-full bg-success/10 text-3xl text-success">
                <FaHome />
            </div>

            {/* Content */}
            <div className="mt-6 text-center">

                <h2 className="mt-5 text-3xl font-black text-foreground">
                    Already Adopted
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                    Great news! This lovely pet has
                    already been adopted by a caring
                    family. Thank you for your interest
                    in adoption.
                </p>

            </div>

            {/* Info */}
            <div className="mt-8 rounded-2xl border border-primary/10 bg-accent p-5">

                <div className="flex items-start gap-4">

                    <div className="flex-center h-12 w-12 shrink-0 rounded-2xl bg-primary/10 text-primary">
                        <FaPaw />
                    </div>

                    <div>

                        <h4 className="font-bold text-foreground">
                            Want to Adopt Another Pet?
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            Explore more adorable pets
                            waiting for loving homes.
                            Your perfect furry companion
                            may still be waiting for you.
                        </p>

                    </div>

                </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                    href="/all-pets"
                    className="flex-1"
                >
                    <Button
                        size="lg"
                        className="bg-gradient h-12 w-full font-semibold text-white  hover:brightness-105 hover:scale-105 transition-default"
                    >
                        <FaArrowLeft />
                        Browse More Pets
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default AlreadyRequestedCard;