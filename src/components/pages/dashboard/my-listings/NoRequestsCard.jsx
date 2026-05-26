import React from 'react';
import { FaPaw } from 'react-icons/fa6';

const NoRequestsCard = () => {
    return (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-4xl border border-dashed border-primary/20 bg-accent p-10 text-center">

            <div className="flex-center h-24 w-24 rounded-full bg-primary/10 text-5xl text-primary">
                <FaPaw />
            </div>

            <h3 className="mt-6 text-xl sm:text-3xl font-black text-foreground">
                No Requests Yet
            </h3>

            <p className="mt-4 max-w-md sm:leading-8 text-muted-foreground">
                This pet has not
                received any
                adoption requests
                yet.
            </p>

        </div>
    );
};

export default NoRequestsCard;