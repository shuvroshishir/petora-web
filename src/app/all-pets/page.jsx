import {
    Label,
    ListBox,
    SearchField,
    Select,
} from "@heroui/react";

import PetCard from "@/components/pages/allPets/PetCard";
import { getAllPets } from "@/actions/getAllPets";

const AllPetsPage = async () => {
    const pets = await getAllPets();

    return (
        <section className="section">

            <div className="container">

                {/* Header */}
                <div className="text-center">

                    <h1 className="section-title text-foreground">
                        Find Your Perfect Companion
                    </h1>

                    <p className="section-description mx-auto">
                        Browse adorable pets waiting for a loving forever home.
                    </p>

                </div>

                {/* Filters */}
                <div className="mt-10 rounded-[28px] border border-primary/10 bg-accent p-5 shadow-sm">

                    <div className="grid gap-5 lg:grid-cols-3">

                        <SearchField name="search">
                            <Label>Search</Label>
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input className="w-full" placeholder="Search..." />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>

                        {/* Filter */}
                        <Select
                            placeholder="Filter by species"
                            className="w-full"
                        >
                            <Label>Species</Label>

                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="All">
                                        All Pets
                                    </ListBox.Item>

                                    <ListBox.Item id="Dog">
                                        Dog
                                    </ListBox.Item>

                                    <ListBox.Item id="Cat">
                                        Cat
                                    </ListBox.Item>

                                    <ListBox.Item id="Bird">
                                        Bird
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        {/* Sort */}
                        <Select
                            placeholder="Sort pets"
                            className="w-full"
                        >
                            <Label>Sort By</Label>

                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="LowToHigh">
                                        Adoption Fee Low to High
                                    </ListBox.Item>

                                    <ListBox.Item id="HighToLow">
                                        Adoption Fee High to Low
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                    </div>

                </div>

                {/* Cards */}
                <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {pets.map((pet) => (
                        <PetCard
                            key={pet._id}
                            pet={pet}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default AllPetsPage;