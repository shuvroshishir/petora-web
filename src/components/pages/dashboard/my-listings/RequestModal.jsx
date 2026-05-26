
import {
    Button,
    Modal,
    Surface,
} from "@heroui/react";
import { FaClipboardList } from "react-icons/fa6";
import NoRequestsCard from "./NoRequestsCard";
import RequestCard from "./RequestCard";


export function RequestModal({ pet, requests, }) {

    return (
        <Modal key="center">

            {/* Trigger */}
            <Button
                size="lg"
                className="w-full border-yellow-500/20 font-semibold text-amber-500 hover:bg-yellow-500/10"
                variant="outline"
            >
                <FaClipboardList />
                Requests
            </Button>

            {/* Modal */}
            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="max-h-[90vh] overflow-hidden bg-background sm:max-w-4xl">

                        <Modal.CloseTrigger />

                        {/* Body */}
                        <Modal.Body className="overflow-y-auto p-2">
                            {/* Header */}
                            <div className="py-5 sm:px-5">

                                <div className="flex sm:flex-row sm:items-center sm:justify-between">

                                    <div>

                                        <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                                            Requests
                                        </div>

                                        <h2 className="mt-4 text-xl sm:text-2xl font-black text-foreground">
                                            Adoption Requests
                                        </h2>

                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Review all adoption
                                            requests for{" "}
                                            <span className="font-semibold text-foreground">
                                                {
                                                    pet.petName
                                                }
                                            </span>
                                        </p>

                                    </div>

                                    {/* Count */}
                                    <div className="flex-center h-15 w-15 rounded-3xl bg-primary/10 text-3xl font-black text-primary">
                                        {
                                            requests.length
                                        }
                                    </div>

                                </div>

                            </div>


                            {
                                requests.length === 0 ?
                                    <NoRequestsCard />
                                    :
                                    <Surface className="space-y-5  bg-background">
                                        {
                                            requests.map(request => <RequestCard key={request._id} request={request} />)
                                        }
                                    </Surface>
                            }

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}