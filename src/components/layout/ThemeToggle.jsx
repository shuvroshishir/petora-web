"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
                className="hover:bg-accent"
            >
                <div className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Button
            isIconOnly
            variant="light"
            className="hover:bg-accent"
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
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )
            }
        </Button>
    );
};

export default ThemeToggle;