import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';

const NoListing = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">

                <div className="bg-warning/10 text-warning mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
                    <FaHeart />
                </div>

                <h2 className="mb-3 text-3xl font-bold">
                    No Listings Found
                </h2>

                <p className="text-default-500 mb-6">
                    You have not added any pets yet. Start adding your furry friends for adoption.
                </p>

                <Link href="/dashboard/add-pet">

                    <Button
                        size="lg"
                        className="bg-gradient h-12 px-6 font-semibold text-white  hover:brightness-105 hover:scale-105 transition-default"
                    >
                        <FaPlus /> Add your first listing
                    </Button>

                </Link>

            </div>
        </div>
    );
};

export default NoListing;