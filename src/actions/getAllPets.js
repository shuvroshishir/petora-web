
export const getAllPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Failed to fetch pets");
    }
    return res.json();
};

