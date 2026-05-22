"use client";

import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";

const AddPetPage = () => {
    const handleAddPet = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const petData = Object.fromEntries(formData.entries());

        console.log(petData);
    };

    return (
        <section className="p-4 sm:p-6">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-foreground sm:text-4xl">
                    Add a Pet Listing
                </h1>

                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Help a pet find their forever home by creating a detailed
                    listing.
                </p>
            </div>

            {/* Form Card */}
            <div className="bg-accent rounded-2xl border border-primary/10  mt-6 p-5 sm:p-8">

                <Form
                    onSubmit={handleAddPet}
                    className="w-full"
                >
                    <Fieldset className="w-full">

                        <Fieldset.Legend className="text-xl font-bold text-foreground">
                            Pet Information
                        </Fieldset.Legend>

                        <Description className="mt-1 text-muted-foreground">
                            Fill all the required information carefully.
                        </Description>

                        <FieldGroup className="mt-2 sm:mt-6 space-y-6">

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                                {/* Pet Name */}
                                <TextField
                                    isRequired
                                    name="petName"
                                    className="w-full"
                                >
                                    <Label>Pet Name</Label>

                                    <Input placeholder="e.g. Buddy" />

                                    <FieldError />
                                </TextField>

                                {/* Species */}
                                <Select
                                    isRequired
                                    name="species"
                                    placeholder="Select species"
                                    className="w-full"
                                >
                                    <Label>Species</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item
                                                id="Dog"
                                                textValue="Dog"
                                            >
                                                Dog
                                            </ListBox.Item>

                                            <ListBox.Item id="Cat" textValue="Cat">
                                                Cat
                                            </ListBox.Item>

                                            <ListBox.Item id="Bird" textValue="Bird">
                                                Bird
                                            </ListBox.Item>

                                            <ListBox.Item id="Rabbit" textValue="Rabbit">
                                                Rabbit
                                            </ListBox.Item>

                                            <ListBox.Item id="Fish" textValue="Fish">
                                                Fish
                                            </ListBox.Item>

                                            <ListBox.Item id="Other" textValue="Other">
                                                Other
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>

                                    <FieldError />
                                </Select>

                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                                {/* Age */}
                                <TextField
                                    isRequired
                                    name="age"
                                    type="number"
                                    className="w-full"
                                >
                                    <Label>Age</Label>

                                    <Input placeholder="e.g. 2" />

                                    <FieldError />
                                </TextField>

                                {/* Breed */}
                                <TextField
                                    isRequired
                                    name="breed"
                                    className="w-full"
                                >
                                    <Label>Breed</Label>

                                    <Input placeholder="e.g. Labrador Retriever" />

                                    <FieldError />
                                </TextField>

                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                                {/* Gender */}
                                <Select
                                    isRequired
                                    name="gender"
                                    placeholder="Select gender"
                                    className="w-full"
                                >
                                    <Label>Gender</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Male" textValue="Male">
                                                Male
                                            </ListBox.Item>

                                            <ListBox.Item id="Female" textValue="Female">
                                                Female
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>

                                    <FieldError />
                                </Select>

                                {/* Vaccination */}
                                <Select
                                    isRequired
                                    name="vaccinationStatus"
                                    placeholder="Select vaccination status"
                                    className="w-full"
                                >
                                    <Label>Vaccination Status</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Vaccinated" textValue="Vaccinated" >
                                                Vaccinated
                                            </ListBox.Item>

                                            <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated" >
                                                Partially Vaccinated
                                            </ListBox.Item>

                                            <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated" >
                                                Not Vaccinated
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>

                                    <FieldError />
                                </Select>

                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                {/* Location */}
                                <TextField
                                    isRequired
                                    name="location"
                                    className="w-full"
                                >
                                    <Label>Location</Label>

                                    <Input placeholder="e.g. Dhaka, Bangladesh" />

                                    <FieldError />
                                </TextField>

                                {/* Health */}
                                <Select
                                    isRequired
                                    name="healthStatus"
                                    placeholder="Select health status"
                                    className="w-full"
                                >
                                    <Label>Health Status</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Excellent" textValue="">
                                                Excellent
                                            </ListBox.Item>

                                            <ListBox.Item id="Good" textValue="Good">
                                                Good
                                            </ListBox.Item>

                                            <ListBox.Item id="Needs Treatment" textValue="Needs Treatment">
                                                Needs Treatment
                                            </ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>

                                    <FieldError />
                                </Select>

                            </div>

                            {/* Row 5 */}
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                                {/* Fee */}
                                <TextField
                                    isRequired
                                    name="adoptionFee"
                                    type="number"
                                    className="w-full"
                                >
                                    <Label>Adoption Fee ($)</Label>

                                    <Input placeholder="Enter 0 for free adoption" />

                                    <FieldError />
                                </TextField>

                                {/* Email */}
                                <TextField
                                    isRequired
                                    name="ownerEmail"
                                    className="w-full"
                                >
                                    <Label>Owner Email</Label>

                                    <Input
                                        value="shuvroshishir.dev@gmail.com"
                                        readOnly
                                    />

                                    <FieldError />
                                </TextField>

                            </div>

                            {/* Image URL */}
                            <TextField
                                isRequired
                                name="image"
                                className="w-full"
                                type="url"
                            >
                                <Label>Pet Image URL</Label>

                                <Input placeholder="https://i.ibb.co/..." />

                                <Description>
                                    Upload image to imgbb or postimages first.
                                </Description>

                                <FieldError />
                            </TextField>


                            {/* Description */}
                            <TextField
                                isRequired
                                name="description"
                                className="w-full"
                            >
                                <Label>Description</Label>

                                <TextArea
                                    rows={4}
                                    placeholder="Describe the pet’s personality, habits, needs, and anything adopters should know..."
                                />

                                <Description>
                                    Add detailed information about the pet.
                                </Description>

                                <FieldError />
                            </TextField>

                        </FieldGroup>

                        {/* Buttons */}
                        <Fieldset.Actions className="mt-2 sm:mt-6 flex gap-4 sm:gap-8">

                            <Button
                                type="reset"
                                variant="outline"
                                size="lg"
                                className="h-12 flex-1 border-2 border-primary/20 hover:bg-primary/10 hover:scale-105 transition-default w-full"
                            >
                                Reset
                            </Button>

                            <Button
                                type="submit"
                                size="lg"
                                className="bg-gradient h-12 flex-1 font-semibold text-white hover:brightness-105  hover:scale-105 transition-default w-full"
                            >
                                Add Pet Listing
                            </Button>

                        </Fieldset.Actions>

                    </Fieldset>
                </Form>

            </div>
        </section >
    );
};

export default AddPetPage;