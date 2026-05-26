"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";

const DeleteRequestAlert = ({ id, petName }) => {
    const router = useRouter();

    const handleDelete = async () => {

        const { data: tokenData } = await authClient.token();

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/adoptions/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${tokenData?.token}`,
                    }
                }
            );

            const data = await res.json();

            if (data.deletedCount > 0) {
                toast.success("Request deleted successfully!");
                router.refresh();
            } else {
                toast.error("Failed to delete this Request");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    };


    return (
        <AlertDialog>
            <Button
                variant="outline"
                className="border-red-500/20 font-semibold text-red-500 hover:bg-red-500/10 flex-1"
            >
                <FaTrash />

                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="warning" />
                            <AlertDialog.Heading>
                                Are you sure want to Cancel?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently cancel the request of <strong className="text-primary">{petName}</strong>{" "}
                                and all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                No
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Yes
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteRequestAlert;