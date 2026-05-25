import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getMyRequests = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-requests`, {
        cache: "no-store",
        headers:
        {
            authorization: `Bearer ${token}`,
        },
    });

    return res.json();
};