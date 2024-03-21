import React from 'react';
import {Companion, Message} from "@prisma/client";
import {Button} from "@/components/ui/button";
import {ChevronLeftIcon, Edit, MessagesSquare, MoreVertical, Trash} from "lucide-react";
import {useRouter} from "next/navigation";
import BotAvatar from "@/components/bot-avatar";
import {useUser} from "@clerk/nextjs";
import {useToast} from "@/components/ui/use-toast"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import axios from "axios";

interface ChatHeaderProps {
    companion: Companion & {
        messages: Message[];
        _count: {
            messages: number;
        };
    };
};

const ChatHeader = ({companion}: ChatHeaderProps) => {
    const router = useRouter();
    const {user} = useUser();
    const {toast} = useToast();

    const onDelete = async () => {
        try {
            await axios.delete(`/api/companion/${companion.id}`);
            toast({
                description: "Chat deleted",
            })
            router.refresh();
            router.push("/")
            
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Something went wrong",
            })
        }
    }

    return (
        <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
            <div className="flex gap-x-2 items-center">
                <Button size="icon" variant="ghost" onClick={() => router.back()}>
                    <ChevronLeftIcon className="size-8"/>
                </Button>
                <BotAvatar src={companion.src}/>
                <div className="flex flex-col gap-y-1">
                    <div className="flex items-center gap-x-2">
                        <p className="font-bold">
                            {companion.name}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <MessagesSquare className="size-4 mr-1"/>
                            {companion._count.messages}
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Created by {companion.userName}
                    </p>
                </div>
            </div>
            {user?.id === companion.userId && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="secondary">
                            <MoreVertical className="size-8"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => router.push(`/companion/${companion.id}`)}>
                            <Edit className="size-4 mr-2"/>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={onDelete}>
                            <Trash className="size-4 mr-2"/>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
};

export default ChatHeader;