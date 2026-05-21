import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { Rectangles4 } from '@gravity-ui/icons';
import Link from "next/link";

export function ProfileDropdown({ user, handleSignout }) {
    return (
        <Dropdown>
            <Dropdown.Trigger className="rounded-full">
                <Avatar className="w-9 h-9 border-3 border-primary/50">
                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover
                placement="bottom end"
            >
                <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{user?.name}</p>
                            <p className="text-xs leading-none text-muted">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <Dropdown.Menu>
                    <Dropdown.Item id="dashboard" textValue="Dashboard" as={Link} href="/dashboard">
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Dashboard</Label>
                            <Rectangles4 className="size-3.5 text-success" />
                        </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" textValue="Logout" variant="danger" onClick={handleSignout}>
                        <div className="flex w-full items-center justify-between gap-2">
                            <Label>Log Out</Label>
                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover >
        </Dropdown >
    );
}