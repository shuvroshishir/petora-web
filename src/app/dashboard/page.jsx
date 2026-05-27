import Image from "next/image";
import {
    FaEnvelope,
    FaLocationDot,
    FaPhone,
    FaPaw,
} from "react-icons/fa6";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { image } from "framer-motion/client";
import { EditProfileModal } from "@/components/pages/dashboard/EditProfileModal";
import { getMyListings } from "@/actions/getMyListings";
import { getMyRequests } from "@/actions/getMyRequests";
import LogoutBtn from "@/components/pages/dashboard/LogoutBtn";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const { name, email, image } = user

    const pets = await getMyListings();
    const successfulAdoption = pets?.filter(pet => pet?.adoptionStatus === "adopted").length;

    const requests = await getMyRequests()

    return (
        <section className="p-2 sm:p-6">
            {/* Header */}
            <div>
                <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-4">
                    Dashboard
                </div>
                <h1 className="text-3xl font-black text-foreground sm:text-4xl">
                    My Profile
                </h1>

                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Manage your personal information and pet adoption
                    activities.
                </p>
            </div>

            {/* Profile Card */}
            <div className="card mt-6 overflow-hidden">

                {/* Cover */}
                <div className="relative h-40 bg-linear-to-r from-orange-400 to-orange-500 sm:h-52">

                    {/* Blur Effects */}
                    <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" />

                    {/* Avatar */}
                    <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0">

                        <div className="rounded-full border-4 border-background bg-background p-1 shadow-xl">
                            <Image
                                src={image || "/assets/user.jpg"}
                                alt="Profile"
                                width={110}
                                height={110}
                                className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                            />
                        </div>

                    </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6 pt-16 sm:px-8 sm:pt-20">

                    {/* Top Section */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                        {/* User Info */}
                        <div className="text-center sm:text-left">

                            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
                                {name || "User"}
                            </h2>

                            <p className="mt-2 text-muted-foreground">
                                Pet Lover & Adoption Enthusiast 🐾
                            </p>

                            {/* Contact Info */}
                            <div className="mt-5 space-y-3">

                                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground sm:justify-start sm:text-base">
                                    <FaEnvelope className="text-primary" />

                                    <span>
                                        {email}
                                    </span>
                                </div>

                                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground sm:justify-start sm:text-base">
                                    <FaPhone className="text-primary" />

                                    <span>
                                        +880 1234-567890
                                    </span>
                                </div>

                                <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground sm:justify-start sm:text-base">
                                    <FaLocationDot className="text-primary" />

                                    <span>
                                        Dhaka, Bangladesh
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* btns */}
                        <div className="flex flex-col gap-3">
                            {user && <EditProfileModal user={user} />}
                            <LogoutBtn />
                        </div>

                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                        {/* Card */}
                        <div className="rounded-3xl bg-accent p-5">
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Total Requests
                                    </p>

                                    <h3 className="mt-1 text-3xl font-black text-foreground">
                                        {requests?.length}
                                    </h3>
                                </div>

                                <div className="flex-center h-12 w-12 rounded-2xl bg-primary/10 text-xl text-primary">
                                    📋
                                </div>

                            </div>
                        </div>

                        {/* Card */}
                        <div className="rounded-3xl bg-accent p-5">
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Pets Added
                                    </p>

                                    <h3 className="mt-1 text-3xl font-black text-foreground">
                                        {pets?.length}
                                    </h3>
                                </div>

                                <div className="flex-center h-12 w-12 rounded-2xl bg-primary/10 text-xl text-primary">
                                    <FaPaw />
                                </div>

                            </div>
                        </div>

                        {/* Card */}
                        <div className="rounded-3xl bg-accent p-5 sm:col-span-2 xl:col-span-1">
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Successful Adoptions
                                    </p>

                                    <h3 className="mt-1 text-3xl font-black text-foreground">
                                        {successfulAdoption}
                                    </h3>
                                </div>

                                <div className="flex-center h-12 w-12 rounded-2xl bg-primary/10 text-xl text-primary">
                                    ❤️
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* About */}
                    <div className="mt-8 rounded-3xl bg-accent p-6 sm:p-8">

                        <h3 className="text-2xl font-bold text-foreground">
                            About Me
                        </h3>

                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Passionate animal lover dedicated to helping pets
                            find safe and loving homes. I enjoy connecting with
                            pet adopters and supporting responsible pet care and
                            adoption awareness.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfilePage;