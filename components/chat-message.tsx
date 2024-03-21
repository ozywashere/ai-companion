"use client"

import {BeatLoader} from "react-spinners";
import {useToast} from "@/components/ui/use-toast"
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";
import BotAvatar from "@/components/bot-avatar";
import UserAvatar from "@/components/user-avatar";
import {Button} from "@/components/ui/button";
import {Copy} from "lucide-react";

export interface ChatMessageProps {
    role: "user" | "system"
    content?: string
    isLoading?: boolean
    src?: string

}

const ChatMessage = ({
                         role,
                         content,
                         isLoading,
                         src
                     }: ChatMessageProps) => {
    const {toast} = useToast()
    const {theme} = useTheme()


    const onCopy = () => {
        if (!content) {
            return;
        }
        navigator.clipboard.writeText(content)
        toast({
            description: "Copied to clipboard",
        })
    }

    return (
        <div className={cn(
            "group flex items-start gap-x-3 py-4 w-full",
            role === "user" && "justify-end"
        )}>
            {role !== "user" && src && <BotAvatar src={src}/>}
            <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
                {
                    isLoading ? <BeatLoader

                        color={theme === "dark" ? "#fff" : "#000"}

                        size={5}

                    /> : content
                }
            </div>
            {role === "user" && <UserAvatar/>}
            {role !== "user" && !isLoading && (
                <Button
                    onClick={onCopy}
                    size="icon"
                    variant="ghost"
                    className="group-hover:opacity-100 opacity-0 transition-opacity duration-200">
                    <Copy className="size-4"/>
                </Button>
            )

            }
        </div>
    );
};

export default ChatMessage;