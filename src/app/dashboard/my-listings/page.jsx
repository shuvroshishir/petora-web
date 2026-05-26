import Link from "next/link";

import { Button } from "@heroui/react";
import { FaClipboardList, FaPaw, FaPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import ListingCard from "@/components/pages/dashboard/my-listings/ListingCard";
import { getMyListings } from "@/actions/getMyListings";
import NoListing from "@/components/pages/dashboard/my-listings/NoListing";


const MyListingsPage = async () => {

    const pets = await getMyListings();

    const totalListing = pets?.length;

    const successfulAdoption = pets?.filter(pet => pet?.adoptionStatus === "adopted").length;

    return (
        <section className="space-y-8 p-4 sm:p-6">

            {/* Header */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                        Dashboard
                    </div>

                    <h1 className="mt-4 text-3xl font-black text-foreground md:text-5xl">
                        My Listings
                    </h1>

                    <p className="section-description max-w-2xl">
                        Manage your pet listings and monitor
                        adoption requests easily from one
                        place.
                    </p>

                </div>

                <Link href="/dashboard/add-pet">

                    <Button
                        size="lg"
                        className="bg-gradient h-12 px-6 font-semibold text-white"
                    >
                        <FaPlus /> Add New Pet
                    </Button>

                </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                {/* Total */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm font-medium text-muted-foreground">
                                Total Listings
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-foreground">
                                {totalListing}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-primary/10 text-3xl text-primary">
                            <FaPaw />
                        </div>

                    </div>

                </div>

                {/* Available */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm font-medium text-muted-foreground">
                                Available
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-green-500">
                                {totalListing - successfulAdoption}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-green-500/10 text-3xl text-green-500">
                            <FaClipboardList />
                        </div>

                    </div>

                </div>

                {/* Adopted */}
                <div className="card p-6">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm font-medium text-muted-foreground">
                                Adopted
                            </p>

                            <h2 className="mt-3 text-4xl font-black text-primary">
                                {successfulAdoption}
                            </h2>

                        </div>

                        <div className="flex-center h-16 w-16 rounded-3xl bg-primary/10 text-3xl text-primary">
                            <FaCheckCircle />
                        </div>

                    </div>

                </div>

            </div>

            {/* Listings cards */}
            {
                Array.isArray(pets) && pets.length > 0 ?
                    (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {pets.map(pet => <ListingCard key={pet._id} pet={pet} />)}
                        </div>
                    ) : (
                        <NoListing />
                    )
            }



        </section>
    );
};

export default MyListingsPage;