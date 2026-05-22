'use server'

import { getCurrentUser } from "@/utils/getCurrentUser";


const TestPage = async () => {
    const user = await getCurrentUser();

    return (
        <div>
            Test Page
        </div>
    );
};

export default TestPage;