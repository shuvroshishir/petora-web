"use client"

import { Button } from "@heroui/react";
import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
    const router = useRouter();
    const handleSignout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed out successfully");
                    router.push("/");
                },

                onError: () => {
                    toast.error("Failed to sign out");
                },
            },
        });
    };
    return (
        <Button
            onClick={handleSignout}
            variant="danger-soft"
            size="lg"
            className="px-7"
        >
            Log Out
            <ArrowRightFromSquare />
        </Button>
    );
};

export default LogoutBtn;