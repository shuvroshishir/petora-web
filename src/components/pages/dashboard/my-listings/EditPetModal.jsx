"use client";

import { authClient } from "@/lib/auth-client";
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
    Modal,
    Select,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaPenToSquare } from "react-icons/fa6";

export function EditPetModal({ pet }) {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedPet = Object.fromEntries(formData.entries());
        updatedPet.age = parseInt(updatedPet.age);
        updatedPet.adoptionFee = parseInt(updatedPet.adoptionFee);

        // console.log("old data", pet);
        // console.log("Updated data", updatedPet);

        const { data: tokenData } = await authClient.token();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${pet?._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                    body: JSON.stringify(updatedPet),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Pet updated successfully!");
                router.refresh();
            } else {
                toast.error("Failed to update pet.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Modal>
            <Button
                size="lg"
                className="w-full border-blue-500/20 font-semibold text-blue-500 hover:bg-blue-500/10"
                variant="outline"
            >
                <FaPenToSquare />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto ">
                    <Modal.Dialog className="sm:max-w-xl bg-accent">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-6">
                            <Surface variant="default bg-accent">
                                <Form onSubmit={handleSubmit} className="w-full">
                                    <Fieldset className="w-full">
                                        <Fieldset.Legend className="text-xl font-bold text-foreground">
                                            Edit Pet Details
                                        </Fieldset.Legend>

                                        <Description className="mt-1 text-muted-foreground">
                                            Update your pet’s information to keep the listing accurate and up to date.
                                        </Description>

                                        <FieldGroup className="mt-2 space-y-6 sm:mt-6">
                                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                                <TextField
                                                    isRequired
                                                    name="petName"
                                                    className="w-full"
                                                    defaultValue={pet?.petName}
                                                >
                                                    <Label>Pet Name</Label>
                                                    <Input placeholder="e.g. Buddy" />
                                                    <FieldError />
                                                </TextField>

                                                <Select
                                                    isRequired
                                                    name="species"
                                                    className="w-full"
                                                    defaultSelectedKey={pet?.species}
                                                >
                                                    <Label>Species</Label>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Dog" textValue="Dog">
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

                                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                                <TextField
                                                    isRequired
                                                    name="age"
                                                    type="number"
                                                    className="w-full"
                                                    defaultValue={pet?.age}
                                                >
                                                    <Label>Age</Label>
                                                    <Input placeholder="e.g. 2" />
                                                    <FieldError />
                                                </TextField>

                                                <TextField
                                                    isRequired
                                                    name="breed"
                                                    className="w-full"
                                                    defaultValue={pet?.breed}
                                                >
                                                    <Label>Breed</Label>
                                                    <Input placeholder="e.g. Labrador Retriever" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                                <Select
                                                    isRequired
                                                    name="gender"
                                                    className="w-full"
                                                    defaultSelectedKey={pet?.gender}
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

                                                <Select
                                                    isRequired
                                                    name="vaccinationStatus"
                                                    className="w-full"
                                                    defaultSelectedKey={pet?.vaccinationStatus}
                                                >
                                                    <Label>Vaccination Status</Label>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                                                                Vaccinated
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">
                                                                Partially Vaccinated
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">
                                                                Not Vaccinated
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                    <FieldError />
                                                </Select>
                                            </div>

                                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                                <TextField
                                                    isRequired
                                                    name="location"
                                                    className="w-full"
                                                    defaultValue={pet?.location}
                                                >
                                                    <Label>Location</Label>
                                                    <Input placeholder="e.g. Dhaka, Bangladesh" />
                                                    <FieldError />
                                                </TextField>

                                                <Select
                                                    isRequired
                                                    name="healthStatus"
                                                    className="w-full"
                                                    defaultSelectedKey={pet?.healthStatus}
                                                >
                                                    <Label>Health Status</Label>
                                                    <Select.Trigger>
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Excellent" textValue="Excellent">
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

                                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                                <TextField
                                                    isRequired
                                                    name="adoptionFee"
                                                    type="number"
                                                    className="w-full"
                                                    defaultValue={pet?.adoptionFee}
                                                >
                                                    <Label>Adoption Fee ($)</Label>
                                                    <Input placeholder="Enter 0 for free adoption" />
                                                    <FieldError />
                                                </TextField>

                                                <TextField
                                                    isRequired
                                                    name="ownerEmail"
                                                    className="w-full"
                                                    defaultValue={pet?.ownerEmail}
                                                    isReadOnly
                                                >
                                                    <Label>Owner Email</Label>
                                                    <Input />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            <TextField
                                                isRequired
                                                name="image"
                                                className="w-full"
                                                type="url"
                                                defaultValue={pet?.image}
                                            >
                                                <Label>Pet Image URL</Label>
                                                <Input placeholder="https://i.ibb.co/..." />

                                                <FieldError />
                                            </TextField>

                                            <TextField
                                                isRequired
                                                name="description"
                                                className="w-full"
                                                defaultValue={pet?.description}
                                            >
                                                <Label>Description</Label>
                                                <TextArea
                                                    rows={4}
                                                    placeholder="Describe the pet's personality, habits, needs, and anything adopters should know..."
                                                />

                                                <FieldError />
                                            </TextField>
                                        </FieldGroup>

                                        <Fieldset.Actions className="mt-2 flex gap-4 sm:mt-6 sm:gap-8">
                                            <Button
                                                slot="close"
                                                variant="outline"
                                                size="lg"
                                                className="transition-default h-12 w-full flex-1 border-2 border-primary/20 hover:scale-105 hover:bg-primary/10"
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                slot="close"
                                                type="submit"
                                                size="lg"
                                                className="bg-gradient transition-default h-12 w-full flex-1 font-semibold text-white hover:scale-105 hover:brightness-105"
                                            >
                                                Update
                                            </Button>
                                        </Fieldset.Actions>
                                    </Fieldset>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}