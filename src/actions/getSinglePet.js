import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSinglePet = async (id) => {

    // access token from cookies using better-auths token generation method
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    // console.log("Token from client side:", token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`, {
        cache: "no-store",
        headers:
        {
            authorization: `Bearer ${token}`,   //sending token to server for authentication
        },
    });

    return res.json();
};