import Link from "next/link";

import { Button } from "@heroui/react";

import {
    FaCheck,
    FaClock,
} from "react-icons/fa6";

const AlreadyRequestedCard = () => {
    return (
        <div className="rounded-4xl border border-primary/10 bg-background p-8 shadow-sm">

            {/* Icon */}
            <div className="flex-center mx-auto h-20 w-20 rounded-full bg-primary/10 text-3xl text-primary">
                <FaCheck />
            </div>

            {/* Content */}
            <div className="mt-6 text-center">

                <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">

                    <FaClock className="text-xs" />

                    Status: Pending

                </div>

                <h2 className="mt-5 text-3xl font-black text-foreground">
                    Adoption Request Sent
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                    Your adoption request for this pet has
                    already been submitted. Please wait for
                    the owner to review your request.
                </p>

            </div>

            {/* Info */}
            <div className="mt-8 rounded-2xl border border-primary/10 bg-accent p-5">

                <div className="flex items-start gap-4">

                    <div className="flex-center h-12 w-12 shrink-0 rounded-2xl bg-primary/10 text-primary">
                        🐾
                    </div>

                    <div>

                        <h4 className="font-bold text-foreground">
                            What Happens Next?
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            The pet owner will review your
                            request and approve or reject it.
                            You can monitor the status from
                            your requests dashboard.
                        </p>

                    </div>

                </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                    href="/dashboard/my-requests"
                    className="flex-1"
                >
                    <Button
                        size="lg"
                        className="bg-gradient h-12 w-full font-semibold text-white"
                    >
                        My Requests
                    </Button>
                </Link>
                {/* 
                <Button
                    size="lg"
                    variant="outline"
                    onPress={handleCancel}
                    className="h-12 flex-1 border-2 border-red-500/20 font-semibold text-red-500 hover:bg-red-500/10"
                >
                    Cancel Request
                </Button> */}

            </div>

        </div>
    );
};

export default AlreadyRequestedCard;