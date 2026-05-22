import React from 'react';

const AllPetsPage = async () => {
    await new Promise((resolve) =>
        setTimeout(resolve, 3000)
    );
    return (
        <div>
            AllPetsPage
        </div>
    );
};

export default AllPetsPage;