import Link from "next/link";

import { Button } from "@heroui/react";

import {
    FaArrowRight,
    FaCheck,
    FaClock,
    FaPaw,
} from "react-icons/fa6";

const AlreadyRequestedCard = () => {
    return (
        <div className="rounded-4xl border border-primary/10 bg-background p-8 shadow-sm">

            {/* Icon */}
            <div className="flex-center mx-auto h-20 w-20 rounded-full bg-success/10 text-3xl text-success">
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

            </div>

            {/* Info */}
            <div className="mt-8 rounded-2xl border border-primary/10 bg-accent p-5">

                <div className="flex items-start gap-4">

                    <div className="flex-center h-12 w-12 shrink-0 rounded-2xl bg-primary/10 text-primary">
                        <FaPaw />
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
            <div className="mt-8 flex gap-3">

                <Link
                    href="/dashboard/my-requests"
                    className="flex-1"
                >
                    <Button
                        className="bg-gradient h-12 w-full font-semibold text-white  hover:brightness-105 hover:scale-105 transition-default"
                    >
                        My Requests
                        <FaArrowRight />
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default AlreadyRequestedCard;