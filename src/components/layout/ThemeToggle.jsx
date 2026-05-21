"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                isIconOnly
                variant="light"
                className="hover:bg-background"
            >
                <div className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Button
            isIconOnly
            variant="light"
            className="hover:bg-background"
            onClick={() =>
                setTheme(
                    theme === "dark"
                        ? "light"
                        : "dark"
                )
            }
        >
            {
                theme === "dark" ? (
                    <LuSun className="h-5 w-5  text-primary" />
                ) : (
                    <LuMoon className="h-5 w-5" />
                )
            }
        </Button>
    );
};

export default ThemeToggle;