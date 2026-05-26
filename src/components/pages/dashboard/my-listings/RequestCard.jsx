"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { formatDate } from "@/utils/formatDate";
import {
    FaCalendarDays,
    FaCheck,
    FaEnvelope,
    FaXmark,
} from "react-icons/fa6";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";




const RequestCard = ({ request }) => {
    const router = useRouter();

    const handleApprove = async (id) => {

        const { data: tokenData } = await authClient.token();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/approve/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                }
            );

            const data = await res.json();

            if (data.success) {
                toast.success("Adoption request approved");
                router.refresh();
            } else {
                toast.error("Failed to approve")
            }

        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    const handleReject = async (id) => {

        const { data: tokenData } = await authClient.token();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/reject/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Request rejected");
                router.refresh();
            }

        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="overflow-hidden rounded-4xl border border-primary/10 bg-accent p-4 sm:p-5">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Left Content */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                    {/* Image */}
                    <div className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-3xl sm:mx-0 sm:h-28 sm:w-28">

                        <Image
                            src={request.adopterImage}
                            alt={request.adopterName}
                            fill
                            sizes="112px"
                            className="object-cover"
                        />

                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1 text-center sm:text-left">

                        {/* Name + Status */}
                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">

                            <h3 className="text-2xl font-black text-foreground sm:text-3xl">
                                {request.adopterName}
                            </h3>

                            {/* Status */}
                            <div
                                className={`inline-flex w-fit items-center justify-center rounded-full px-4 py-1 text-xs font-semibold capitalize ${request.status ===
                                    "approved"
                                    ? "bg-green-500/10 text-green-500"
                                    : request.status ===
                                        "rejected"
                                        ? "bg-red-500/10 text-red-500"
                                        : "bg-yellow-500/10 text-yellow-600"
                                    }`}
                            >
                                {request.status}
                            </div>

                        </div>

                        {/* Email */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">

                            <FaEnvelope className="shrink-0 text-primary" />

                            <span className="break-all">
                                {request.adopterEmail}
                            </span>

                        </div>

                        {/* Pickup Date */}
                        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start">

                            <FaCalendarDays className="shrink-0 text-primary" />

                            <span>
                                Pickup Date:
                            </span>

                            <span className="font-medium text-foreground">
                                {formatDate(
                                    request.pickupDate
                                )}
                            </span>

                        </div>

                        {/* Message */}
                        <div className="mt-5 rounded-2xl border border-primary/10 bg-background p-4 text-left">

                            <p className="line-clamp-4 text-sm leading-7 text-muted-foreground">
                                &quot;
                                {request.message}
                                &quot;
                            </p>

                        </div>

                    </div>

                </div>

                {/* Buttons */}
                {
                    request.status ===
                    "pending" && (
                        <div className="flex sm:flex-col gap-3 xl:w-auto xl:flex-col">

                            {/* Approve */}
                            <Button
                                onPress={() => handleApprove(request._id)}
                                className=" bg-gradient hover:brightness-110 font-semibold text-white sm:min-w-40"
                            >
                                <FaCheck />
                                Approve
                            </Button>

                            {/* Reject */}
                            <Button
                                onPress={() => handleReject(request._id)}
                                variant="outline"
                                className="border-red-500/20 font-semibold text-red-500 hover:bg-red-500/10 sm:min-w-40"
                            >
                                <FaXmark />

                                Reject
                            </Button>

                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default RequestCard;