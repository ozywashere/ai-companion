"use client"
import React from 'react';
import {Menu, Sparkles} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Poppins} from "next/font/google";
import {UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/theme-toggle";
import MobileSidebar from "@/components/mobile-sidebar";
import {useProModal} from "@/hooks/use-pro-modal";

const font = Poppins({
    weight: "600",
    subsets: ["latin"],
});

interface HeaderProps {
    isPro: boolean;

}

const Header = ({isPro}: HeaderProps) => {

    const proModal = useProModal();
    return (
        <header
            className="fixed w-full z-50 flex items-center justify-between py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                    <h1 className={cn("hidden, md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        AI Companion
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                {!isPro && (
                    <Button onClick={proModal.onOpen} size="sm" variant="premium">
                        Upgrade
                        <Sparkles className="h-4 w-4  fill-white text-white ml-2"/>
                    </Button>
                )}
                <ThemeToggle/>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </header>
    );
};

export default Header;