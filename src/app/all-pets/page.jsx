import {
    Button,
    Label,
    ListBox,
    SearchField,
    Select,
} from "@heroui/react";

import PetCard from "@/components/pages/allPets/PetCard";
import { getAllPets } from "@/actions/getAllPets";
import { TbFilterSearch } from "react-icons/tb";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";
import NoPetsFound from "@/components/pages/allPets/NoPetsFound";

const AllPetsPage = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";
    const species = params?.species || "";
    const sort = params?.sort || "";

    const pets = await getAllPets({
        search,
        species,
        sort,
    });

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
                <form
                    action="/all-pets"
                    className="mt-10 rounded-[28px] border border-primary/10 bg-accent p-4 shadow-sm"
                >

                    {/* Header */}
                    <div className="mb-5 flex items-center gap-3">

                        <div className="flex-center h-10 w-10 rounded-2xl bg-primary/10 text-xl text-primary">
                            <TbFilterSearch />
                        </div>

                        <div>

                            <h2 className="text-lg font-black text-foreground">
                                Filter Pets
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Search and sort pets easily
                            </p>

                        </div>

                    </div>

                    {/* Fields */}
                    <div className="grid gap-4 lg:grid-cols-3">

                        {/* Search */}
                        <SearchField name="search">

                            <Label>
                                Search
                            </Label>

                            <SearchField.Group className="h-12 rounded-2xl border border-primary/10 bg-background px-2 shadow-none transition-default focus-within:border-primary">

                                <SearchField.SearchIcon className="text-primary" />

                                <SearchField.Input
                                    className="w-full"
                                    placeholder="Search pets..."
                                />

                                <SearchField.ClearButton />

                            </SearchField.Group>

                        </SearchField>

                        {/* Species */}
                        <Select
                            name="species"
                            placeholder="Select species"
                            className="w-full"
                        >

                            <Label>
                                Species
                            </Label>

                            <Select.Trigger className="h-12 flex items-center rounded-2xl border border-primary/10 bg-background px-4 shadow-none data-[focus=true]:border-primary">

                                <Select.Value />

                                <Select.Indicator />

                            </Select.Trigger>

                            <Select.Popover>

                                <ListBox>

                                    <ListBox.Item
                                        id=""
                                        textValue="All"
                                    >
                                        All Pets
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Dog"
                                        textValue="Dog"
                                    >
                                        Dog
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Cat"
                                        textValue="Cat"
                                    >
                                        Cat
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Bird"
                                        textValue="Bird"
                                    >
                                        Bird
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Rabbit"
                                        textValue="Rabbit"
                                    >
                                        Rabbit
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Fish"
                                        textValue="Fish"
                                    >
                                        Fish
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="Other"
                                        textValue="Other"
                                    >
                                        Other
                                    </ListBox.Item>

                                </ListBox>

                            </Select.Popover>

                        </Select>

                        {/* Sort */}
                        <Select
                            name="sort"
                            placeholder="Sort pets"
                            className="w-full"
                        >

                            <Label>
                                Sort By
                            </Label>

                            <Select.Trigger className="h-12 flex items-center rounded-2xl border border-primary/10 bg-background px-4 shadow-none data-[focus=true]:border-primary">

                                <Select.Value />

                                <Select.Indicator />

                            </Select.Trigger>

                            <Select.Popover>

                                <ListBox>

                                    <ListBox.Item
                                        id=""
                                        textValue="Default"
                                    >
                                        Default
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="LowToHigh"
                                        textValue="LowToHigh"
                                    >
                                        Fee Low to High
                                    </ListBox.Item>

                                    <ListBox.Item
                                        id="HighToLow"
                                        textValue="HighToLow"
                                    >
                                        Fee High to Low
                                    </ListBox.Item>

                                </ListBox>

                            </Select.Popover>

                        </Select>

                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">

                        <Button
                            type="submit"
                            className="bg-gradient  text-sm font-semibold text-white "
                        >
                            Find
                            <FaArrowRight />
                        </Button>

                        <Link href="/all-pets">

                            <Button
                                variant="outline"
                                className="border-2 border-primary/20 font-semibold text-primary hover:bg-primary/10"
                            >
                                Reset
                                <RxReset />
                            </Button>

                        </Link>

                    </div>

                </form>

                {/* if no result */}
                {pets.length === 0 && <NoPetsFound />}

                {/* Cards */}
                <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {pets?.map((pet) => (
                        <PetCard
                            key={pet._id}
                            pet={pet}
                        />
                    ))}

                </div>

            </div>
        </section >
    );
};

export default AllPetsPage;