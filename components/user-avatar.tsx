"use client"
import React from 'react';
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";


const UserAvatar = () => {
    const { user } = useUser();

    return (
        <Avatar className="size-12">
            <AvatarImage
                src={user?.imageUrl}
                alt="Bot"
            />
        </Avatar>
    );
};

export default UserAvatar;