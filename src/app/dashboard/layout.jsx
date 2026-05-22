import DashboardSidebar from "@/components/pages/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-background">

            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col">

                {/* Page Content */}
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default DashboardLayout;