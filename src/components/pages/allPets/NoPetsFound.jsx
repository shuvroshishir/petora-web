import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NoPetsFound = () => {
    return (
        <div className="col-span-full flex flex-col items-center justify-center rounded-4xl border border-dashed border-primary/20 bg-accent px-6 py-16 text-center mt-10">

            {/* Icon */}
            <div className="flex-center mb-5 h-20 w-20 rounded-full bg-primary/10 text-4xl text-primary">
                🐾
            </div>

            {/* Title */}
            <h2 className="text-2xl font-black text-foreground">
                No Pets Found
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-muted-foreground">
                Sorry, we couldn&apos;t find any pets matching your search or filter.
                Try changing the search keyword or selecting another species.
            </p>

            {/* Reset Button */}
            <Link href='/all-pets'>
                <Button
                    className="bg-gradient mt-6 text-white hover:brightness-110"
                >
                    Browse All Pets
                </Button>
            </Link>
        </div>

    );
};

export default NoPetsFound;