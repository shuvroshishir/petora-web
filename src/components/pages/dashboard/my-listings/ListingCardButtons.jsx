"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { EditPetModal } from "./EditPetModal";
import DeletePetAlert from "./DeletePetAlert";
import { RequestModal } from "./RequestModal";


const ListingCardButtons = ({ pet, requests }) => {

    return (
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
            <EditPetModal pet={pet} />

            {/* Requests */}
            <RequestModal pet={pet} requests={requests} />

            {/* Delete */}
            <DeletePetAlert pet={pet} />

        </div>
    );
};

export default ListingCardButtons;