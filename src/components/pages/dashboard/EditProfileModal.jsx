"use client";


import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function EditProfileModal({ user }) {
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.newName.value;
        const image = e.target.newImageUrl.value;

        await authClient.updateUser(
            {
                name,
                image,
            },
            {
                onSuccess: () => {
                    toast.success("Updated Successfully");
                    router.refresh();
                },

                onError: (ctx) => {
                    toast.error(
                        ctx.error.message || "Failed to update profile"
                    );
                },
            }
        );
    };


    return (
        <Modal>
            <Button
                size="lg"
                className="bg-gradient font-semibold text-white"
            >
                <BiEdit />
                Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Profile </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                                    onSubmit={handleUpdate} className=" space-y-8">
                                    <div className=" flex flex-col gap-4">

                                        <TextField
                                            name="newName"
                                            defaultValue={user?.name}
                                            isRequired
                                        >
                                            <Label>Name</Label>
                                            <Input
                                                type="text"
                                                placeholder="John Doe"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="newImageUrl"
                                            defaultValue={user?.image}
                                            isRequired
                                        >
                                            <Label>Image URL</Label>
                                            <Input
                                                type="url"
                                                placeholder="https://example.com/image.jpg"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Buttons */}

                                    <Modal.Footer>
                                        <Button variant="outline" slot="close">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close" className="bg-gradient font-semibold text-white">
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}