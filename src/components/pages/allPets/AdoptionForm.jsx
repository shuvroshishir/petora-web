"use client"

import {
    Button,
    DateInput,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

const AdoptionForm = ({ pet, user }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(
            formData.entries()
        );

        const adoptionData = {
            petId: pet._id,

            petName: pet.petName,

            petImage: pet.image,

            ownerEmail: pet.ownerEmail,

            adopterName: user.name,

            adopterEmail: user.email,

            adopterImage: user.image,

            pickupDate: new Date(data.pickupDate),

            message: data.message,

            status: "pending",

            createdAt: new Date(),
        };

        console.log('adoptionData', adoptionData);
    };


    return (
        <div className="xl:sticky xl:top-28 xl:h-fit">

            <div className="rounded-2xl border border-primary/10 bg-accent p-6 md:p-8">

                {/* Header */}
                <div>

                    <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                        Adoption Form
                    </div>

                    <h2 className="mt-4 text-4xl font-black text-foreground">
                        Adopt <span className="text-primary">{pet.petName}?</span>
                    </h2>

                    <p className="mt-3 text-muted-foreground">
                        Fill out the form below to submit
                        your adoption request.
                    </p>

                </div>

                {/* Form */}
                <Form
                    className="mt-8 w-full"
                    onSubmit={handleSubmit}
                >

                    <Fieldset>

                        <FieldGroup className="space-y-5">

                            {/* Pet Name */}
                            <TextField
                                name="petName"
                                isReadOnly
                            >
                                <Label>
                                    Pet Name
                                </Label>

                                <Input
                                    value={
                                        pet.petName
                                    }
                                    readOnly
                                />
                            </TextField>

                            {/* User Name */}
                            <TextField
                                name="userName"
                                isReadOnly
                            >
                                <Label>
                                    User Name
                                </Label>

                                <Input
                                    value={
                                        user.name
                                    }
                                    readOnly
                                />
                            </TextField>

                            {/* User Email */}
                            <TextField
                                name="userEmail"
                                isReadOnly
                            >
                                <Label>
                                    User Email
                                </Label>

                                <Input
                                    value={
                                        user.email
                                    }
                                    readOnly
                                />
                            </TextField>

                            {/* Pickup Date */}
                            <TextField
                                isRequired
                                name="pickupDate"
                            >
                                <Label>
                                    Pickup Date
                                </Label>

                                <Input
                                    type="date"
                                />

                                <FieldError />
                            </TextField>

                            {/* Message */}
                            <TextField
                                isRequired
                                name="message"
                                validate={(value) => {
                                    if (
                                        value.length <
                                        10
                                    ) {
                                        return "Message must be at least 10 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>
                                    Message
                                </Label>

                                <TextArea
                                    placeholder="Tell us why you want to adopt this pet..."
                                    className="min-h-32"
                                />

                                <FieldError />
                            </TextField>

                        </FieldGroup>

                        {/* Button */}
                        <Fieldset.Actions className="mt-8 w-full">

                            <Button
                                type="submit"
                                size="lg"
                                className="bg-gradient h-14 w-full text-lg font-semibold text-white transition-default hover:scale-105 hover:brightness-105"
                            >
                                Submit Adoption Request
                            </Button>

                        </Fieldset.Actions>

                    </Fieldset>

                </Form>

            </div>

        </div>
    );
};

export default AdoptionForm;