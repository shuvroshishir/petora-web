"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "All Pets",
            href: "/all-pets",
        },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="container flex h-16 items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-1"
                    >
                        <Image
                            src="/assets/logo.jpg"
                            alt="Logo"
                            width={34}
                            height={34}
                            className="rounded-full"
                        />

                        <span className="text-xl font-bold">
                            Petora
                        </span>
                    </Link>
                </div>

                {/* Nav links */}
                <ul className="hidden md:flex items-center gap-2">
                    {
                        navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`text-foreground rounded-full px-4 py-2 text-sm font-medium transition-default
                                        ${pathname === item.href
                                            ? "bg-primary"
                                            : "hover:bg-accent"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {/* Right */}
                <div className="flex items-center gap-3">
                    {/* theme toggle button */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center justify-center rounded-lg p-2 transition hover:bg-accent md:hidden"
                    >
                        {
                            isMenuOpen ? (
                                <HiX className="h-5 w-5" />
                            ) : (
                                <HiMenu className="h-5 w-5" />
                            )
                        }
                    </button>


                    {/* Auth Buttons */}
                    <div className="hidden items-center gap-3 sm:flex">

                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary/10"
                            >
                                Login
                            </Button>
                        </Link>

                        <Link href="/register">
                            <Button className="bg-gradient text-background hover:brightness-105">
                                Get Started
                            </Button>
                        </Link>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setIsMenuOpen(!isMenuOpen)
                            }
                            className="flex items-center justify-center rounded-lg p-2 transition hover:bg-accent md:hidden"
                        >
                            {
                                isMenuOpen ? (
                                    <HiX className="h-5 w-5" />
                                ) : (
                                    <HiMenu className="h-5 w-5" />
                                )
                            }
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="border-t border-border bg-background md:hidden">

                        <ul className="space-y-2 p-4">

                            {
                                navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setIsMenuOpen(false)
                                            }
                                            className={`block rounded-xl px-4 py-3 text-sm font-medium transition 
                                                ${pathname === item.href
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-accent"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }

                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col gap-3 pt-3">

                                <Link href="/login">
                                    <Button
                                        fullWidth
                                        variant="outline"
                                        className="border-primary text-primary hover:bg-primary/10"
                                    >
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/register">
                                    <Button
                                        fullWidth
                                        variant="solid"
                                        className="bg-gradient text-background hover:brightness-105"
                                    >
                                        Get Started
                                    </Button>
                                </Link>

                            </div>
                        </ul>
                    </div>
                )
            }
        </nav>
    );
};

export default NavBar;