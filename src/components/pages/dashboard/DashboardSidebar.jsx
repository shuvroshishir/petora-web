"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaClipboardList,
    FaHeart,
    FaPlus,
    FaUser,
} from "react-icons/fa";

const DashboardSidebar = () => {
    const pathname = usePathname();

    const menus = [
        {
            title: "Profile",
            href: "/dashboard",
            icon: <FaUser />,
        },
        {
            title: "My Requests",
            href: "/dashboard/my-requests",
            icon: <FaClipboardList />,
        },
        {
            title: "Add Pet",
            href: "/dashboard/add-pet",
            icon: <FaPlus />,
        },
        {
            title: "My Listings",
            href: "/dashboard/my-listings",
            icon: <FaHeart />,
        },
    ];

    return (
        <aside className="hidden w-72 border-r border-primary/10 bg-accent lg:block">

            {/* Menu */}
            <div className="p-4">
                <p className="mb-4 px-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Menu
                </p>

                <div className="space-y-2">
                    {menus.map((menu) => (
                        <Link
                            key={menu.href}
                            href={menu.href}
                            className={`transition-default flex items-center gap-3 rounded-2xl px-4 py-3 font-medium ${pathname === menu.href
                                ? "bg-primary text-white"
                                : "text-foreground hover:bg-background"
                                }`}
                        >
                            {menu.icon}

                            {menu.title}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;