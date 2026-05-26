import Image from "next/image";
import ListingCardButtons from "./ListingCardButtons";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ListingCard = async ({ pet }) => {
    // get all request for this pet
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/pet/${pet._id}`, {
        cache: "no-store",
        headers:
        {
            authorization: `Bearer ${token}`,
        },
    });

    const requests = await res.json();

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
                <div className={`absolute right-4 top-4 rounded-full  px-4 py-2 text-sm font-semibold  shadow-lg
                    ${pet.adoptionStatus === "available" ?
                        "bg-background text-primary" : "bg-green-100 dark:bg-[#262626] text-success"
                    }`}>

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
                            {requests?.length}
                        </h3>

                    </div>

                </div>

                {/* Buttons */}
                <ListingCardButtons pet={pet} requests={requests} />

            </div>

        </div>
    );
};

export default ListingCard;