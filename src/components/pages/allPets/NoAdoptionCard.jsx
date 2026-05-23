import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

const NoAdoptionCard = () => {
    return (
        <div className="rounded-[32px] border border-primary/10 bg-background p-8 shadow-sm">

            {/* Icon */}
            <div className="flex-center mx-auto h-20 w-20 rounded-full bg-primary/10 text-4xl text-primary">
                🐾
            </div>

            {/* Content */}
            <div className="mt-6 text-center">

                <div className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                    Your Listing
                </div>

                <h2 className="mt-5 text-3xl font-black text-foreground">
                    You Can’t Adopt Your Own Pet
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                    This pet was listed by you. Adoption requests
                    are only available for other users to ensure
                    a fair and proper adoption process.
                </p>

            </div>

            {/* Extra Info */}
            <div className="mt-8 rounded-2xl border border-primary/10 bg-accent p-5">

                <div className="flex items-start gap-4">

                    <div className="flex-center h-12 w-12 shrink-0 rounded-2xl bg-primary/10 text-primary">
                        <RiErrorWarningLine size={20} />
                    </div>

                    <div>

                        <h4 className="font-bold text-foreground">
                            Manage This Listing
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            You can edit, update, or manage adoption
                            requests for this pet from your dashboard.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default NoAdoptionCard;