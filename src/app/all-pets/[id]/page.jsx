import React from 'react';

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            PetDetailsPage
        </div>
    );
};

export default PetDetailsPage;