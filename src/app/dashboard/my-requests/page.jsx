import Image from "next/image";
import Link from "next/link";

import { Button } from "@heroui/react";

import {
    FaClock,
    FaEye,
    FaXmark,
    FaTrash,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import NoRequests from "@/components/pages/dashboard/my-requests/NoRequests";
import { getMyRequests } from "@/actions/getMyRequests";
import { formatDate } from "@/utils/formatDate";
import DeleteRequestAlert from "@/components/pages/dashboard/my-requests/DeleteRequestAlert";

const MyRequestsPage = async () => {

    const requests = await getMyRequests();

    const pendingRequests = requests.filter(
        (request) =>
            request.status === "pending"
    ).length;

    const approvedRequests = requests.filter(
        (request) =>
            request.status === "approved"
    ).length;

    const rejectedRequests = requests.filter(
        (request) =>
            request.status === "rejected"
    ).length;

    return (
        <section className="space-y-8 p-4 sm:p-6">

            {/* Header */}
            <div>

                <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    Dashboard
                </div>

                <h1 className="mt-4 text-3xl font-black text-foreground md:text-5xl">
                    My Adoption Requests
                </h1>

                <p className="section-description">
                    Track and manage all your pet
                    adoption requests from one place.
                </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {/* Total */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Total Requests
                            </p>

                            <h2 className="mt-3 text-4xl font-black">
                                {requests.length}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-primary/10 text-3xl text-primary">
                            📋
                        </div>

                    </div>

                </div>

                {/* Pending */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Pending
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-yellow-500">
                                {pendingRequests}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-yellow-500/10 text-3xl text-yellow-500">
                            <FaClock />
                        </div>

                    </div>

                </div>

                {/* Approved */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Approved
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-green-500">
                                {approvedRequests}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-green-500/10 text-3xl text-green-500">
                            <FaCheckCircle />
                        </div>

                    </div>

                </div>

                {/* Rejected */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Rejected
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-red-500">
                                {rejectedRequests}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-red-500/10 text-3xl text-red-500">
                            <FaXmark />
                        </div>

                    </div>

                </div>

            </div>


            {
                Array.isArray(requests) && requests.length > 0 ?
                    <>
                        {/* Mobile Cards */}
                        <div className="Mobile grid gap-5 lg:hidden">

                            {requests.map((request) => (

                                <div
                                    key={request._id}
                                    className="card overflow-hidden p-5"
                                >

                                    <div className="flex gap-4">

                                        {/* Image */}
                                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl hidden sm:block">

                                            <Image
                                                src={request.petImage}
                                                alt={request.petName}
                                                fill
                                                sizes="96px"
                                                className="object-cover"
                                            />

                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">

                                            <div className="flex items-start justify-between gap-3">

                                                <div>

                                                    <h2 className="text-2xl font-black">
                                                        {request.petName}
                                                    </h2>

                                                    <p className="mt-1 text-sm text-muted-foreground">
                                                        Pickup:{" "}
                                                        {
                                                            formatDate(request.pickupDate)
                                                        }
                                                    </p>

                                                </div>

                                                <div
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${request.status ===
                                                        "approved"
                                                        ? "bg-green-500/10 text-green-500"
                                                        : request.status ===
                                                            "rejected"
                                                            ? "bg-red-500/10 text-red-500"
                                                            : "bg-yellow-500/10 text-yellow-600"
                                                        }`}
                                                >
                                                    {
                                                        request.status
                                                    }
                                                </div>

                                            </div>

                                            <p className="mt-4 text-sm text-muted-foreground">
                                                Requested on{" "}
                                                {
                                                    formatDate(request.createdAt)
                                                }
                                            </p>

                                        </div>

                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-5 flex gap-3">

                                        <Link
                                            href={`/all-pets/${request.petId}`}
                                        >
                                            <Button
                                                variant="outline"
                                                className="border-blue-500/20 font-semibold text-blue-500 hover:bg-blue-500/10"
                                            >
                                                <FaEye />

                                                View
                                            </Button>
                                        </Link>

                                        <DeleteRequestAlert id={request._id} petName={request.petName} />

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Desktop Table */}
                        <div className="Desktop card hidden overflow-hidden lg:block">

                            <div className="overflow-x-auto">

                                <table className="w-full">

                                    {/* Head */}
                                    <thead className="border-b border-primary/10 bg-accent">

                                        <tr>

                                            <th className="px-6 py-5 text-left text-sm font-bold text-foreground">
                                                Pet
                                            </th>

                                            <th className="px-6 py-5 text-left text-sm font-bold text-foreground">
                                                Request Date
                                            </th>

                                            <th className="px-6 py-5 text-left text-sm font-bold text-foreground">
                                                Pickup Date
                                            </th>

                                            <th className="px-6 py-5 text-left text-sm font-bold text-foreground">
                                                Status
                                            </th>

                                            <th className="px-6 py-5 text-right text-sm font-bold text-foreground">
                                                Actions
                                            </th>

                                        </tr>

                                    </thead>

                                    {/* Body */}
                                    <tbody>

                                        {requests.map((request) => (

                                            <tr
                                                key={request._id}
                                                className="border-b border-primary/10 transition-default hover:bg-accent"
                                            >

                                                {/* Pet */}
                                                <td className="px-6 py-5">

                                                    <div className="flex items-center gap-4">

                                                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl">

                                                            <Image
                                                                src={request.petImage}
                                                                alt={request.petName}
                                                                fill
                                                                sizes="64px"
                                                                className="object-cover"
                                                            />

                                                        </div>

                                                        <div>

                                                            <h3 className="font-bold text-foreground">
                                                                {request.petName}
                                                            </h3>

                                                        </div>

                                                    </div>

                                                </td>

                                                {/* Request Date */}
                                                <td className="px-6 py-5 text-muted-foreground">
                                                    {
                                                        formatDate(request.createdAt)
                                                    }
                                                </td>

                                                {/* Pickup */}
                                                <td className="px-6 py-5 text-muted-foreground">
                                                    {
                                                        formatDate(request.pickupDate)
                                                    }
                                                </td>

                                                {/* Status */}
                                                <td className="px-6 py-5">

                                                    <div
                                                        className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold capitalize ${request.status ===
                                                            "approved"
                                                            ? "bg-green-500/10 text-green-500"
                                                            : request.status ===
                                                                "rejected"
                                                                ? "bg-red-500/10 text-red-500"
                                                                : "bg-yellow-500/10 text-yellow-600"
                                                            }`}
                                                    >
                                                        {
                                                            request.status
                                                        }
                                                    </div>

                                                </td>

                                                {/* Actions */}
                                                <td className="px-6 py-5">

                                                    <div className="flex items-center justify-end gap-3">

                                                        <Link
                                                            href={`/all-pets/${request.petId}`}
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                className="border-blue-500/20 font-semibold text-blue-500 hover:bg-blue-500/10"
                                                            >
                                                                <FaEye />

                                                                View
                                                            </Button>
                                                        </Link>

                                                        <DeleteRequestAlert id={request._id} petName={request.petName} />

                                                    </div>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>
                    </>
                    :
                    <NoRequests />
            }
        </section>
    );
};

export default MyRequestsPage;