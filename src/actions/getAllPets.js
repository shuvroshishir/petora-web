

export const getAllPets = async ({ search = "", species = "", sort = "", } = {}) => {

    const query = new URLSearchParams();

    // Search
    if (search) {
        query.append("search", search);
    }

    // Species
    if (species) {
        query.append("species", species);
    }

    // Sort
    if (sort) {
        query.append("sort", sort);
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?${query.toString()}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch pets");
    }

    return res.json();
};